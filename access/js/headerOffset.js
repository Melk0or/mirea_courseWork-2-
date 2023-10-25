"use strict"

window.onscroll = function () {
    myFunc();
}

let header = document.querySelector("header")

let sticky = header.offsetTop;

function myFunc() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("_sticky");
    }
    else {
        header.classList.remove("_sticky");
    }
}

const squares = document.querySelectorAll('.circ');

squares.forEach((square, index) => {
    square.style.animation = 'float ' + randomDelay(index) + 's linear infinite';
});

function randomDelay(index) {
    if (index <= 3) {
        return 10;
    }
    return index * 2; // Генерируем случайную задержку от 1 до 5 секунд
}



// function delay(ms) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve(1);
//         }, ms);
//     })
// }
//
// delay(3000).then(result => alert(result)).then(() => alert("dsas"));


// function first() {
//     console.log(1)
// }
//
// function second() {
//     first();
//     console.log(2)
// }
//
// function third() {
//     second();
//     console.log(3)
// }
//
// third();