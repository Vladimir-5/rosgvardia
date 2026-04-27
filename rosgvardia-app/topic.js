// Данные файлов для темы 1 (оставляем как есть)
const topic1Files = [
    {
        icon: "🎬",
        name: "РОСГВАРДИЯ Презентационный фильм.mp4",
        size: "45 MB",
        url: "https://drive.google.com/uc?export=download&id=1bd0bhliBATRKQXCRtdnMwS-G9hzIKQLM"
    },
    {
        icon: "📝",
        name: "Раздаточный материал РОСГВАРДИЯ Презентационный фильм.docx",
        size: "156 KB",
        url: "https://docs.google.com/document/d/12kzGbi0cCzvywa5xus-E9bO-gHOeKb6U/export?format=docx"
    },
    {
        icon: "📊",
        name: "Презентация РМГ1.pptx",
        size: "3.2 MB",
        url: "https://docs.google.com/presentation/d/14Yh0XC_p-gi-flpL3Ll8Okos8zOetGFU/export?format=pptx"
    },
    {
        icon: "📝",
        name: "План проведения занятия.docx",
        size: "95 KB",
        url: "https://docs.google.com/document/d/1p35SR9W9szu89AwuQlUTk_CVfkRefr-A/export?format=docx"
    }
];

// Функция для рендеринга файлов в модальном окне темы 1
function renderTopicFiles() {
    const container = document.getElementById('modalBody');
    if (!container) return;
    
    container.innerHTML = `
        <div class="topic-files-list">
            ${topic1Files.map(file => `
                <div class="topic-file-item">
                    <div class="topic-file-info">
                        <span class="topic-file-icon">${file.icon}</span>
                        <span class="topic-file-name">${file.name}</span>
                        <span style="font-size: 12px; color: #b0b8c5;">${file.size}</span>
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

// Настройка модального окна для темы 1
function setupTopicModal() {
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

// Инициализация для темы 1
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('modalBody') && document.getElementById('openMaterialsBtn')) {
        renderTopicFiles();
        setupTopicModal();
    }
    setupFabMenu();
    setupMobileMenu();
});