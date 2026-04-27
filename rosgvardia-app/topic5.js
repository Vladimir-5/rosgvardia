const topic5Files = [
    {
        icon: "📝",
        name: "План проведения занятия.docx",
        size: "178 KB",
        url: "https://docs.google.com/document/d/1sDmQKa0SbWLJ96eXzF9NF6FaxmxRVGeJ/export?format=docx"
    },
    {
        icon: "📊",
        name: "Презентация РМГ5.pptx",
        size: "3.1 MB",
        url: "https://drive.google.com/uc?export=download&id=1UNSxeT0VvI4HApxIW8OS_renPauDk1mX"
    },
    {
        icon: "🎬",
        name: "Видеоролик № 3 об образовании.mp4",
        size: "42 MB",
        url: "https://drive.google.com/uc?export=download&id=1jiOxNnns3pQfnBHnPtMK3PUcQiL0QupK"
    },
    {
        icon: "🎬",
        name: "Видеоролик № 2 о профессиях.mp4",
        size: "38 MB",
        url: "https://drive.google.com/uc?export=download&id=1uqHgv48F-cCDMTG_ohfsqgGGH_Yasae0"
    },
    {
        icon: "🎬",
        name: "Видеоролик № 1 с обзором отрасли.mp4",
        size: "167 KB",
        url: "https://drive.google.com/uc?export=download&id=1PJaGdiLFurHiX59DhOjdiifsWHKuj8qc"
    },
    {
        icon: "🎵",
        name: "Аудиозагадка.mp3",
        size: "450 KB",
        url: "https://drive.google.com/uc?export=download&id=18IuNRCg0nVCstxNA4ESFrmCx4QQ-rxfR"
    }
];

function renderTopic5Files() {
    const container = document.getElementById('modalBody');
    if (!container) return;
    
    container.innerHTML = `
        <div class="topic-files-list">
            ${topic5Files.map(file => `
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

function setupTopic5Modal() {
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
        renderTopic5Files();
        setupTopic5Modal();
    }
    setupFabMenu();
    setupMobileMenu();
});