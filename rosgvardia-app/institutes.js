// Данные институтов
const institutesData = [
    {
        id: 1,
        name: "Пермское президентское кадетское училище им. Героя России Ф. Кузьмина",
        shortName: "Пермское ПКУ",
        type: "cadet",
        description: "Одно из ведущих кадетских училищ России, готовящее будущих офицеров для службы в Росгвардии. Высокий уровень образования, отличная физическая подготовка.",
        logo: "https://ppku.rosguard.gov.ru/uploads/2026/02/30logosolid00000.png",
        location: "Пермь, Пермский край",
        specialties: "Общеобразовательная программа с военно-спортивным уклоном",
        link: "https://rosguard.gov.ru/page/index/federalnoe-gosudarstvennoe-kaznnoe-obshheobrazovatelnoe-uchrezhdenie-permskoe-prezidentskoe-kadetskoe-uchilishhe-imeni-geroya-rossii-f-kuzmina-vojsk-n"
    },
    {
        id: 2,
        name: "Московское президентское кадетское училище им. М.А. Шолохова",
        shortName: "Московское ПКУ",
        type: "cadet",
        description: "Элитное кадетское училище в столице, обеспечивающее высокое качество образования и воспитание настоящих патриотов России.",
        logo: "https://mkkb.ru/wp-content/uploads/2023/10/logotip-s-mpku-vng-rf.png",
        location: "Москва",
        specialties: "Углубленное изучение иностранных языков, военная подготовка",
        link: "https://rosguard.gov.ru/ru/page/index/federalnoe-gosudarstvennoe-kazennoe-obshheobrazovatelnoe-uchrezhdenie-moskovskoe-prezidentskoe-kadetskoe-uchilishhe-imeni-ma-sholoxova-vojsk-nacionaln"
    },
    {
        id: 3,
        name: "Военная академия Росгвардии",
        shortName: "Военная академия",
        type: "academy",
        description: "Ведущее военно-учебное заведение Росгвардии, осуществляющее подготовку офицерских кадров высшей квалификации.",
        logo: "https://fabrikanagrad.ru/upload/iblock/2f0/лого_mini.png",
        location: "Санкт-Петербург",
        specialties: "Командный, инженерный, юридический факультеты",
        link: "https://academy.rosguard.gov.ru"
    },
    {
        id: 4,
        name: "Пермский военный институт Росгвардии",
        shortName: "Пермский ВИ",
        type: "military",
        description: "Готовит офицеров для подразделений специального назначения и тылового обеспечения Росгвардии.",
        logo: "https://e-ecolog.ru/docs_files/l8WOfNoeOPC7db-DWN7eR.jpg",
        location: "Пермь",
        specialties: "Подготовка офицеров спецназа, тыловое обеспечение",
        link: "https://pvi.rosguard.gov.ru"
    },
    {
        id: 5,
        name: "Новосибирский военный институт Росгвардии",
        shortName: "Новосибирский ВИ",
        type: "military",
        description: "Крупнейший за Уралом военный институт, осуществляющий подготовку офицеров для восточных регионов страны.",
        logo: "https://nvi.rosguard.gov.ru/uploads/2022/02/ehmblema.png",
        location: "Новосибирск",
        specialties: "Командные специальности, связь, информационные технологии",
        link: "https://nvi.rosguard.gov.ru"
    },
    {
        id: 6,
        name: "Саратовский военный институт Росгвардии",
        shortName: "Саратовский ВИ",
        type: "military",
        description: "Специализируется на подготовке офицеров для подразделений вневедомственной охраны и лицензионно-разрешительной работы.",
        logo: "https://pvi.rosguard.gov.ru/uploads/2021/08/sarat.png",
        location: "Саратов",
        specialties: "Правовое обеспечение, охрана общественного порядка",
        link: "https://svki.rosguard.gov.ru"
    }
];

// Функция для рендеринга институтов
function renderInstitutes(filter = 'all') {
    const container = document.getElementById('institutes-grid');
    if (!container) return;
    
    let filteredData = institutesData;
    if (filter !== 'all') {
        filteredData = institutesData.filter(inst => inst.type === filter);
    }
    
    container.innerHTML = filteredData.map(inst => `
        <div class="institute-card" data-type="${inst.type}">
            <div class="institute-logo-wrapper">
                <img src="${inst.logo}" alt="${inst.name}" class="institute-logo-img" 
                     onerror="this.src='https://via.placeholder.com/150x150/880000/ffffff?text=${inst.shortName.substring(0, 3)}'">
            </div>
            <div class="institute-info">
                <h3 class="institute-name">${inst.name}</h3>
                <p class="institute-description">${inst.description}</p>
                <div class="institute-location">📍 ${inst.location}</div>
                <div class="institute-specialties">🎓 ${inst.specialties}</div>
                <a href="${inst.link}" class="institute-link" target="_blank">Узнать больше →</a>
            </div>
        </div>
    `).join('');
}

// Функция для отображения превью институтов на главной странице
function renderInstitutesPreview() {
    const container = document.getElementById('institutes-preview-grid');
    if (!container) return;
    
    // Берем первые 3 института для превью
    const previewInstitutes = institutesData.slice(0, 3);
    
    container.innerHTML = previewInstitutes.map(inst => `
        <div class="preview-card">
            <div class="preview-logo">
                <img src="${inst.logo}" alt="${inst.name}" 
                     onerror="this.src='https://via.placeholder.com/100x100/880000/ffffff?text=${inst.shortName.substring(0, 2)}'">
            </div>
            <div class="preview-info">
                <h3>${inst.shortName}</h3>
                <p style="font-size: 12px; color: #666;">${inst.location}</p>
            </div>
        </div>
    `).join('');
}

// Настройка фильтров
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Удаляем активный класс у всех кнопок
            filterBtns.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            btn.classList.add('active');
            // Получаем фильтр
            const filter = btn.getAttribute('data-filter');
            // Рендерим институты с фильтром
            renderInstitutes(filter);
        });
    });
}

// Настройка плавной анимации для карточек
function setupCardAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const cards = document.querySelectorAll('.institute-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, на какой странице мы находимся
    if (document.getElementById('institutes-grid')) {
        renderInstitutes();
        setupFilters();
        setupCardAnimations();
    }
    
    if (document.getElementById('institutes-preview-grid')) {
        renderInstitutesPreview();
    }
    
    // Настройка FAB меню
    const fabBtn = document.getElementById('fabButton');
    const fabMenu = document.getElementById('fabMenu');
    
    if (fabBtn && fabMenu) {
        fabBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            fabMenu.classList.toggle('active');
        });
        
        document.addEventListener('click', (e) => {
            if (fabBtn && fabMenu && !fabBtn.contains(e.target) && !fabMenu.contains(e.target)) {
                fabMenu.classList.remove('active');
            }
        });
    }
    
    // Настройка мобильного меню
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
});