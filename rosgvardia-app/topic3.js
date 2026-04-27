// Данные файлов для темы 3
const topic3Files = [
    {
        icon: "🎬",
        name: "Фильм ПВИ ИО.mp4",
        size: "38 MB",
        url: "https://drive.google.com/uc?export=download&id=1LHE9-J0gFw5c_de5e1tbAVSmWfPz3agL"
    },
    {
        icon: "📊",
        name: "Презентация РМГ3.pptx",
        size: "3.5 MB",
        url: "https://docs.google.com/presentation/d/1WrvCUsO8e_0SbsI_oy7MUnCAAp15RIYv/export?format=pptx"
    },
    {
        icon: "📝",
        name: "Рабочая тетрадь.docx",
        size: "210 KB",
        url: "https://docs.google.com/document/d/1lidWmD4WTWIt9iwQ1cw7OBxL0K-jA-KC/export?format=docx"
    },
    {
        icon: "📝",
        name: "План проведения занятия.docx",
        size: "890 KB",
        url: "https://drive.google.com/uc?export=download&id=1yVDuzmzZk-lYkp3at71NunP6yJ0D8vI5"
    }
];

function renderTopic3Files() {
    const container = document.getElementById('modalBody');
    if (!container) return;
    
    container.innerHTML = `
        <div class="topic-files-list">
            ${topic3Files.map(file => `
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

function setupTopic3Modal() {
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
        renderTopic3Files();
        setupTopic3Modal();
    }
    setupFabMenu();
    setupMobileMenu();
});