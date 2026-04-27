// ========== ХЕШИРОВАНИЕ ПАРОЛЯ ==========
function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        hash = ((hash << 5) - hash) + password.charCodeAt(i);
        hash |= 0;
    }
    return hash.toString();
}

// ========== ХРАНИЛИЩЕ ФОТОГРАФИЙ КОМАНДИРОВ ==========
function getCommanderPhoto(commanderId) {
    const photos = JSON.parse(localStorage.getItem('commanderPhotos') || '{}');
    return photos[commanderId] || null;
}

function setCommanderPhoto(commanderId, photoData) {
    const photos = JSON.parse(localStorage.getItem('commanderPhotos') || '{}');
    photos[commanderId] = photoData;
    localStorage.setItem('commanderPhotos', JSON.stringify(photos));
}

function getCadetPhoto(cadetId) {
    var photos = JSON.parse(localStorage.getItem('cadetPhotos') || '{}');
    return photos[cadetId] || null;
}

// ========== ИНИЦИАЛИЗАЦИЯ ДАННЫХ ==========
function initData() {
    if (!localStorage.getItem('users')) {
        const users = [
            { id: 1, role: 'admin', login: 'admin', password: hashPassword('admin123'), name: 'Администратор', birthdate: '1990-01-01', platoon: null, lastLogin: null },
            { id: 2, role: 'commander', login: 'commander1', password: hashPassword('pass123'), name: 'Иванов Иван Иванович', birthdate: '1985-05-15', platoon: 1, lastLogin: null }
        ];
        localStorage.setItem('users', JSON.stringify(users));
    }
    if (!localStorage.getItem('cadets')) {
        localStorage.setItem('cadets', JSON.stringify([]));
    }
    if (!localStorage.getItem('testResults')) {
        localStorage.setItem('testResults', JSON.stringify([]));
    }
    if (!localStorage.getItem('commanders')) {
        localStorage.setItem('commanders', JSON.stringify([]));
    }
    if (!localStorage.getItem('commanderPhotos')) {
        localStorage.setItem('commanderPhotos', JSON.stringify({}));
    }
    console.log('Данные инициализированы');
}

// ========== ПОЛУЧЕНИЕ ТЕКУЩЕГО ПОЛЬЗОВАТЕЛЯ ==========
function getCurrentUser() {
    const userJson = sessionStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
}

// ========== ВЫХОД ==========
function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// ========== АВТОРИЗАЦИЯ ==========
function login(loginVal, passwordVal) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const cadets = JSON.parse(localStorage.getItem('cadets') || '[]');
    const commanders = JSON.parse(localStorage.getItem('commanders') || '[]');
    
    const hashedPassword = hashPassword(passwordVal);
    
    let user = users.find(u => u.login === loginVal && u.password === hashedPassword);
    if (user) {
        user.lastLogin = new Date().toISOString();
        localStorage.setItem('users', JSON.stringify(users));
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        return user;
    }
    
    let commander = commanders.find(c => c.login === loginVal && c.password === hashedPassword);
    if (commander) {
        commander.lastLogin = new Date().toISOString();
        localStorage.setItem('commanders', JSON.stringify(commanders));
        sessionStorage.setItem('currentUser', JSON.stringify(commander));
        return commander;
    }
    
    let cadet = cadets.find(c => c.login === loginVal && c.password === hashedPassword);
    if (cadet) {
        cadet.lastLogin = new Date().toISOString();
        localStorage.setItem('cadets', JSON.stringify(cadets));
        sessionStorage.setItem('currentUser', JSON.stringify(cadet));
        return cadet;
    }
    
    return null;
}

// ========== РЕГИСТРАЦИЯ КАДЕТА ==========
function registerCadet(name, platoon, birthdate, loginVal, passwordVal) {
    const cadets = JSON.parse(localStorage.getItem('cadets') || '[]');
    
    if (cadets.some(c => c.login === loginVal)) {
        return { success: false, message: 'Логин уже существует' };
    }
    
    const newCadet = {
        id: Date.now(),
        role: 'cadet',
        login: loginVal,
        password: hashPassword(passwordVal),
        name: name,
        birthdate: birthdate,
        platoon: parseInt(platoon),
        lastLogin: null,
        registeredAt: new Date().toISOString()
    };
    
    cadets.push(newCadet);
    localStorage.setItem('cadets', JSON.stringify(cadets));
    return { success: true, message: 'Регистрация успешна' };
}

// ========== РЕГИСТРАЦИЯ КОМАНДИРА (администратор) ==========
function registerCommander(name, birthdate, platoon, loginVal, passwordVal) {
    const commanders = JSON.parse(localStorage.getItem('commanders') || '[]');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (commanders.some(c => c.login === loginVal) || users.some(u => u.login === loginVal)) {
        return { success: false, message: 'Логин уже существует' };
    }
    
    const newCommander = {
        id: Date.now(),
        role: 'commander',
        login: loginVal,
        password: hashPassword(passwordVal),
        name: name,
        birthdate: birthdate,
        platoon: parseInt(platoon),
        lastLogin: null,
        registeredAt: new Date().toISOString()
    };
    
    commanders.push(newCommander);
    localStorage.setItem('commanders', JSON.stringify(commanders));
    return { success: true, message: 'Командир взвода зарегистрирован' };
}

// ========== ПОЛУЧЕНИЕ ДАННЫХ ==========
function getCadetsByPlatoon(platoon) {
    const cadets = JSON.parse(localStorage.getItem('cadets') || '[]');
    return cadets.filter(c => c.platoon === platoon);
}

function getAllCadets() {
    return JSON.parse(localStorage.getItem('cadets') || '[]');
}

function getAllCommanders() {
    const commanders = JSON.parse(localStorage.getItem('commanders') || '[]');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return [...users.filter(u => u.role === 'commander'), ...commanders];
}

function getPlatoonResults(platoon) {
    const cadets = getCadetsByPlatoon(platoon);
    const results = JSON.parse(localStorage.getItem('testResults') || '[]');
    const cadetIds = cadets.map(c => c.id);
    return results.filter(r => cadetIds.includes(r.cadetId));
}

function saveTestResult(cadetId, topicId, score, totalQuestions, answers) {
    const results = JSON.parse(localStorage.getItem('testResults') || '[]');
    const existingIndex = results.findIndex(r => r.cadetId === cadetId && r.topicId === topicId);
    
    const newResult = {
        cadetId: cadetId,
        topicId: topicId,
        score: score,
        totalQuestions: totalQuestions,
        answers: answers,
        completedAt: new Date().toISOString()
    };
    
    if (existingIndex !== -1) {
        results[existingIndex] = newResult;
    } else {
        results.push(newResult);
    }
    localStorage.setItem('testResults', JSON.stringify(results));
}

// ========== ВОПРОСЫ ДЛЯ ТЕСТОВ (12 тем) ==========
function getTopicQuestions(topicId) {
    const questions = {
        1: [
            { question: "Когда была создана Росгвардия?", options: ["5 апреля 2016", "12 июня 2015", "1 сентября 2017"], correct: 0 },
            { question: "Кто является Верховным Главнокомандующим?", options: ["Президент РФ", "Министр обороны", "Директор Росгвардии"], correct: 0 },
            { question: "Какое подразделение занимается охраной общественного порядка?", options: ["ОМОН", "СОБР", "Вневедомственная охрана"], correct: 2 },
            { question: "Девиз Росгвардии?", options: ["Всегда на страже", "Служу России", "За нами правда"], correct: 0 },
            { question: "Кто входит в состав Росгвардии?", options: ["ВНГ РФ", "ВДВ", "ВМФ"], correct: 0 }
        ],
        2: [
            { question: "Какое звание у А.А. Романова?", options: ["Генерал-полковник", "Генерал-лейтенант", "Полковник"], correct: 0 },
            { question: "В каком году был тяжело ранен А.А. Романов?", options: ["1995", "1994", "1996"], correct: 0 },
            { question: "Какое звание присвоено А.А. Романову?", options: ["Герой России", "Герой Советского Союза", "Орден Мужества"], correct: 0 },
            { question: "В каком училище учился А.А. Романов?", options: ["Саратовское", "Московское", "Пермское"], correct: 0 },
            { question: "Какое качество характеризует А.А. Романова?", options: ["Стойкость", "Безразличие", "Равнодушие"], correct: 0 }
        ],
        3: [
            { question: "Что делают инженерные войска?", options: ["Строят мосты", "Лечат раненых", "Водят самолёты"], correct: 0 },
            { question: "Где готовят инженерные кадры для Росгвардии?", options: ["ПВИ", "МГУ", "СПбГУ"], correct: 0 },
            { question: "Сколько лет обучение в ПВИ?", options: ["5 лет", "4 года", "6 лет"], correct: 0 },
            { question: "Какое звание получают выпускники ПВИ?", options: ["Лейтенант", "Младший сержант", "Прапорщик"], correct: 0 },
            { question: "Что изучают курсанты инженерного факультета?", options: ["Взрывные работы", "Медицину", "Юриспруденцию"], correct: 0 }
        ],
        4: [
            { question: "Сколько лет атомной промышленности России?", options: ["80 лет", "70 лет", "100 лет"], correct: 0 },
            { question: "Что такое АЭС?", options: ["Атомная электростанция", "Автоматическая станция", "Авиационная станция"], correct: 0 },
            { question: "Кто руководит атомной отраслью?", options: ["Росатом", "Роскосмос", "Роснефть"], correct: 0 },
            { question: "Какой элемент используется в ядерных реакторах?", options: ["Уран", "Плутоний", "Радий"], correct: 0 },
            { question: "Где находится первая в мире АЭС?", options: ["Обнинск", "Москва", "Санкт-Петербург"], correct: 0 }
        ],
        5: [
            { question: "Когда был запущен первый спутник?", options: ["4 октября 1957", "12 апреля 1961", "20 июля 1969"], correct: 0 },
            { question: "Кто был первым космонавтом?", options: ["Юрий Гагарин", "Герман Титов", "Валентина Терешкова"], correct: 0 },
            { question: "Как называется российская навигационная система?", options: ["ГЛОНАСС", "GPS", "Galileo"], correct: 0 },
            { question: "Какая ракета используется для запуска спутников?", options: ["Союз", "Сатурн", "Дельта"], correct: 0 },
            { question: "Сколько космодромов в России?", options: ["6", "4", "8"], correct: 0 }
        ],
        6: [
            { question: "Что такое АПК?", options: ["Агропромышленный комплекс", "Автоматический комплекс", "Авиационный комплекс"], correct: 0 },
            { question: "Что такое продовольственная безопасность?", options: ["Обеспечение страны продуктами", "Экспорт продуктов", "Импорт продуктов"], correct: 0 },
            { question: "Какая профессия связана с АПК?", options: ["Агроном", "Врач", "Учитель"], correct: 0 },
            { question: "Что выращивают в теплицах?", options: ["Овощи", "Зерно", "Подсолнечник"], correct: 0 },
            { question: "Какая техника используется в сельском хозяйстве?", options: ["Трактор", "Самолёт", "Поезд"], correct: 0 }
        ],
        7: [
            { question: "Что такое энергия?", options: ["Способность совершать работу", "Вид топлива", "Электрический ток"], correct: 0 },
            { question: "Какой источник энергии является возобновляемым?", options: ["Солнечный свет", "Уголь", "Нефть"], correct: 0 },
            { question: "Что производят на ГЭС?", options: ["Электроэнергию", "Тепло", "Воду"], correct: 0 },
            { question: "Какая профессия связана с энергетикой?", options: ["Электромонтёр", "Строитель", "Продавец"], correct: 0 },
            { question: "Как экономить электроэнергию?", options: ["Выключать свет", "Включать свет", "Оставлять приборы"], correct: 0 }
        ],
        8: [
            { question: "Кто основал внутреннюю стражу?", options: ["Граф Комаровский", "Пётр I", "Александр Невский"], correct: 0 },
            { question: "В каком году создана внутренняя стража?", options: ["1811", "1700", "1917"], correct: 0 },
            { question: "Под чьим командованием служил Комаровский?", options: ["Суворов", "Кутузов", "Жуков"], correct: 0 },
            { question: "Какое звание у Комаровского?", options: ["Генерал от инфантерии", "Фельдмаршал", "Капитан"], correct: 0 },
            { question: "Сколько лет он руководил корпусом?", options: ["15 лет", "10 лет", "5 лет"], correct: 0 }
        ],
        9: [
            { question: "Что такое ОПК?", options: ["Оборонно-промышленный комплекс", "Оперативный комплекс", "Оборонный корпус"], correct: 0 },
            { question: "Какой автомобиль используется в Росгвардии?", options: ["Тигр", "Жигули", "Волга"], correct: 0 },
            { question: "Что производят на оборонных заводах?", options: ["Военную технику", "Мебель", "Одежду"], correct: 0 },
            { question: "Какая профессия нужна в судостроении?", options: ["Корабельный электрик", "Учитель", "Дизайнер"], correct: 0 },
            { question: "Что такое станок с ЧПУ?", options: ["Программируемый станок", "Ручной станок", "Сварочный аппарат"], correct: 0 }
        ],
        10: [
            { question: "Что такое честь?", options: ["Достоинство и принципы", "Наряд", "Награда"], correct: 0 },
            { question: "Что такое мужество?", options: ["Преодоление страха", "Трусость", "Безразличие"], correct: 0 },
            { question: "Чьё имя носит Пермское кадетское училище?", options: ["Ф. Кузьмина", "А. Романова", "М. Шолохова"], correct: 0 },
            { question: "Какое качество кадета самое важное?", options: ["Дисциплина", "Скорость", "Сила"], correct: 0 },
            { question: "Что значит служить Отечеству?", options: ["Защищать страну", "Работать за деньги", "Жить за границей"], correct: 0 }
        ],
        11: [
            { question: "Кто создал первый космический корабль?", options: ["С.П. Королёв", "К.Э. Циолковский", "Ю.А. Гагарин"], correct: 0 },
            { question: "Как называется орбитальная станция?", options: ["МКС", "Салют", "Мир"], correct: 0 },
            { question: "Какая организация управляет космической отраслью?", options: ["Роскосмос", "Росатом", "Роснефть"], correct: 0 },
            { question: "Что получают со спутников?", options: ["Снимки Земли", "Нефть", "Газ"], correct: 0 },
            { question: "Как называется профессия космического инженера-испытателя?", options: ["Инженер-испытатель", "Космонавт", "Астроном"], correct: 0 }
        ],
        12: [
            { question: "Что ищут собаки-сапёры?", options: ["Взрывчатку", "Еду", "Воду"], correct: 0 },
            { question: "Какая порода часто служит в кинологии?", options: ["Овчарка", "Болонка", "Пудель"], correct: 0 },
            { question: "Где готовят кинологов для Росгвардии?", options: ["ПВИ", "МГУ", "СПбГУ"], correct: 0 },
            { question: "Как называется профессия специалиста по собакам?", options: ["Кинолог", "Ветеринар", "Зоолог"], correct: 0 },
            { question: "Что означает верность для кинолога?", options: ["Не предавать", "Быть сильным", "Быть быстрым"], correct: 0 }
        ]
    };
    return questions[topicId] || [];
}
// ========== ФУНКЦИИ ДЛЯ ЧАТА ==========

// Отправить сообщение
// Отправить сообщение
function sendChatMessage(fromId, fromName, fromRole, toId, toName, toRole, message) {
    var messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
    
    var newMessage = {
        id: Date.now(),
        fromId: fromId,
        fromName: fromName,
        fromRole: fromRole,
        toId: toId,
        toName: toName,
        toRole: toRole,
        message: message,
        read: false,
        createdAt: new Date().toISOString()
    };
    
    messages.push(newMessage);
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    
    // Уведомляем другие вкладки об изменении
    localStorage.setItem('chatMessagesUpdated', Date.now().toString());
    
    return true;
}

// Получить диалог между двумя пользователями
function getDialog(user1Id, user2Id) {
    var messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
    return messages.filter(function(m) {
        return (m.fromId === user1Id && m.toId === user2Id) ||
               (m.fromId === user2Id && m.toId === user1Id);
    }).sort(function(a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
    });
}

// Получить все диалоги для пользователя
function getDialogs(userId) {
    var messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
    var userMessages = messages.filter(function(m) {
        return m.fromId === userId || m.toId === userId;
    });
    
    var dialogs = {};
    for (var i = 0; i < userMessages.length; i++) {
        var m = userMessages[i];
        var otherId = m.fromId === userId ? m.toId : m.fromId;
        var otherName = m.fromId === userId ? m.toName : m.fromName;
        var otherRole = m.fromId === userId ? m.toRole : m.fromRole;
        
        if (!dialogs[otherId] || new Date(m.createdAt) > new Date(dialogs[otherId].lastMessage.createdAt)) {
            var unreadCount = messages.filter(function(msg) {
                return msg.fromId === otherId && msg.toId === userId && !msg.read;
            }).length;
            
            dialogs[otherId] = {
                userId: otherId,
                name: otherName,
                role: otherRole,
                lastMessage: m,
                unreadCount: unreadCount
            };
        }
    }
    
    var result = [];
    for (var key in dialogs) {
        result.push(dialogs[key]);
    }
    return result.sort(function(a, b) {
        return new Date(b.lastMessage.createdAt) - new Date(a.lastMessage.createdAt);
    });
}

// Отметить сообщения как прочитанные
// Отметить сообщения как прочитанные
function markMessagesAsRead(fromId, toId) {
    var messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
    var updated = false;
    for (var i = 0; i < messages.length; i++) {
        if (messages[i].fromId === fromId && messages[i].toId === toId && !messages[i].read) {
            messages[i].read = true;
            updated = true;
        }
    }
    if (updated) {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
        // Уведомляем другие вкладки об изменении
        localStorage.setItem('chatMessagesUpdated', Date.now().toString());
    }
}

// Инициализация хранилища чата
if (!localStorage.getItem('chatMessages')) {
    localStorage.setItem('chatMessages', JSON.stringify([]));
}
// Получить общее количество непрочитанных сообщений для пользователя
function getTotalUnreadCount(userId) {
    var messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
    var count = 0;
    for (var i = 0; i < messages.length; i++) {
        if (messages[i].toId === userId && !messages[i].read) {
            count++;
        }
    }
    return count;
}
// Получить количество непрочитанных сообщений от конкретного отправителя
function getUnreadCountFrom(fromId, toId) {
    var messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
    var count = 0;
    for (var i = 0; i < messages.length; i++) {
        if (messages[i].fromId === fromId && messages[i].toId === toId && !messages[i].read) {
            count++;
        }
    }
    return count;
}

// ========== ЗАПУСК ==========
initData();
// ========== PWA SERVICE WORKER ==========
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('Service Worker зарегистрирован, область:', registration.scope);
            })
            .catch(function(error) {
                console.log('Ошибка регистрации Service Worker:', error);
            });
    });
}