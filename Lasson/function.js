'use strict';

////////////////////////////////////// Function Declaration
/* let num = 20;

function showFirstMessage(text) {  //перше слово Дієслово (text)- це праметри- данні або аргументи
    alert(text); // Вbвід того що ми задали в функції
    let num = 10; // Функція спочатку шукає перемінну в середині себе, аж тотім в зовнішніх перемінних
    console.log(num);
}

showFirstMessage('Hallo World'); // Щоб визвати функцію портібно прописати її імя showFirstMessage і круглі душки ();
console.log(num);
// ЗАМИКАННЯ це функція з усіма зовнішніми перемінними які їх досткпні
//Функція також може повернути значення з допомогоб слова "return" після цього слова функція зупинить свою дію
 */
/////////////////////////////////////

/* function calc(a,b) {
    return (a + b);  // Можна визивати дані з різними параметрами
}

console.log(calc(3,4)); //данні №1

console.log(calc(8,4)); //данні №2 
*/
////////////////////////////////////// Function Declaration
/* 
function calc(a,b) {
    return (a + b);  
}

console.log(calc(3,4)); 

console.log(calc(8,4));  

function retVar() {
    let num = 50;
    return num;    //Можемо повернути перемінну в зовнішній сівт з функції
}

let anotherNum = retVar(); //виводимо дані сюди з функції
console.log(anotherNum); */

/////////////////////////////////////

/* Function Declaration - обявлена в потоці коду
function sum(a, b) {
    return a + b;
  } */
///////////////////
/* Function Expression - присвоюємо функцію в перемінну
// Виконується тільки коли код до неї доходить
var sum = function(a, b) {
    return a + b;
  } */
 ////////////////////////////////////

////////////////////////////////////// Function Expression
/* let calc = function(a,b) {
    return (a + b);  
}

console.log(calc(3,4)); 

console.log(calc(8,4));  

function retVar() {
    let num = 50;
    return num;   
}

let anotherNum = retVar(); 
console.log(anotherNum); 
*/
////////////////////////////////////// Задание функцый через стрелку
/* 
let calc = (a,b) => a+b // Така функція немає свого контекста визова
// Найчастіше використовується в 'оброботчиках событий'
console.log(calc(3,4)); 

console.log(calc(8,4));  

function retVar() {
    let num = 50;
    return num;   
}

let anotherNum = retVar(); 
console.log(anotherNum);  
*/
////////////////////////////////////
// Методы и свойство у строк и чисел
// Методы - вспомагательные функции
// Свойства - вспомагательные значения

/* let str = "test";
console.log(str.length); // Підрахувати кількість символів в строці

console.log(str.toUpperCase()); // Обовязково відкрити пусті скобки щоб в них вивести дані
console.log(str.toLowerCase()); //Перевести рвсе в малі букви (Метод)

let twelve = "12.2";

console.log(Math.round(twelve)); */ // Округлення числа до найближчого цілого (Метод)

///////////////////////

let twelve = "12.2px";

console.log(parseInt(twelve)); // Переводить числа в іншу систему вичислювання (двоічна,десятирічна)
console.log(parseFloat(twelve)); // Повертає десятичне число