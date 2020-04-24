'use strict';

let appData = {
    budget: undefined,
    timeData: undefined,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    moneyPerDay: undefined
}

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
appData.budget = money;
appData.timeData = time;

const addExpenses = function () {
    let expenses = prompt("Введите обязательную статью расходов в этом месяце");
    if (expenses == null) {
        return null;
    }
    let cost = (expenses && expenses.trim())
        ? +prompt(`Во сколько обойдется?\n${expenses}`)
        : NaN;
    if (Number.isNaN(cost)) {
        console.log(`Unexpected customer input:[${expenses}:${cost}]`)
        return undefined;
    }
    return [expenses, cost];
}

/* FOR */
/*
for (let i = 0; i < 2; i++) {
    let expenses = addExpenses();
    if (expenses === null) {
        break;
    } else if (expenses !== undefined) {
        appData.expenses[expenses[0]] = expenses[1];
    } else {
        i--;
    }
}
*/

/* DO...WHILE */
/*
let i = 0;
do {
    let expenses = addExpenses();
    if (expenses === null) {
        break;
    } else if (expenses !== undefined) {
        appData.expenses[expenses[0]] = expenses[1];
        i++;
    }
} while (i < 2);
*/

/* WHILE */
let i = 0
while (i < 2) {
    let expenses = addExpenses();
    if (expenses === null) {
        break;
    } else if (expenses !== undefined) {
        appData.expenses[expenses[0]] = expenses[1];
        i++;
    }
}

const DAYS_IN_MONTH = 30;
const MINIMAL_DAILY_BUDGET = 10;
const HEIGHT_DAILY_BUDGET = 100;

appData.moneyPerDay = appData.budget / DAYS_IN_MONTH;
console.log(appData)

if (!Number.isNaN(appData.moneyPerDay)) {
    let msg = `Бюджет на 1 день: ${appData.moneyPerDay}`;
    if (appData.moneyPerDay < MINIMAL_DAILY_BUDGET) {
        msg += "\nВаш ежедневный бюджет меньше минимального";
    } else if (appData.moneyPerDay < HEIGHT_DAILY_BUDGET) {
        msg += "\nУ вас средний ежедневный бюджет";
    } else if (appData.moneyPerDay >= HEIGHT_DAILY_BUDGET) {
        msg += "\nВаш ежедневный бюджет больше среднего";
    }
    alert(msg);
} else {
    alert("Ошибка расчета ежедневного бюджета");
}
