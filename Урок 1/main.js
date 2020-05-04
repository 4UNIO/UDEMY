let money = prompt("Ваш бюджет на месяц?");
console.log(typeof money);
// let time = prompt("Введите дату в формате YYYY-MM-DD");
let exp = prompt("Введите обязательную статью расходов в этом месяце");
let howMuch = prompt("Во сколько обойдется?");
appData = {
    money,
    // time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};
appData.expenses[exp] = howMuch;
let month = 30;
let budget = (money - howMuch)/month;
alert("Ваш бюджет на 1 день будет :" + budget);

