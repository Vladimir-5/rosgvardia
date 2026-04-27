// Данные занятий по месяцам
const lessonsByMonth = {
    september: [
        { day: '18', month: 'сентября', title: 'Тема 1. Росгвардия — сила и безопасность России', link: 'topic1.html' },
        { day: '25', month: 'сентября', title: 'Тема 2. Непобежденный: подвиг Героя России генерал-полковника Анатолия Александровича Романова', link: 'topic2.html' }
    ],
    october: [
        { day: '02', month: 'октября', title: 'Тема 3. Инженерные войска: Умная сила армии', link: 'topic3.html' },
        { day: '09', month: 'октября', title: 'Тема 4. Атомная отрасль России: технологический щит Родины', link: 'topic4.html' },
        { day: '23', month: 'октября', title: 'Тема 5. Космическая отрасль России: орбиты технологий и безопасности', link: 'topic5.html' }
    ],
    november: [
        { day: '13', month: 'ноября', title: 'Тема 6. Россия аграрная: продовольственная безопасность и надежный тыл', link: 'topic6.html' },
        { day: '20', month: 'ноября', title: 'Тема 7. Энергетика - основа жизни страны', link: 'topic7.html' },
        { day: '27', month: 'ноября', title: 'Тема 8. Граф Комаровский: основатель внутренней стражи, верный слуга Отечества', link: 'topic8.html' }
    ],
    january: [
        { day: '16', month: 'января', title: 'Тема 9. Стальной кулак правопорядка: роль оборонного машиностроения и судостроения в оснащении Росгвардии', link: 'topic9.html' }
    ],
    february: [
        { day: '16', month: 'февраля', title: 'Тема 10. Настоящий кадет: Честь и мужество', link: 'topic10.html' },
        { day: '26', month: 'февраля', title: 'Тема 11. Россия индустриальная: космическая отрасль', link: 'topic11.html' }
    ],
    march: [
        { day: '05', month: 'марта', title: 'Тема 12. Кинологическая служба ВНГ: верность длиною в жизнь', link: 'topic12.html' }
    ]
};

// Данные материалов для модального окна (все 12 занятий)
const materialsData = {
    1: {
        title: "Занятие №1 - Росгвардия — сила и безопасность России",
        files: [
            { name: "РОСГВАРДИЯ Презентационный фильм.mp4", size: "45 MB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1bd0bhliBATRKQXCRtdnMwS-G9hzIKQLM" },
            { name: "Раздаточный материал РОСГВАРДИЯ Презентационный фильм.docx", size: "156 KB", icon: "📝", url: "https://docs.google.com/document/d/12kzGbi0cCzvywa5xus-E9bO-gHOeKb6U/export?format=docx" },
            { name: "Презентация РМГ1.pptx", size: "3.2 MB", icon: "📊", url: "https://docs.google.com/presentation/d/14Yh0XC_p-gi-flpL3Ll8Okos8zOetGFU/export?format=pptx" },
            { name: "План проведения занятия.docx", size: "95 KB", icon: "📝", url: "https://docs.google.com/document/d/1p35SR9W9szu89AwuQlUTk_CVfkRefr-A/export?format=docx" }
        ]
    },
    2: {
        title: "Занятие №2 - Непобежденный: подвиг Героя России генерал-полковника Анатолия Александровича Романова",
        files: [
            { name: "План проведения занятия.docx", size: "142 KB", icon: "📝", url: "https://docs.google.com/document/d/1m4dPfQ0VYexvUoiz2c4oMN5Qv9MvaZym/export?format=docx" },
            { name: "Презентация РМГ2.pptx", size: "2.8 MB", icon: "📊", url: "https://docs.google.com/presentation/d/1klVd0IWN1442bH3ELR2jAVzgsn02pAH-/export?format=pptx" },
            { name: "Раздаточный материал.docx", size: "112 KB", icon: "📝", url: "https://docs.google.com/document/d/1LPhJZ17uTY2FMi-ZzjwPU6qyMiw_uNju/export?format=docx" }
        ]
    },
    3: {
        title: "Занятие №3 - Инженерные войска: Умная сила армии",
        files: [
            { name: "Фильм ПВИ ИО.mp4", size: "38 MB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1LHE9-J0gFw5c_de5e1tbAVSmWfPz3agL" },
            { name: "Презентация РМГ3.pptx", size: "3.5 MB", icon: "📊", url: "https://docs.google.com/presentation/d/1WrvCUsO8e_0SbsI_oy7MUnCAAp15RIYv/export?format=pptx" },
            { name: "Рабочая тетрадь.docx", size: "210 KB", icon: "📝", url: "https://docs.google.com/document/d/1lidWmD4WTWIt9iwQ1cw7OBxL0K-jA-KC/export?format=docx" },
            { name: "План проведения занятия.docx", size: "890 KB", icon: "📝", url: "https://drive.google.com/uc?export=download&id=1yVDuzmzZk-lYkp3at71NunP6yJ0D8vI5" }
        ]
    },
    4: {
        title: "Занятие №4 - Атомная отрасль России: технологический щит Родины",
        files: [
            { name: "План проведения занятия.docx", size: "2.9 MB", icon: "📝", url: "https://drive.google.com/uc?export=download&id=1p46ixW8Qx18DWgMg1Ld-7_-8STs-qCfS" },
            { name: "Видеоролик № 3 об образовании в атомной отрасли.mp4", size: "132 KB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1Pc6gLYoNRcUciDBF0WXPbitIMtYJ7DCa" },
            { name: "Презентация РМГ4.pptx", size: "890 KB", icon: "📊", url: "https://drive.google.com/uc?export=download&id=1QqFNg-MuXCSaswHyf792vgg2bBqmQ8lw" },
            { name: "Видеоролик № 2 — профориентационный.mp4", size: "95 KB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1MpkhFYd3C941IPQR3T74dt6aT4z3aOBc" },
            { name: "Видеоролик № 1 с обзором отрасли.mp4", size: "1.1 MB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1akrUL_JBZqviMlWMoZrdPg_hMJHCxc4a" }
        ]
    },
    5: {
        title: "Занятие №5 - Космическая отрасль России: орбиты технологий и безопасности",
        files: [
            { name: "План проведения занятия.docx", size: "178 KB", icon: "📝", url: "https://docs.google.com/document/d/1sDmQKa0SbWLJ96eXzF9NF6FaxmxRVGeJ/export?format=docx" },
            { name: "Презентация РМГ5.pptx", size: "3.1 MB", icon: "📊", url: "https://drive.google.com/uc?export=download&id=1UNSxeT0VvI4HApxIW8OS_renPauDk1mX" },
            { name: "Видеоролик № 3 об образовании.mp4", size: "42 MB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1jiOxNnns3pQfnBHnPtMK3PUcQiL0QupK" },
            { name: "Видеоролик № 2 о профессиях.mp4", size: "38 MB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1uqHgv48F-cCDMTG_ohfsqgGGH_Yasae0" },
            { name: "Видеоролик № 1 с обзором отрасли.mp4", size: "167 KB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1PJaGdiLFurHiX59DhOjdiifsWHKuj8qc" },
            { name: "Аудиозагадка.mp3", size: "450 KB", icon: "🎵", url: "https://drive.google.com/uc?export=download&id=18IuNRCg0nVCstxNA4ESFrmCx4QQ-rxfR" }
        ]
    },
    6: {
        title: "Занятие №6 - Россия аграрная: продовольственная безопасность и надежный тыл",
        files: [
            { name: "План проведения занятия.docx", size: "3.4 MB", icon: "📝", url: "https://drive.google.com/uc?export=download&id=1Ii3EzyEbrejwh9W0NBKs4tnGMPvaghmQ" },
            { name: "Презентация РМГ6.pptx", size: "132 KB", icon: "📊", url: "https://drive.google.com/uc?export=download&id=1TJxJbIfY1-ViXUXqLcoXQYXlCZU7_DYb" },
            { name: "Раздаточный материал.docx", size: "38 MB", icon: "📝", url: "https://drive.google.com/uc?export=download&id=1xmkWKK_yGUqVcD-wpionrXY45JGf0SxA" },
            { name: "Видеоролик № 3 о возможностях профильных классов.mp4", size: "112 KB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1xdALk_TokuB-_R5RbS6WMY8vpeqHwXkE" },
            { name: "Видеоролик № 2 о профессиях.mp4", size: "780 KB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1ss2JhgtsJsJkCAX1wpVfwhT6fWV20Tj0" },
            { name: "Видеоролик № 1 с обзором отрасли.mp4", size: "950 KB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1r4eNELaNzTD5s_I_KiLoxn6G-RCldAn9" }
        ]
    },
    7: {
        title: "Занятие №7 - Энергетика - основа жизни страны",
        files: [
            { name: "План проведения занятия.docx", size: "2.7 MB", icon: "📝", url: "https://drive.google.com/uc?export=download&id=1hZe-LMJtUiZs_x4DHdhOTiDctEOf0oAU" },
            { name: "Презентация РМГ7.pptx", size: "167 KB", icon: "📊", url: "https://drive.google.com/uc?export=download&id=1cDkE2B7PY0c4aEOJ7fX9B6gaj61Pihef" },
            { name: "Видеоролик № 2 о профессиях.mp4", size: "35 MB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1vCztE4SNGVYD5UoaDSe1YPwrAhgq5d7c" },
            { name: "Видеоролик № 1 об отрасли.mp4", size: "145 KB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1LnASQDX4mvIntD7YHX53w02LMjW0ttel" }
        ]
    },
    8: {
        title: "Занятие №8 - Граф Комаровский: основатель внутренней стражи, верный слуга Отечества",
        files: [
            { name: "Фильм Граф Комаровский.mp4", size: "3.0 MB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1s8B2tTKatIgEQuO-4u_9LMmXbEref1Hy" },
            { name: "План проведения занятия.docx", size: "198 KB", icon: "📝", url: "https://drive.google.com/uc?export=download&id=1-Ry6iRdg2VSiZh8nlCo2A7Rps4Q-7xlD" },
            { name: "Раздаточный материал.docx", size: "450 KB", icon: "📝", url: "https://drive.google.com/uc?export=download&id=1qrdr3b8lrA0HP1JSgGz-zDUAy0j_vkMj" },
            { name: "Презентация РМГ8.pptx", size: "1.2 MB", icon: "📊", url: "https://drive.google.com/uc?export=download&id=1FMPZ9Ps_dnpsxSDldQ449Ay-WYb0_9_V" }
        ]
    },
    9: {
        title: "Занятие №9 - Стальной кулак правопорядка: роль оборонного машиностроения и судостроения в оснащении Росгвардии",
        files: [
            { name: "План проведения занятия.docx", size: "2.8 MB", icon: "📝", url: "https://drive.google.com/uc?export=download&id=13d9ktbrt7efiyQAQNbMEnTi-LEeKSaIP" },
            { name: "Видеоролик: Факультет связи ПВИ.mp4", size: "112 KB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1RDYWlRKNc14Yn-L3vlXopQ6p8YrImvqe" },
            { name: "Видеоролик № 1 об отрасли.mp4", size: "41 MB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1SMMAWE0pcuzo1465Oh_vEmLPLWUYjdbH" },
            { name: "Презентация РМГ9.pptx", size: "95 KB", icon: "📊", url: "https://drive.google.com/uc?export=download&id=1rN9vtdzDeYKF0r3941G2FYIR_7t1fFLR" },
            { name: "Факультет связи - Пермский военный институт ВНГ РФ (1080p).mp4", size: "820 KB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1-nhCCzYkawzinBx6vP_-yGRQzCV_eq4a" },
            { name: "Видеоролик: Факультет технического обеспечения ПВИ.mp4", size: "1.5 MB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1vmgDJbmHRRutkFyDrRPWxX1fjVWTgJK2" }
        ]
    },
    10: {
        title: "Занятие №10 - Настоящий кадет: Честь и мужество",
        files: [
            { name: "Презентация РМГ10.pptx", size: "3.3 MB", icon: "📊", url: "https://drive.google.com/uc?export=download&id=1ZpN5yB_PYwUJ7Pr8Wnwz0Bkl4Pdv9JXX" },
            { name: "Технологическая карта урока.docx", size: "145 KB", icon: "📝", url: "https://drive.google.com/uc?export=download&id=1NeHZAPQT1wqrhzTmNwovU5owwlBYJGwI" },
            { name: "План проведения занятия.docx", size: "2.1 MB", icon: "📝", url: "https://drive.google.com/uc?export=download&id=1XP-siaVvmCggkrVUxdJL80q0seB1AosI" }
        ]
    },
    11: {
        title: "Занятие №11 - Россия индустриальная: космическая отрасль",
        files: [
            { name: "Презентация РМГ11.pptx", size: "3.6 MB", icon: "📊", url: "https://docs.google.com/presentation/d/1d97HLfN-_EyK53_nGzH72GUb4BLhUSAB/export?format=pptx" },
            { name: "План проведения занятий.docx", size: "184 KB", icon: "📝", url: "https://docs.google.com/document/d/1P94nXLxEk_zYRSbysIr-_70LOMA0ic-m/export?format=docx" },
            { name: "Раздаточный материал.docx", size: "44 MB", icon: "📝", url: "https://drive.google.com/uc?export=download&id=197rdR_k5goI2QDKXNnLxbFwiN31q3i_I" },
            { name: "Презентация (инженер-испытатель).pptx", size: "39 MB", icon: "📊", url: "https://drive.google.com/uc?export=download&id=1_IJ_kqJMoZSx8unW20nNYcRVuql2kddv" },
            { name: "Видеоролик 3.mp4", size: "156 KB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1umlDITkAWlucYhBkJIdt54UcbvI1ibUH" },
            { name: "Видеоролик 2.mp4", size: "950 KB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=12Lewm5ev_mQMNd9VPIAptIlT6Ws96QwT" },
            { name: "Видеоролик 1.mp4", size: "520 KB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1auj-T0Nhn-CeC_wpOTuPEGsuNqpAMJIr" }
        ]
    },
    12: {
        title: "Занятие №12 - Кинологическая служба ВНГ: верность длиною в жизнь",
        files: [
            { name: "План проведения занятия.docx", size: "210 KB", icon: "📝", url: "https://docs.google.com/document/d/1UGY-5gyVT75EEU6tVZMvPt_0swTIk1WR/export?format=docx" },
            { name: "Презентация РМГ12.pptx", size: "2.9 MB", icon: "📊", url: "https://docs.google.com/presentation/d/1g6syrNyaEVqEBlRmDMHMcAN0QXY2QM__/export?format=pptx" },
            { name: "Видеоролик: Путь служебной собаки.mp4", size: "340 KB", icon: "🎬", url: "https://drive.google.com/uc?export=download&id=1iiWd9w4k-lm46-VWtJlCZani1DGbmWhO" }
        ]
    }
};

// Функция для рендеринга занятий по месяцам
function renderLessonsByMonth() {
    // Сентябрь
    const septemberContainer = document.getElementById('september-lessons');
    if (septemberContainer) {
        septemberContainer.innerHTML = lessonsByMonth.september.map(lesson => `
            <div class="lesson-item">
                <div class="lesson-date">
                    <div class="lesson-day">${lesson.day}</div>
                    <div class="lesson-month">${lesson.month}</div>
                </div>
                <div class="lesson-info">
                    <h4>${lesson.title}</h4>
                </div>
                <a href="${lesson.link}" class="lesson-btn">К занятию →</a>
            </div>
        `).join('');
    }

    // Октябрь
    const octoberContainer = document.getElementById('october-lessons');
    if (octoberContainer) {
        octoberContainer.innerHTML = lessonsByMonth.october.map(lesson => `
            <div class="lesson-item">
                <div class="lesson-date">
                    <div class="lesson-day">${lesson.day}</div>
                    <div class="lesson-month">${lesson.month}</div>
                </div>
                <div class="lesson-info">
                    <h4>${lesson.title}</h4>
                </div>
                <a href="${lesson.link}" class="lesson-btn">К занятию →</a>
            </div>
        `).join('');
    }

    // Ноябрь
    const novemberContainer = document.getElementById('november-lessons');
    if (novemberContainer) {
        novemberContainer.innerHTML = lessonsByMonth.november.map(lesson => `
            <div class="lesson-item">
                <div class="lesson-date">
                    <div class="lesson-day">${lesson.day}</div>
                    <div class="lesson-month">${lesson.month}</div>
                </div>
                <div class="lesson-info">
                    <h4>${lesson.title}</h4>
                </div>
                <a href="${lesson.link}" class="lesson-btn">К занятию →</a>
            </div>
        `).join('');
    }

    // Январь
    const januaryContainer = document.getElementById('january-lessons');
    if (januaryContainer) {
        januaryContainer.innerHTML = lessonsByMonth.january.map(lesson => `
            <div class="lesson-item">
                <div class="lesson-date">
                    <div class="lesson-day">${lesson.day}</div>
                    <div class="lesson-month">${lesson.month}</div>
                </div>
                <div class="lesson-info">
                    <h4>${lesson.title}</h4>
                </div>
                <a href="${lesson.link}" class="lesson-btn">К занятию →</a>
            </div>
        `).join('');
    }

    // Февраль
    const februaryContainer = document.getElementById('february-lessons');
    if (februaryContainer) {
        februaryContainer.innerHTML = lessonsByMonth.february.map(lesson => `
            <div class="lesson-item">
                <div class="lesson-date">
                    <div class="lesson-day">${lesson.day}</div>
                    <div class="lesson-month">${lesson.month}</div>
                </div>
                <div class="lesson-info">
                    <h4>${lesson.title}</h4>
                </div>
                <a href="${lesson.link}" class="lesson-btn">К занятию →</a>
            </div>
        `).join('');
    }

    // Март
    const marchContainer = document.getElementById('march-lessons');
    if (marchContainer) {
        marchContainer.innerHTML = lessonsByMonth.march.map(lesson => `
            <div class="lesson-item">
                <div class="lesson-date">
                    <div class="lesson-day">${lesson.day}</div>
                    <div class="lesson-month">${lesson.month}</div>
                </div>
                <div class="lesson-info">
                    <h4>${lesson.title}</h4>
                </div>
                <a href="${lesson.link}" class="lesson-btn">К занятию →</a>
            </div>
        `).join('');
    }
}

// Функция для рендеринга списка занятий в модальном окне
function renderMaterialsLessonsList() {
    const container = document.getElementById('materialsLessonsGrid');
    if (!container) return;
    
    let html = '';
    for (let i = 1; i <= 12; i++) {
        html += `
            <div class="materials-lesson-card" data-lesson="${i}">
                <div class="materials-lesson-icon">📁</div>
                <div class="materials-lesson-title">Занятие №${i}</div>
            </div>
        `;
    }
    container.innerHTML = html;
    
    // Добавляем обработчики кликов
    document.querySelectorAll('.materials-lesson-card').forEach(card => {
        card.addEventListener('click', () => {
            const lessonNum = parseInt(card.getAttribute('data-lesson'));
            showLessonFiles(lessonNum);
        });
    });
}

// Функция отображения файлов занятия
function showLessonFiles(lessonNumber) {
    const lesson = materialsData[lessonNumber];
    if (!lesson) return;
    
    // Обновляем заголовок
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) modalTitle.textContent = lesson.title;
    
    // Показываем кнопку "Назад"
    const backBtn = document.getElementById('modalBackBtn');
    if (backBtn) backBtn.style.display = 'flex';
    
    // Генерируем HTML для файлов
    let filesHtml = '<div class="files-list">';
    lesson.files.forEach(file => {
        filesHtml += `
            <div class="file-item">
                <div class="file-info">
                    <span class="file-icon">${file.icon}</span>
                    <span class="file-name">${file.name}</span>
                    <div class="file-meta">
                        <span class="file-size">${file.size}</span>
                    </div>
                </div>
                <div class="file-actions">
                    <a href="${file.url}" class="file-download" target="_blank" download="${file.name}">
                        <svg viewBox="0 0 24 24">
                            <polyline points="8 17 12 21 16 17"/>
                            <line x1="12" y1="12" x2="12" y2="21"/>
                            <path d="M20.88 18.09A9 9 0 0 0 12 3"/>
                        </svg>
                        Скачать
                    </a>
                </div>
            </div>
        `;
    });
    filesHtml += '</div>';
    
    const lessonFilesContainer = document.getElementById('lessonFiles');
    if (lessonFilesContainer) lessonFilesContainer.innerHTML = filesHtml;
    
    // Переключаем секции
    const lessonsList = document.getElementById('lessonsList');
    const lessonFiles = document.getElementById('lessonFiles');
    
    if (lessonsList) lessonsList.classList.remove('active');
    if (lessonFiles) lessonFiles.classList.add('active');
}

// Функция показа списка занятий
function showLessonsList() {
    const lessonsList = document.getElementById('lessonsList');
    const lessonFiles = document.getElementById('lessonFiles');
    const modalTitle = document.getElementById('modalTitle');
    const backBtn = document.getElementById('modalBackBtn');
    
    if (lessonsList) lessonsList.classList.add('active');
    if (lessonFiles) lessonFiles.classList.remove('active');
    if (modalTitle) modalTitle.textContent = 'Материалы "Росгвардия - мои горизонты"';
    if (backBtn) backBtn.style.display = 'none';
}

// Настройка модального окна
function setupMaterialsModal() {
    const openBtn = document.getElementById('openMaterialsBtn');
    const modal = document.getElementById('materialsModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    const backBtn = document.getElementById('modalBackBtn');
    const overlay = document.querySelector('#materialsModal .modal-overlay');
    
    if (openBtn && modal) {
        openBtn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            showLessonsList();
        });
    }
    
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', showLessonsList);
    }
    
    if (overlay) {
        overlay.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Настройка FAB меню
function setupFabMenu() {
    const fabBtn = document.getElementById('fabButton');
    const fabMenu = document.getElementById('fabMenu');
    
    if (fabBtn && fabMenu) {
        fabBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            fabMenu.classList.toggle('active');
        });
        
        document.addEventListener('click', (e) => {
            if (!fabBtn.contains(e.target) && !fabMenu.contains(e.target)) {
                fabMenu.classList.remove('active');
            }
        });
    }
}

// Настройка мобильного меню
function setupMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    
    if (toggleBtn && nav) {
        toggleBtn.addEventListener('click', () => {
            const isVisible = nav.style.display === 'flex';
            nav.style.display = isVisible ? 'none' : 'flex';
            if (!isVisible) {
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.backgroundColor = 'white';
                nav.style.padding = '20px';
                nav.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                nav.style.zIndex = '999';
            }
        });
        
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'row';
                nav.style.position = 'static';
                nav.style.padding = '0';
                nav.style.boxShadow = 'none';
            }
        });
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderLessonsByMonth();
    renderMaterialsLessonsList();
    setupMaterialsModal();
    setupFabMenu();
    setupMobileMenu();
});