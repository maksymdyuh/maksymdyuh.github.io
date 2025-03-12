/**
 * Головний файл додатку, який ініціалізує Model, View і Controller
 */
document.addEventListener('DOMContentLoaded', () => {
    // Створення моделі
    const calculatorModel = new CalculatorModel();
    
    // В нашому випадку View - це просто HTML і CSS файли
    // які вже підключені до документа
    
    // Створення контролера і зв'язування його з моделлю та представленням
    const calculatorController = new CalculatorController(calculatorModel, null);
});