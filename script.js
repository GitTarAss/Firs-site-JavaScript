'use strict';

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
/* //////////////////////// Завдання №1

let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

let q1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    q2 = prompt("Во сколько обойдется?", ''),
    q3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    q4 = prompt("Во сколько обойдется?", '');

appData.expenses[q1] = q2;
appData.expenses[q3] = q4;

alert(appData.budget/30);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Завдання №2 

/* 
let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
}; 
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////// => For Варіант №1
 /*
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null // ( (typeof(a)) === 'string' ) - 
        // && (typeof(a)) != null => не ровно пустому незаповненному полю (щоб не залишали незаповненні поля в формі)
        && a != '' && b != '' // && a!= '' - і а не повинна бути пустою сторкою => && b != '' - те саме
        && a.length < 50 ) {  // && a.length <50 - обмежує кількість символів в полі
            console.log('done');
            appData.expenses[a] = b;
    } else {
        console.log ('Wrong');
            i--;             // прописати повернення на крок назад якщо всы умови вище не спрацювали
    }
};
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ///////////////////////// => While Варіани №2

let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
        
        appData.expenses[a] = b;

    } else {
        console.log ('Wrong');
            i--; 
    }
    i++;
};
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// => While Варіани №3

/*
 let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {

        console.log ("Done");
        
        appData.expenses[a] = b;
    } else {
        console.log ('Wrong');
            i--; 
    }
    i++;
}
while (i < 2);


appData.moneyPerDay = appData.budget / 30;

alert ("Бюджет на 1 день: " + appData.moneyPerDay + "грн.");

if (appData.moneyPerDay < 100) {
    console.log ("Минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
} 
*/

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Завдання №3 

let money, time; // виносимо перемінні за функцю щоб їх було видно глобально

function start() {
        money = +prompt("Ваш бюджет на месяц?", '');
        time = prompt("Введите дату в формате YYYY-MM-DD", '');

        while(isNaN(money) || money == "" || money == null) { //isNaN- isNaN() определяет, является ли значение NaN (Not-A-Number). Этот метод возвращает true
                            // money == "" - Пользователь оставит пустую стоку; money == null - спрацьовує при нажатты кнопки відміна
        money = +prompt("Ваш бюджет на месяц?", ''); // Якщо задіялась люба перемінна з while то ще раз спитати перемінну money
        }
}
start(); //визов функції

let appData = {
    budget: money,
    timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
    savings: true,
    chooseExpenses: function() {
            let i = 0;
    do {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');

            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {

            console.log ("Done");
            
            appData.expenses[a] = b;
        } else {
            console.log ('Wrong');
                i--; 
        }
        i++;
    }
    while (i < 2);
        },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на 1 день: " + appData.moneyPerDay + "грн.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Минимальный уровень достатка!");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log ("Средний уровень достатка!");
            } else if (appData.moneyPerDay > 2000) {
                console.log ("Высокий уровень достатка!");
            } else {
                console.log ("Произошла ошибка");
            }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какая сумма ваших нокоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего дипозита: " + appData.monthIncome + "грн.");
        }
    }, 
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {

        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        }
         else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }
    
        appData.income.forEach (function (itemMassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemMassive);
        });
    
    } 
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
    }


/*
appData.moneyPerDay = (appData.budget / 30).toFixed();

alert ("Бюджет на 1 день: " + appData.moneyPerDay + "грн.");

if (appData.moneyPerDay < 100) {
    console.log ("Минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
*/

