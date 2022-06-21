//Пишем в  camelCase стиле
// Типы данных
const a = 100
const b = 'строка'
const c = true
const d = null
let e
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)

// Приоритет операций
const fullAge = 20
const birthday = 2002
const curYear = 2022

const isFullAge = curYear - birthday >= fullAge
// mdn + запрос в браузере будет кидать на mozilla.developer.org
// будет полезно для поиска документации, напрример(для JS в основном).

// приоритеты идут от 1 до 20 таблица находится по ссылке:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log('===========================')
// Условники
let status = 'fail' // fail, go

if (status === 'ready') {
    console.log('ready')
} else if (status === 'fail') {
    console.log('fail')
} else {
    console.log('go')
}

console.log('===========================')
// == и ===
const num1 = 1
const num2 = '1'
console.log(num1 == num2)
console.log(num1 === num2)

console.log('===========================')
// Тернарный оператор

const flag = true
flag ? console.log(true): console.log(false)

// Особенности булевой логики
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B
// Ссылка выше ведет на статью со всеми операторами, в ней есть и логические

console.log('===========================')
// Функции
function sum(x, y) {
    return x + y
}
console.log(sum(10, 5))

console.log('===========================')
// Массивы и циклы
const mas = [1, 2, 3, '4', 5, 6, 7, 8, 9, '10']
console.log(mas)
for (let i = 0; i < mas.length; i++) {
    //console.log(mas[i])
}

console.log('===========================')
// Объекты
const person = {
    name: "Тимофей",
    lastName: "Мартюшев",
    age: 20,
    languages: ['RU', 'EN', 'De'],
    sayHello: function() {
        console.log("Hello")
    }
}
console.log(person.name)
console.log(person['lastName'])
person.age += 1
console.log(person.age)
person.sayHello()


