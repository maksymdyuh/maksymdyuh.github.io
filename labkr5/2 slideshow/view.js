class SlideshowView {
    constructor(model, container, controller) {
        this.model = model;
        this.controller = controller;
        this.container = container;
        
        // Створюємо елемент зображення
        this.imageElement = document.createElement('img');
        this.imageElement.className = 'slide-image';
        this.container.appendChild(this.imageElement);
        
        // Додаємо елемент для заголовка
        this.titleElement = document.createElement('div');
        this.titleElement.className = 'slide-title';
        this.container.appendChild(this.titleElement);
        
        // Додавання слухача подій для кліку
        this.container.addEventListener('click', this.handleClick.bind(this));
        
        // Реєстрація View як спостерігача за Model
        this.model.addObserver(this);
        
        // Початкове відображення
        this.update();
    }
    
    // Оновлення відображення при зміні даних у Model
    update() {
        const currentImage = this.model.getCurrentImage();
        this.imageElement.src = currentImage.src;
        this.imageElement.alt = currentImage.title;
        this.titleElement.textContent = currentImage.title;
    }
    
    // Обробка кліку на слайдшоу
    handleClick() {
        this.controller.nextSlide();
    }
}

// Експорт представлення для використання в інших файлах
export default SlideshowView;