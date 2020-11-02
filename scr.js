let money = prompt("Ваш бюджет на місяць?, '');
let time = prompt("Введіть дату в форматі YY-MM-DD", '');
let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};
let a1 = prompt("Введіть обов'язкову статтю розходів в цьому місяці", '');
let a2 = prompt("В скільки обійдеться?", '');
let a3 = prompt("Введіть обов'язкову статтю розходів в цьому місяці", '');
let a4 = prompt("В скільки обійдеться?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);