/**
 * Model в MVC - відповідає за дані та бізнес-логіку
 * В нашому випадку це калькулятор, який виконує арифметичні операції
 */
class CalculatorModel {
    constructor() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operation = null;
        this.shouldResetDisplay = false;
    }

    // Додати цифру до поточного значення
    appendNumber(number) {
        if (this.currentValue === '0' || this.shouldResetDisplay) {
            this.currentValue = number;
            this.shouldResetDisplay = false;
        } else {
            this.currentValue += number;
        }
        return this.currentValue;
    }

    // Додати десяткову крапку
    appendDecimal() {
        if (this.shouldResetDisplay) {
            this.currentValue = '0.';
            this.shouldResetDisplay = false;
        } else if (!this.currentValue.includes('.')) {
            this.currentValue += '.';
        }
        return this.currentValue;
    }

    // Очистити всі значення
    clear() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operation = null;
        this.shouldResetDisplay = false;
        return this.currentValue;
    }

    // Видалити останню цифру
    backspace() {
        if (this.currentValue.length === 1) {
            this.currentValue = '0';
        } else {
            this.currentValue = this.currentValue.slice(0, -1);
        }
        return this.currentValue;
    }

    // Обрати операцію
    setOperation(operation) {
        if (this.previousValue !== null) {
            this.calculate();
        }
        
        this.operation = operation;
        this.previousValue = this.currentValue;
        this.shouldResetDisplay = true;
        
        return this.currentValue;
    }

    // Обчислити результат
    calculate() {
        let result;
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                // Перевірка ділення на нуль
                if (current === 0) {
                    result = 'Помилка: ділення на нуль';
                } else {
                    result = prev / current;
                }
                break;
            default:
                return;
        }
        
        // Форматування результату (максимум 8 знаків після коми)
        if (typeof result === 'number') {
            this.currentValue = parseFloat(result.toFixed(8)).toString();
        } else {
            this.currentValue = result;
        }
        
        this.operation = null;
        this.previousValue = null;
        this.shouldResetDisplay = true;
        
        return this.currentValue;
    }

    // Отримати поточне значення
    getCurrentValue() {
        return this.currentValue;
    }
}