let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let month = 30;
appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};
for(let i = 0; i < 2;i++)
{
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько обойдется?");
    if(typeof(a) === "string" && typeof(a) !== null && typeof(b) !== null 
    && a !== "" && b !== "" && a.length < 50)
    {
        console.log("Good");
        appData.expenses[a] = b;
    }else{
        console.log("Type smth");
        i--;
    }
}
// ЦИКЛ WHILE
// let i = 0;
// while(i < 2)
// {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//     let b = prompt("Во сколько обойдется?");
//     if(typeof(a) === "string" && typeof(a) !== null && typeof(b) !== null 
//     && a !== "" && b !== "" && a.length < 50)
//     {
//         console.log("Good");
//         appData.expenses[a] = b;
//     }else{
//         console.log("Type smth");
//         i--;
//     }
// }
// ЦИКЛ DO WHILE
// let i = 0;
// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//     let b = prompt("Во сколько обойдется?");
//     if(typeof(a) === "string" && typeof(a) !== null && typeof(b) !== null 
//     && a !== "" && b !== "" && a.length < 50)
//     {
//         console.log("Good");
//         appData.expenses[a] = b;
//     }else{
//         console.log("Type smth");
//         i--;
//     }
//     i++;
// }while(i < 2);
appData.budgetPerDay = appData.budget/month;
alert("Ваш бюджет на 1 день будет :" + appData.budgetPerDay);
if(appData.budgetPerDay < 100){
    console.log("Нужно больше зарабатывать");
}else if(appData.budgetPerDay > 100 && appData.budgetPerDay < 2000)
{
    console.log("Ну почти Абрамович");
}else if(appData.budgetPerDay > 2000)
{
    console.log("Правая рука Абрамовича");
}else
{
    console.log("Что-то пошло не так!");
}