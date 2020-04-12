'use strict';
/* ///////////////////
if (2*4==5){
    console.log("Вірно");    
} else {
    console.log("Не вірно");
}
*/

/* //////////////////////////
let num = 50;

if (num < 49) {
    console.log('Не вірно');
} else if (num > 100) {
    console.log('Многовато') ;
} else {
    console.log('Вірно');
}
*/

/* /////////////////////////
let num = 50;
(num == 50) ? console.log('Pravda') : console.log("Losh");
*/

let num = 50;
switch (num) {
    case num < 49:
        console.log('Losh');
        break;
    case num < 100:
        console.log('Sov much');
        break;
    case num < 80:
        console.log('Et mor then nead');
        break;
    case 50:
        console.log('Pravda');
        break;
    default:
        console.log("WTF");
        break;
}