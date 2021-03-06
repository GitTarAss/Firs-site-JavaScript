'use strict';

/* Массив (Array) - это упорядоченная коллекция значений. Значения в массиве называются элементами,
 и каждый элемент характеризуется числовой позицией в массиве, которая называется индексом */

/////////////////////////////////////////////
/* 
let arr = [1, 2, 3, 4, 5]; // Простий массив
 console.log(arr);
 */

/////////////////////////////////////////////

/* 
let arr = [1, 2, 3, 4, 5];

arr.pop();     // Удаление останнего елемента из массива (дейсвие)
arr.push("5"); // Добавляем елемент в конце массива - будет в виде строки

arr.shift();   // Удалить первый елемент из массива
arr.unshift("1"); // Добавляем первый елемент в массив - будет в виде строки

console.log(arr); 
*/

//////////////////////////////////////////////

/*
let arr = [1, 2, 3, 4, 5]; 

for (let i = 0; i < arr.length; i++) {  // цикл для перебора всых елементыв массива
    // і = 0; - новая переменная
    // i < arr.length - должна быть меньше чем количество елементов в массиве
    // і++ - после каждого елемента увеличиваем на 1
    console.log(arr[i]);
}

console.log(arr);
*/

//////////////////////////////////////////////

/*
let arr = ['first', 2, "three", 4, 5]; 
        // Метод forEach
arr.forEach(function(item, i, mass) {  // arr.foeEach - имя массива к которому преминяем метод forEach()
    // используем здесь Callback- функциию (function())
    // item - каждый елемент в нашем массиве ('first', 2, ...)
    // і - номер нашего елемента (может быть любое название)
    // mass - сам массив (может быть любое название)
    console.log(i + ': ' + item + ' (массив: ' + mass + ')'); // Действие которое должно произойти
});

console.log(arr);
*/
///////////////////////////////////////////////


// Новый способ перебора массивов for ... of
// Не работает в обектах
// Работает на массивах, строках, новых видах обeктов
/*
let mass = [1,3,4,6,7];  //
for (let key in mass) {  // цикл (for ... in) - перемінна що означає кожне свойство або метод в оюєкті (let key) - те що в квадратних скобках
    //потім прописуєм оператор "in" і назву обєкта "mass"
    console.log(key);    // Массивы имеют пары (Ключ : значение) [0:1, 1:3, 2:4....]
    // =>for (let key in mass)<= при помощо мы получаем ключи в консоле будет => 0 1 2 3 4
    // =>for (let key of mass)<= Чтобы получить значение то нужно заменить (in на of) будет => 1 3 4 6 7
}
*/

/////////////////////////////////////////////
/*
let ans = prompt("", ""), // переменная ans
    arr = [];  // массив данних

arr = ans.split(','); // Действие для того чтобы розделить елементы массива (,)
console.log(arr);
*/

/////////////////////////////////////////////
/*
let arr = ['qqq', 'qwe', 'pp'],  // Масив с данными => arr = ['qqq', 'qwe', 'pp'],
    i = arr.join(', ');  // техничиская переменная с обратным методом => arr.join(', ');
    // Берет каждый елемент нашего массива и склеивает в одну строку с указпним нами розделителем 

console.log(arr); // если в консоль выводить arr то выведется массив => [ 'qqq', 'qwe', 'pp' ]
                // если выводить console.log(i); то выводиться строка => qqq, qwe, pp
*/
/////////////////////////////////////////////
/*
let arr = ['aqq', 'qwe', 'cpp'],  
    i = arr.sort();  // отсортировать по алфавиту => [ 'aqq', 'cpp', 'qwe' ]

console.log(arr);
*/
//////////////////////////////////////////////

let arr = [1,4,15,9],  
    i = arr.sort(compareNum);  // чтобы метод сорт правельно работал с цыфрами 
    //нужно передать Callback-функцию в внутерь метода arr.sort(compareNum); 
    // => [ 1, 4, 9, 15 ]

function compareNum(a,b) {  // Название функции => compareNum // Фргументы (a,b)
    return a-b;  //
}

console.log(arr);

/* Псевдомассив - это объект, структура которого совпадает со структурой массива 
(т.е. он хранит элементы в индексах от 0 до length-1), 
но при этом он не обладает методами, свойственными полноценным массивам из-за отличий в прототипе.
*/
