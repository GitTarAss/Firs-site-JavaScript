'use strict';

/* коллбэк — это функция, которая должна быть выполнена после того,
 как другая функция завершила выполнение (отсюда и название: callback – функция обратного вызова).
*/ 

function first() {
    //Чтото делать (Выводить цыфру 1)
    setTimeout(function() {          //Делает задержку на 0,5сек. выполнение функции
        console.log(1);
    }, 500 );
}

function second () {
    console.log(2);
}

first();
second();

///////////////////////////////////////////////

function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

////////// Варыант 2 ///////////////

function done() {
    console.log("Я прошел третий урок!")
}

learnJS("JavaScript", done);

/*   ///////// Варыант 1 ///////////////
learnJS("JavaScript",function() {
    console.log("Я прошел третий урок!")
})
*/