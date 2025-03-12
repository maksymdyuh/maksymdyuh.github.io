class SlideshowModel {
    constructor() {
        // Масив з шляхами до зображень
        this.images = [
            { src: 'images/image1.jpg', title: 'Зображення 1' },
            { src: 'images/image2.jpg', title: 'Зображення 2' },
            { src: 'images/image3.jpg', title: 'Зображення 3' },
            { src: 'images/image4.jpg', title: 'Зображення 4' },
            { src: 'images/image5.jpg', title: 'Зображення 5' }
        ];
        this.currentIndex = 0;
        this.observers = [];
    }

    getCurrentIndex() {
        return this.currentIndex;
    }

    getAllImages() {
        return this.images;
    }

    getCurrentImage() {
        return this.images[this.currentIndex];
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.notifyObservers();
    }

    // Паттерн Observer для сповіщення View про зміни в Model
    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        for (let observer of this.observers) {
            observer.update();
        }
    }
}

// Експорт моделі для використання в інших файлах
export default SlideshowModel;