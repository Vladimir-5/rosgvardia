// Данные файлов для темы 9
const topic9Files = [
    {
        icon: "📝",
        name: "План проведения занятия.docx",
        size: "2.8 MB",
        url: "https://drive.google.com/uc?export=download&id=13d9ktbrt7efiyQAQNbMEnTi-LEeKSaIP"
    },
    {
        icon: "🎬",
        name: "Видеоролик: Факультет связи ПВИ.mp4",
        size: "112 KB",
        url: "https://drive.google.com/uc?export=download&id=1RDYWlRKNc14Yn-L3vlXopQ6p8YrImvqe"
    },
    {
        icon: "🎬",
        name: "Видеоролик № 1 об отрасли.mp4",
        size: "41 MB",
        url: "https://drive.google.com/uc?export=download&id=1SMMAWE0pcuzo1465Oh_vEmLPLWUYjdbH"
    },
    {
        icon: "📊",
        name: "Презентация РМГ9.pptx",
        size: "95 KB",
        url: "https://drive.google.com/uc?export=download&id=1rN9vtdzDeYKF0r3941G2FYIR_7t1fFLR"
    },
    {
        icon: "🎬",
        name: "Факультет связи - Пермский военный институт ВНГ РФ (1080p).mp4",
        size: "820 KB",
        url: "https://drive.google.com/uc?export=download&id=1-nhCCzYkawzinBx6vP_-yGRQzCV_eq4a"
    },
    {
        icon: "🎬",
        name: "Видеоролик: Факультет технического обеспечения ПВИ.mp4",
        size: "1.5 MB",
        url: "https://drive.google.com/uc?export=download&id=1vmgDJbmHRRutkFyDrRPWxX1fjVWTgJK2"
    }
];

// Функция для рендеринга файлов в модальном окне
function renderTopic9Files() {
    const container = document.getElementById('modalBody');
    if (!container) return;
    
    container.innerHTML = `
        <div class="topic-files-list">
            ${topic9Files.map(file => `
                <div class="topic-file-item">
                    <div class="topic-file-info">
                        <span class="topic-file-icon">${file.icon}</span>
                        <span class="topic-file-name">${file.name}</span>
                        <span style="font-size: 11px; color: #b0b8c5;">${file.size}</span>
                    </div>
                    <div class="topic-file-actions">
                        <a href="${file.url}" class="topic-file-btn" target="_blank">
                            <svg viewBox="0 0 24 24">
                                <polyline points="8 17 12 21 16 17"/>
                                <line x1="12" y1="12" x2="12" y2="21"/>
                                <path d="M20.88 18.09A9 9 0 0 0 12 3"/>
                            </svg>
                            Скачать
                        </a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Настройка модального окна
function setupTopic9Modal() {
    const openBtn = document.getElementById('openMaterialsBtn');
    const modal = document.getElementById('materialsModal');
    const closeBtn = document.getElementById('closeModalBtn');
    
    if (openBtn && modal) {
        openBtn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
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
    if (document.getElementById('modalBody') && document.getElementById('openMaterialsBtn')) {
        renderTopic9Files();
        setupTopic9Modal();
    }
    setupFabMenu();
    setupMobileMenu();
});
