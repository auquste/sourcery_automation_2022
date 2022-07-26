class CalculatorPage {

    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://testsheepnz.github.io/BasicCalculator');
    }

    async fillInData(a = '10', b = '5') {
        await this.page.locator('#number1Field').type(a);
        await this.page.locator('#number2Field').type(b);
    }

    async fillInDataSymbols(a = 'a', b = '%') {
        await this.page.locator('#number1Field').type(a);
        await this.page.locator('#number2Field').type(b);
    }



}

module.exports = { CalculatorPage };