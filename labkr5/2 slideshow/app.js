// Імпорт компонентів MVC
import SlideshowModel from './model.js';
import SlideshowView from './view.js';
import SlideshowController from './controller.js';

// Ініціалізація програми
document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.getElementById('slideshow');
    const model = new SlideshowModel();
    const controller = new SlideshowController(model);
    const view = new SlideshowView(model, slideshowContainer, controller);
});