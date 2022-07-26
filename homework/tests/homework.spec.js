// @ts-check
const { test, expect } = require('@playwright/test');
const { CalculatorPage } = require('../pages/homework');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]


data.forEach(version => {
  
  //numbers

  test.describe('version:' + version, () => {
    test('Adding 10 and 5 results in 15', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await calculatorPage.fillInData();
      await page.selectOption('#selectOperationDropdown', { label: 'Add' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('15');
    });

    test('Subtracting 10 and 5 results in 5', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await calculatorPage.fillInData();
      await page.selectOption('#selectOperationDropdown', { label: 'Subtract' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });

    test('Multiplying 10 and 5 results in 50', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await calculatorPage.fillInData();
      await page.selectOption('#selectOperationDropdown', { label: 'Multiply' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('50');
    });

    test('Dividing 10 and 5 results in 2', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await calculatorPage.fillInData();
      await page.selectOption('#selectOperationDropdown', { label: 'Divide' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('2');
    });

    test('Concatenating 10 and 5 results in 105', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await calculatorPage.fillInData();
      await page.selectOption('#selectOperationDropdown', { label: 'Concatenate' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('105');
    });

  //symbols

    test('Adding a and % should have no result', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await calculatorPage.fillInDataSymbols();
      await page.selectOption('#selectOperationDropdown', { label: 'Add' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });

    test('Subtracting a and % should have no result', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await calculatorPage.fillInDataSymbols();
      await page.selectOption('#selectOperationDropdown', { label: 'Subtract' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });

    test('Multiplying a and % should have no result', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await calculatorPage.fillInDataSymbols();
      await page.selectOption('#selectOperationDropdown', { label: 'Multiply' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });

    test('Dividing a and % should have no result', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await calculatorPage.fillInDataSymbols();
      await page.selectOption('#selectOperationDropdown', { label: 'Divide' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });

    test('Concatenating a and % should result in a%', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await calculatorPage.fillInDataSymbols();
      await page.selectOption('#selectOperationDropdown', { label: 'Concatenate' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('a%');
    });

    //zero

    test('Dividing 5 by zero should give empty answer field', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });
  });
});