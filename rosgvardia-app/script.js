// Данные занятий для главной страницы (темы 8-12)
const mainPageLessons = [
    { 
        day: '27', 
        month: 'ноября', 
        title: '<strong>Тема 8.</strong> Граф Комаровский: основатель внутренней стражи, верный слуга Отечества', 
        link: '#' 
    },
    { 
        day: '16', 
        month: 'января', 
        title: '<strong>Тема 9.</strong> Стальной кулак правопорядка: роль оборонного машиностроения и судостроения в оснащении Росгвардии', 
        link: '#' 
    },
    { 
        day: '16', 
        month: 'февраля', 
        title: '<strong>Тема 10.</strong> Настоящий кадет: Честь и мужество', 
        link: '#' 
    },
    { 
        day: '26', 
        month: 'февраля', 
        title: '<strong>Тема 11.</strong> Россия индустриальная: космическая отрасль', 
        link: '#' 
    },
    { 
        day: '05', 
        month: 'марта', 
        title: '<strong>Тема 12.</strong> Кинологическая служба ВНГ: верность длиною в жизнь', 
        link: '#' 
    }
];

// Функция для рендеринга карточек занятий на главной странице
function renderMainPageLessons() {
    const container = document.getElementById('lessons-cards-container');
    if (!container) return;
    
    container.innerHTML = mainPageLessons.map(lesson => `
        <div class="lesson-card-horizontal">
            <div class="lesson-card-date-horizontal">
                <div class="lesson-card-day-horizontal">${lesson.day}</div>
                <div class="lesson-card-month-horizontal">${lesson.month}</div>
            </div>
            <div class="lesson-card-info-horizontal">
                <div class="lesson-card-title-horizontal">${lesson.title}</div>
            </div>
            <a href="${lesson.link}" class="lesson-card-link-horizontal">К занятию →</a>
        </div>
    `).join('');
}

// Плавный скролл для главной страницы
function setupScrollButton() {
    const scrollBtn = document.querySelector('.scroll-down');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            const nextSection = document.querySelector('.course-section');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Карусель
function setupCarousel() {
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const carouselImage = document.querySelector('.carousel-image');
    
    if (prevBtn && nextBtn && carouselImage) {
        const images = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #880000 0%, #440000 100%)'
        ];
        let currentIndex = 0;
        
        const updateImage = () => {
            carouselImage.style.background = images[currentIndex];
        };
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        });
        
        updateImage();
    }
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

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Рендерим карточки занятий на главной
    if (document.getElementById('lessons-cards-container')) {
        renderMainPageLessons();
    }
    
    setupScrollButton();
    setupCarousel();
    setupFabMenu();
    setupMobileMenu();
});