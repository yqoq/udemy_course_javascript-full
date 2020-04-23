'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

for (let i=0;i<2;i++) {
    let expenses = prompt("Введите обязательную статью расходов в этом месяце");
    let cost = prompt("Во сколько обойдется?");
    appData.expenses[expenses] = cost;
}

let daysInMonth = 30;
let dailyBudget = appData.budget / daysInMonth;
alert("Бюджет на 1 день: "+ dailyBudget);