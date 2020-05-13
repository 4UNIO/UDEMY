let month = 30;
let money;
let time;
function start() {
  money = +prompt("Ваш бюджет на месяц?");
  time = prompt("Введите дату в формате YYYY-MM-DD");
  while (isNaN(money) || money == "" || money === null) {
    money = +prompt("Ваш бюджет на месяц?");
  }
}
start();
appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};
function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько обойдется?");
    if (typeof a === "string" && typeof a !== null && typeof b !== null && 
    a !== "" && b !== "" && a.length < 50) 
        {
      appData.expenses[a] = b;
        } else 
    {
      console.log("Type smth");
      i--;
    }
  }
}
chooseExpenses();
let optexp;
function chooseOptExpenses()
{
    for(let i = 1; i <= 3;i++)
    {
       optexp = prompt("Статья необязательных расходов?");
       appData.optionalExpenses[i] = optexp;
    }
}
chooseOptExpenses();
function detectDayBudget()
{
    appData.moneyPerDay = (appData.budget / month).toFixed();
    alert("Ваш бюджет на 1 день будет :" + appData.moneyPerDay);
}
detectDayBudget();
function detectLevel()
{
if (appData.moneyPerDay < 100) {
  console.log("Нужно больше зарабатывать");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Ну почти Абрамович");
} else if (appData.moneyPerDay > 2000) {
  console.log("Правая рука Абрамовича");
} else {
  console.log("Что-то пошло не так!");
}
}
detectLevel();
function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какой депозит хотите положить?"),
      percent = prompt("Под какой процентик?");
    appData.monthIncome = ((save / 100 / 12) * percent).toFixed();
    alert("Доход будет : " + appData.monthIncome);
  }
}
checkSavings();
console.log(appData);