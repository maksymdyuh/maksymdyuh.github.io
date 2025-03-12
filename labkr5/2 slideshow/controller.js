// Контролер (Controller) - обробляє введення користувача і оновлює Model
class SlideshowController {
    constructor(model) {
        this.model = model;
    }
    
    nextSlide() {
        this.model.nextSlide();
    }
}

// Експорт контролера для використання в інших файлах
export default SlideshowController;