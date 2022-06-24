// Function Declaration
function greet1(name) {
    console.log('Привет - ', name)
}
//Function Expression

const greet2 = function (name) {
    console.log('Привет 2 - ', name)
}

greet1("Настя")
greet2("Настя")

console.dir(greet1) // Инфа в консоли

// Анонимны функции
let counter = 0
const interval = setInterval(function () { // функция handler является анонимной
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 100)

// Стрелочные функции
const arrow = (name) => {
    console.log('Привет - ', name)
}
arrow("Dooplik1")

const arrow2 = name => console.log('Привет - ', name)
arrow2("Dooplik2")

const sum = (x, y) => x + y
console.log(sum(10, 200))

// Параметры по умолчанию
const multi = (x = 1, y = 1) => x * y
console.log(multi(3, 64))

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// Замыкание
// В основном нужно для приватизации переменных
function create(name) {
    return function (lastName) {
        console.log(name, lastName)
    }
}
const zam = create("Тимофей")
console.log(zam("Мартюшев"))
console.log(zam("Опа"))