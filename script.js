const blockTemplates = {
  header: () => `
    <div class="landing-block" data-block-type="header">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <h1 data-editable="text">Ваш Логотип</h1>
    </div>
  `,
  
  navbar: () => `
    <div class="landing-block" data-block-type="navbar">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <nav>
        <h1 data-editable="text">Логотип</h1>
        <ul class="nav-links">
          <li><a href="#" data-editable="text">Главная</a></li>
          <li><a href="#" data-editable="text">О нас</a></li>
          <li><a href="#" data-editable="text">Услуги</a></li>
          <li><a href="#" data-editable="text">Контакты</a></li>
        </ul>
      </nav>
    </div>
  `,
  
  hero: () => `
    <div class="landing-block" data-block-type="hero">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <h1 data-editable="text">Создавайте Невероятные Лендинги</h1>
      <p data-editable="text">Простой и мощный конструктор для ваших идей</p>
      <a href="#" class="cta-button" data-editable="text">Начать Сейчас</a>
    </div>
  `,
  
  'hero-video': () => `
    <div class="landing-block" data-block-type="hero-video">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <h1 data-editable="text">Видео Презентация</h1>
      <p data-editable="text">Покажите свой продукт в действии</p>
      <a href="#" class="cta-button" data-editable="text">Смотреть Демо</a>
    </div>
  `,
  
  'hero-split': () => `
    <div class="landing-block" data-block-type="hero-split">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <h1 data-editable="text">Разделенный Hero Блок</h1>
      <p data-editable="text">Текст с одной стороны, изображение с другой</p>
      <a href="#" class="cta-button" data-editable="text">Узнать Больше</a>
    </div>
  `,
  
  features: () => `
    <div class="landing-block" data-block-type="features">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <h2 data-editable="text">Наши Возможности</h2>
      <div class="features-container">
        <div class="feature-item">
          <i class="fas fa-rocket"></i>
          <h3 data-editable="text">Быстрый Старт</h3>
          <p data-editable="text">Начните создавать лендинги за считанные минуты</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-paint-brush"></i>
          <h3 data-editable="text">Гибкий Дизайн</h3>
          <p data-editable="text">Настраивайте каждый элемент под ваш бренд</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-mobile-alt"></i>
          <h3 data-editable="text">Адаптивность</h3>
          <p data-editable="text">Идеально работает на всех устройствах</p>
        </div>
      </div>
    </div>
  `,
  
  'features-grid': () => `
    <div class="landing-block" data-block-type="features-grid">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <h2 data-editable="text">Преимущества</h2>
      <div class="features-container">
        <div class="feature-item">
          <i class="fas fa-check-circle"></i>
          <h3 data-editable="text">Преимущество 1</h3>
          <p data-editable="text">Описание первого преимущества</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-shield-alt"></i>
          <h3 data-editable="text">Преимущество 2</h3>
          <p data-editable="text">Описание второго преимущества</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-chart-line"></i>
          <h3 data-editable="text">Преимущество 3</h3>
          <p data-editable="text">Описание третьего преимущества</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-lightbulb"></i>
          <h3 data-editable="text">Преимущество 4</h3>
          <p data-editable="text">Описание четвертого преимущества</p>
        </div>
      </div>
    </div>
  `,
  
  about: () => `
    <div class="landing-block" data-block-type="about">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <h2 data-editable="text">О Нас</h2>
      <p data-editable="text">Мы команда профессионалов, которая помогает бизнесу расти и развиваться. Наш опыт и знания позволяют создавать эффективные решения для ваших задач.</p>
    </div>
  `,
  
  stats: () => `
    <div class="landing-block" data-block-type="stats">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <div class="stats-container">
        <div class="stat-item">
          <h3 data-editable="text">1000+</h3>
          <p data-editable="text">Довольных клиентов</p>
        </div>
        <div class="stat-item">
          <h3 data-editable="text">50+</h3>
          <p data-editable="text">Завершенных проектов</p>
        </div>
        <div class="stat-item">
          <h3 data-editable="text">24/7</h3>
          <p data-editable="text">Поддержка</p>
        </div>
      </div>
    </div>
  `,
  
  testimonials: () => `
    <div class="landing-block" data-block-type="testimonials">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <h2 data-editable="text">Отзывы Клиентов</h2>
      <div class="testimonials-container">
        <div class="testimonial-item">
          <p data-editable="text">"Отличный сервис! Помог мне быстро создать профессиональный лендинг для моего бизнеса."</p>
          <div class="testimonial-author" data-editable="text">- Иван Иванов</div>
        </div>
        <div class="testimonial-item">
          <p data-editable="text">"Простой и интуитивный интерфейс. Рекомендую всем, кто хочет создать качественный сайт."</p>
          <div class="testimonial-author" data-editable="text">- Мария Петрова</div>
        </div>
        <div class="testimonial-item">
          <p data-editable="text">"Результат превзошел все ожидания. Теперь использую только этот конструктор."</p>
          <div class="testimonial-author" data-editable="text">- Петр Сидоров</div>
        </div>
      </div>
    </div>
  `,
  
  team: () => `
    <div class="landing-block" data-block-type="team">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <h2 data-editable="text">Наша Команда</h2>
      <div class="team-container">
        <div class="team-member">
          <div class="member-avatar"><i class="fas fa-user"></i></div>
          <h3 data-editable="text">Алексей Смирнов</h3>
          <p data-editable="text">CEO & Основатель</p>
        </div>
        <div class="team-member">
          <div class="member-avatar"><i class="fas fa-user"></i></div>
          <h3 data-editable="text">Ольга Кузнецова</h3>
          <p data-editable="text">Главный дизайнер</p>
        </div>
        <div class="team-member">
          <div class="member-avatar"><i class="fas fa-user"></i></div>
          <h3 data-editable="text">Дмитрий Попов</h3>
          <p data-editable="text">Ведущий разработчик</p>
        </div>
      </div>
    </div>
  `,
  
  pricing: () => `
    <div class="landing-block" data-block-type="pricing">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <h2 data-editable="text">Тарифы</h2>
      <div class="pricing-container">
        <div class="pricing-card">
          <h3 data-editable="text">Базовый</h3>
          <div class="price" data-editable="text">$9</div>
          <ul>
            <li data-editable="text">1 сайт</li>
            <li data-editable="text">Базовая поддержка</li>
            <li data-editable="text">10 GB хранилища</li>
          </ul>
          <a href="#" class="cta-button" data-editable="text">Выбрать</a>
        </div>
        <div class="pricing-card featured">
          <h3 data-editable="text">Профи</h3>
          <div class="price" data-editable="text">$29</div>
          <ul>
            <li data-editable="text">10 сайтов</li>
            <li data-editable="text">Приоритетная поддержка</li>
            <li data-editable="text">100 GB хранилища</li>
          </ul>
          <a href="#" class="cta-button" data-editable="text">Выбрать</a>
        </div>
        <div class="pricing-card">
          <h3 data-editable="text">Бизнес</h3>
          <div class="price" data-editable="text">$99</div>
          <ul>
            <li data-editable="text">Безлимитные сайты</li>
            <li data-editable="text">24/7 поддержка</li>
            <li data-editable="text">Безлимитное хранилище</li>
          </ul>
          <a href="#" class="cta-button" data-editable="text">Выбрать</a>
        </div>
      </div>
    </div>
  `,
  
  cta: () => `
    <div class="landing-block" data-block-type="cta">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <h2 data-editable="text">Готовы Начать?</h2>
      <p data-editable="text">Присоединяйтесь к тысячам довольных пользователей уже сегодня</p>
      <a href="#" class="cta-button" data-editable="text">Начать Бесплатно</a>
    </div>
  `,
  
  contact: () => `
    <div class="landing-block" data-block-type="contact">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <h2 data-editable="text">Свяжитесь с Нами</h2>
      <form class="contact-form">
        <div class="form-group">
          <label data-editable="text">Имя</label>
          <input type="text" placeholder="Ваше имя">
        </div>
        <div class="form-group">
          <label data-editable="text">Email</label>
          <input type="email" placeholder="your@email.com">
        </div>
        <div class="form-group">
          <label data-editable="text">Сообщение</label>
          <textarea placeholder="Ваше сообщение"></textarea>
        </div>
        <button type="submit" class="submit-button" data-editable="text">Отправить</button>
      </form>
    </div>
  `,
  
  newsletter: () => `
    <div class="landing-block" data-block-type="newsletter">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <h2 data-editable="text">Подпишитесь на Рассылку</h2>
      <form class="newsletter-form">
        <div class="form-group">
          <label data-editable="text">Email адрес</label>
          <input type="email" placeholder="your@email.com">
        </div>
        <button type="submit" class="submit-button" data-editable="text">Подписаться</button>
      </form>
    </div>
  `,
  
  footer: () => `
    <div class="landing-block" data-block-type="footer">
      <div class="block-controls">
        <button class="block-control-btn move-up" title="Вверх"><i class="fas fa-arrow-up"></i></button>
        <button class="block-control-btn move-down" title="Вниз"><i class="fas fa-arrow-down"></i></button>
        <button class="block-control-btn delete" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>
      <div class="footer-content">
        <div class="footer-section">
          <h3 data-editable="text">О компании</h3>
          <ul>
            <li><a href="#" data-editable="text">О нас</a></li>
            <li><a href="#" data-editable="text">Карьера</a></li>
            <li><a href="#" data-editable="text">Пресса</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 data-editable="text">Продукты</h3>
          <ul>
            <li><a href="#" data-editable="text">Функции</a></li>
            <li><a href="#" data-editable="text">Цены</a></li>
            <li><a href="#" data-editable="text">Отзывы</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 data-editable="text">Поддержка</h3>
          <ul>
            <li><a href="#" data-editable="text">Помощь</a></li>
            <li><a href="#" data-editable="text">Документация</a></li>
            <li><a href="#" data-editable="text">Контакты</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p data-editable="text">&copy; 2024 Ваша Компания. Все права защищены.</p>
      </div>
    </div>
  `
};

let selectedBlock = null;
let draggedElement = null;

document.addEventListener('DOMContentLoaded', () => {
  initDragAndDrop();
  initButtons();
  hidePlaceholder();
});

function initDragAndDrop() {
  const blockItems = document.querySelectorAll('.block-item');
  const canvas = document.getElementById('canvas');
  
  blockItems.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
  });
  
  canvas.addEventListener('dragover', handleDragOver);
  canvas.addEventListener('drop', handleDrop);
  canvas.addEventListener('dragleave', handleDragLeave);
}

function handleDragStart(e) {
  const blockType = e.target.closest('.block-item').dataset.blockType;
  e.dataTransfer.effectAllowed = 'copy';
  e.dataTransfer.setData('blockType', blockType);
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
  document.getElementById('canvas').classList.add('drag-over');
}

function handleDragLeave(e) {
  if (e.target.id === 'canvas') {
    document.getElementById('canvas').classList.remove('drag-over');
  }
}

function handleDrop(e) {
  e.preventDefault();
  document.getElementById('canvas').classList.remove('drag-over');
  
  const blockType = e.dataTransfer.getData('blockType');
  if (blockType && blockTemplates[blockType]) {
    addBlock(blockType);
  }
}

function addBlock(blockType) {
  const canvas = document.getElementById('canvas');
  const template = blockTemplates[blockType];
  
  if (template) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = template().trim();
    const newBlock = tempDiv.firstChild;
    
    canvas.appendChild(newBlock);
    attachBlockEvents(newBlock);
    hidePlaceholder();
  }
}

function attachBlockEvents(block) {
  block.addEventListener('click', (e) => {
    if (!e.target.classList.contains('block-control-btn')) {
      selectBlock(block);
    }
  });
  
  const deleteBtn = block.querySelector('.block-control-btn.delete');
  const moveUpBtn = block.querySelector('.block-control-btn.move-up');
  const moveDownBtn = block.querySelector('.block-control-btn.move-down');
  
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    block.remove();
    if (selectedBlock === block) {
      selectedBlock = null;
      showNoSelection();
    }
    hidePlaceholder();
  });
  
  moveUpBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const prev = block.previousElementSibling;
    if (prev && prev.classList.contains('landing-block')) {
      block.parentNode.insertBefore(block, prev);
    }
  });
  
  moveDownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const next = block.nextElementSibling;
    if (next && next.classList.contains('landing-block')) {
      block.parentNode.insertBefore(next, block);
    }
  });
}

function selectBlock(block) {
  if (selectedBlock) {
    selectedBlock.classList.remove('selected');
  }
  selectedBlock = block;
  block.classList.add('selected');
  showSettings(block);
}

function showSettings(block) {
  const settingsContent = document.getElementById('settingsContent');
  const blockType = block.dataset.blockType;
  
  let settingsHTML = '<div class="settings-active">';
  settingsHTML += '<h4 style="margin-bottom: 20px; color: #333;">Настройки блока</h4>';
  
  settingsHTML += '<div class="settings-group">';
  settingsHTML += '<label>Фоновый цвет</label>';
  const currentBg = window.getComputedStyle(block).background;
  settingsHTML += `<input type="color" id="bgColor" value="#667eea">`;
  settingsHTML += '</div>';
  
  settingsHTML += '<div class="settings-group">';
  settingsHTML += '<label>Цвет текста</label>';
  settingsHTML += `<input type="color" id="textColor" value="#ffffff">`;
  settingsHTML += '</div>';
  
  settingsHTML += '<div class="settings-group">';
  settingsHTML += '<label>Отступы (px)</label>';
  settingsHTML += `<input type="number" id="padding" value="80" min="0" max="200">`;
  settingsHTML += '</div>';
  
  const editableElements = block.querySelectorAll('[data-editable="text"]');
  if (editableElements.length > 0) {
    settingsHTML += '<div class="settings-group">';
    settingsHTML += '<label>Редактировать тексты</label>';
    editableElements.forEach((el, index) => {
      const tagName = el.tagName.toLowerCase();
      let label = `Текст ${index + 1}`;
      if (tagName === 'h1') label = 'Заголовок H1';
      else if (tagName === 'h2') label = 'Заголовок H2';
      else if (tagName === 'h3') label = 'Заголовок H3';
      else if (tagName === 'p') label = 'Параграф';
      else if (tagName === 'a') label = 'Ссылка';
      
      const isMultiline = el.textContent.length > 50;
      if (isMultiline) {
        settingsHTML += `<textarea class="text-editor" data-index="${index}" style="margin-top: 10px;">${el.textContent.trim()}</textarea>`;
      } else {
        settingsHTML += `<input type="text" class="text-editor" data-index="${index}" value="${el.textContent.trim()}" placeholder="${label}" style="margin-top: 10px;">`;
      }
    });
    settingsHTML += '</div>';
  }
  
  settingsHTML += '</div>';
  
  settingsContent.innerHTML = settingsHTML;
  
  document.getElementById('bgColor').addEventListener('input', (e) => {
    block.style.background = e.target.value;
  });
  
  document.getElementById('textColor').addEventListener('input', (e) => {
    block.style.color = e.target.value;
  });
  
  document.getElementById('padding').addEventListener('input', (e) => {
    const value = e.target.value;
    block.style.padding = `${value}px 60px`;
  });
  
  document.querySelectorAll('.text-editor').forEach(input => {
    input.addEventListener('input', (e) => {
      const index = parseInt(e.target.dataset.index);
      editableElements[index].textContent = e.target.value;
    });
  });
}

function showNoSelection() {
  const settingsContent = document.getElementById('settingsContent');
  settingsContent.innerHTML = `
    <div class="no-selection">
      <i class="fas fa-hand-pointer"></i>
      <p>Выберите блок для редактирования</p>
    </div>
  `;
}

function hidePlaceholder() {
  const canvas = document.getElementById('canvas');
  const placeholder = canvas.querySelector('.canvas-placeholder');
  const hasBlocks = canvas.querySelectorAll('.landing-block').length > 0;
  
  if (placeholder) {
    placeholder.style.display = hasBlocks ? 'none' : 'block';
  }
}

function initButtons() {
  document.getElementById('exportBtn').addEventListener('click', exportHTML);
  document.getElementById('clearBtn').addEventListener('click', clearCanvas);
}

function clearCanvas() {
  if (confirm('Вы уверены, что хотите очистить весь холст?')) {
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = `
      <div class="canvas-placeholder">
        <i class="fas fa-mouse-pointer"></i>
        <p>Перетащите блоки сюда, чтобы начать создание лендинга</p>
      </div>
    `;
    selectedBlock = null;
    showNoSelection();
  }
}

function exportHTML() {
  const canvas = document.getElementById('canvas');
  const blocks = canvas.querySelectorAll('.landing-block');
  
  if (blocks.length === 0) {
    alert('Добавьте блоки перед экспортом');
    return;
  }
  
  let html = '<!DOCTYPE html>\n<html lang="ru">\n<head>\n';
  html += '  <meta charset="UTF-8">\n';
  html += '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
  html += '  <title>Мой Лендинг</title>\n';
  html += '  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">\n';
  html += '  <style>\n';
  html += generateCSS();
  html += '  </style>\n';
  html += '</head>\n<body>\n';
  
  blocks.forEach(block => {
    const clonedBlock = block.cloneNode(true);
    clonedBlock.classList.remove('selected');
    const controls = clonedBlock.querySelector('.block-controls');
    if (controls) controls.remove();
    
    const editables = clonedBlock.querySelectorAll('[data-editable]');
    editables.forEach(el => el.removeAttribute('data-editable'));
    
    const inlineStyle = clonedBlock.getAttribute('style');
    if (inlineStyle) {
      const blockType = clonedBlock.dataset.blockType;
      const className = `block-${blockType}-custom`;
      clonedBlock.classList.add(className);
    }
    
    html += clonedBlock.outerHTML + '\n';
  });
  
  html += '</body>\n</html>';
  
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'landing-page.html';
  a.click();
  URL.revokeObjectURL(url);
}

function generateCSS() {
  let css = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.landing-block {
  position: relative;
}

.landing-block[data-block-type="header"],
.landing-block[data-block-type="navbar"] {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 20px 60px;
}

.landing-block[data-block-type="header"] h1,
.landing-block[data-block-type="navbar"] h1 {
  margin: 0;
  font-size: 24px;
}

.landing-block[data-block-type="navbar"] nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.landing-block[data-block-type="navbar"] .nav-links {
  display: flex;
  gap: 25px;
  list-style: none;
}

.landing-block[data-block-type="navbar"] .nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

.landing-block[data-block-type="hero"],
.landing-block[data-block-type="hero-video"],
.landing-block[data-block-type="hero-split"] {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: #fff;
  padding: 100px 60px;
  text-align: center;
}

.landing-block[data-block-type="hero"] h1,
.landing-block[data-block-type="hero-video"] h1,
.landing-block[data-block-type="hero-split"] h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.landing-block[data-block-type="hero"] p,
.landing-block[data-block-type="hero-video"] p,
.landing-block[data-block-type="hero-split"] p {
  font-size: 20px;
  margin-bottom: 30px;
  opacity: 0.9;
}

.cta-button {
  display: inline-block;
  padding: 15px 40px;
  background: #fff;
  color: #f5576c;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
}

.landing-block[data-block-type="features"],
.landing-block[data-block-type="features-grid"] {
  padding: 80px 60px;
  background: #f8f9fa;
}

.landing-block[data-block-type="features"] h2,
.landing-block[data-block-type="features-grid"] h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
  color: #333;
}

.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.feature-item {
  text-align: center;
}

.feature-item i {
  font-size: 48px;
  color: #667eea;
  margin-bottom: 20px;
}

.feature-item h3 {
  font-size: 22px;
  margin-bottom: 10px;
  color: #333;
}

.feature-item p {
  color: #666;
  line-height: 1.6;
}

.landing-block[data-block-type="about"] {
  padding: 80px 60px;
  background: #fff;
}

.landing-block[data-block-type="about"] h2 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
}

.landing-block[data-block-type="about"] p {
  font-size: 18px;
  line-height: 1.8;
  color: #666;
  max-width: 800px;
}

.landing-block[data-block-type="stats"] {
  padding: 80px 60px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: #fff;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
}

.stat-item h3 {
  font-size: 48px;
  margin-bottom: 10px;
}

.stat-item p {
  font-size: 18px;
  opacity: 0.9;
}

.landing-block[data-block-type="testimonials"] {
  padding: 80px 60px;
  background: #fff;
}

.landing-block[data-block-type="testimonials"] h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
  color: #333;
}

.testimonials-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.testimonial-item {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
}

.testimonial-item p {
  font-style: italic;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.testimonial-author {
  font-weight: 600;
  color: #333;
}

.landing-block[data-block-type="team"] {
  padding: 80px 60px;
  background: #f8f9fa;
}

.landing-block[data-block-type="team"] h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
  color: #333;
}

.team-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.team-member {
  text-align: center;
}

.team-member .member-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 48px;
}

.team-member h3 {
  font-size: 20px;
  margin-bottom: 5px;
  color: #333;
}

.team-member p {
  color: #666;
}

.landing-block[data-block-type="pricing"] {
  padding: 80px 60px;
  background: #fff;
}

.landing-block[data-block-type="pricing"] h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
  color: #333;
}

.pricing-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.pricing-card {
  background: #f8f9fa;
  padding: 40px 30px;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #e9ecef;
}

.pricing-card.featured {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  transform: scale(1.05);
}

.pricing-card h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.pricing-card .price {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 30px;
}

.pricing-card ul {
  list-style: none;
  margin-bottom: 30px;
}

.pricing-card li {
  padding: 10px 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.pricing-card .cta-button {
  background: #667eea;
  color: #fff;
}

.pricing-card.featured .cta-button {
  background: #fff;
  color: #667eea;
}

.landing-block[data-block-type="cta"] {
  padding: 100px 60px;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: #fff;
  text-align: center;
}

.landing-block[data-block-type="cta"] h2 {
  font-size: 42px;
  margin-bottom: 20px;
}

.landing-block[data-block-type="cta"] p {
  font-size: 20px;
  margin-bottom: 30px;
}

.landing-block[data-block-type="cta"] .cta-button {
  background: #fff;
  color: #fa709a;
  font-size: 18px;
}

.landing-block[data-block-type="contact"],
.landing-block[data-block-type="newsletter"] {
  padding: 80px 60px;
  background: #f8f9fa;
}

.landing-block[data-block-type="contact"] h2,
.landing-block[data-block-type="newsletter"] h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
  color: #333;
}

.contact-form,
.newsletter-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
}

.form-group textarea {
  min-height: 120px;
  resize: vertical;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 15px;
  background: #667eea;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.landing-block[data-block-type="footer"] {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 60px 60px 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 20px;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #ecf0f1;
  text-decoration: none;
  opacity: 0.8;
}

.footer-section a:hover {
  opacity: 1;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(236, 240, 241, 0.2);
  opacity: 0.7;
}
`;

  const canvas = document.getElementById('canvas');
  const blocks = canvas.querySelectorAll('.landing-block');
  blocks.forEach((block, index) => {
    const inlineStyle = block.getAttribute('style');
    if (inlineStyle) {
      const blockType = block.dataset.blockType;
      css += `\n.block-${blockType}-custom {\n`;
      const styles = inlineStyle.split(';').filter(s => s.trim());
      styles.forEach(style => {
        const trimmed = style.trim();
        if (trimmed) {
          css += `  ${trimmed};\n`;
        }
      });
      css += '}\n';
    }
  });

  return css;
}
