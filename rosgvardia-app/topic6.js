const topic6Files = [
    {
        icon: "📝",
        name: "План проведения занятия.docx",
        size: "3.4 MB",
        url: "https://drive.google.com/uc?export=download&id=1Ii3EzyEbrejwh9W0NBKs4tnGMPvaghmQ"
    },
    {
        icon: "📊",
        name: "Презентация РМГ6.pptx",
        size: "132 KB",
        url: "https://drive.google.com/uc?export=download&id=1TJxJbIfY1-ViXUXqLcoXQYXlCZU7_DYb"
    },
    {
        icon: "📝",
        name: "Раздаточный материал.docx",
        size: "38 MB",
        url: "https://drive.google.com/uc?export=download&id=1xmkWKK_yGUqVcD-wpionrXY45JGf0SxA"
    },
    {
        icon: "🎬",
        name: "Видеоролик № 3 о возможностях профильных классов.mp4",
        size: "112 KB",
        url: "https://drive.google.com/uc?export=download&id=1xdALk_TokuB-_R5RbS6WMY8vpeqHwXkE"
    },
    {
        icon: "🎬",
        name: "Видеоролик № 2 о профессиях.mp4",
        size: "780 KB",
        url: "https://drive.google.com/uc?export=download&id=1ss2JhgtsJsJkCAX1wpVfwhT6fWV20Tj0"
    },
    {
        icon: "🎬",
        name: "Видеоролик № 1 с обзором отрасли.mp4",
        size: "950 KB",
        url: "https://drive.google.com/uc?export=download&id=1r4eNELaNzTD5s_I_KiLoxn6G-RCldAn9"
    }
];

function renderTopic6Files() {
    const container = document.getElementById('modalBody');
    if (!container) return;
    
    container.innerHTML = `
        <div class="topic-files-list">
            ${topic6Files.map(file => `
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

function setupTopic6Modal() {
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

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('modalBody') && document.getElementById('openMaterialsBtn')) {
        renderTopic6Files();
        setupTopic6Modal();
    }
    setupFabMenu();
    setupMobileMenu();
});