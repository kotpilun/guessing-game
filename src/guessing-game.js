class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        // this.middle = Math.floor((this.min + this.max) / 2);
        this.middle = Math.ceil((this.max - this.min) / 2 + this.min);
        return this.middle;
    }

    lower() {
        // this.max = this.middle - 1;
        this.max = this.middle;
        console.log('Верхняя граница', this.max);
    }

    greater() {
        // this.min = this.middle + 1;
        this.min = this.middle;
        console.log('Нижняя граница', this.min);
    }
}

module.exports = GuessingGame;
