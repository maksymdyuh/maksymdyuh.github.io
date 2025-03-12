/**
 * Controller в MVC - відповідає за обробку подій та з'єднує Model і View
 */
class CalculatorController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        // Елементи інтерфейсу
        this.display = document.getElementById('display');
        this.numberButtons = document.querySelectorAll('.number');
        this.operatorButtons = document.querySelectorAll('.operator');
        this.equalsButton = document.getElementById('equalsBtn');
        this.clearButton = document.getElementById('clearBtn');
        this.backspaceButton = document.getElementById('backspaceBtn');
        this.decimalButton = document.getElementById('decimalBtn');
        
        // Ініціалізація відображення
        this.updateDisplay();
        
        // Підключення обробників подій
        this.setupEventListeners();
    }
    
    // Оновлення відображення
    updateDisplay() {
        this.display.value = this.model.getCurrentValue();
    }
    
    // Налаштування обробників подій
    setupEventListeners() {
        // Обробка натискання цифр
        this.numberButtons.forEach(button => {
            button.addEventListener('click', () => {
                const number = button.getAttribute('data-number');
                this.model.appendNumber(number);
                this.updateDisplay();
            });
        });
        
        // Обробка натискання операторів
        this.operatorButtons.forEach(button => {
            button.addEventListener('click', () => {
                const operator = button.getAttribute('data-operator');
                this.model.setOperation(operator);
                this.updateDisplay();
            });
        });
        
        // Обробка натискання "="
        this.equalsButton.addEventListener('click', () => {
            this.model.calculate();
            this.updateDisplay();
        });
        
        // Обробка натискання "C" (очистити)
        this.clearButton.addEventListener('click', () => {
            this.model.clear();
            this.updateDisplay();
        });
        
        // Обробка натискання "⌫" (backspace)
        this.backspaceButton.addEventListener('click', () => {
            this.model.backspace();
            this.updateDisplay();
        });
        
        // Обробка натискання "." (десяткова крапка)
        this.decimalButton.addEventListener('click', () => {
            this.model.appendDecimal();
            this.updateDisplay();
        });
        
        // Додаємо обробку клавіатури
        document.addEventListener('keydown', this.handleKeyboardInput.bind(this));
    }
    
    // Обробка вводу з клавіатури
    handleKeyboardInput(event) {
        // Цифри 0-9
        if (/^[0-9]$/.test(event.key)) {
            event.preventDefault();
            this.model.appendNumber(event.key);
        }
        // Оператори
        else if (['+', '-', '*', '/'].includes(event.key)) {
            event.preventDefault();
            this.model.setOperation(event.key);
        }
        // Дорівнює (Enter)
        else if (event.key === 'Enter' || event.key === '=') {
            event.preventDefault();
            this.model.calculate();
        }
        // Backspace
        else if (event.key === 'Backspace') {
            event.preventDefault();
            this.model.backspace();
        }
        // Десяткова крапка
        else if (event.key === '.') {
            event.preventDefault();
            this.model.appendDecimal();
        }
        // Clear (Escape)
        else if (event.key === 'Escape') {
            event.preventDefault();
            this.model.clear();
        }
        
        this.updateDisplay();
    }
}