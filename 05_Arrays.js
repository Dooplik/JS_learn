const cars = ["mazda", "opel", "ford", "BMW", "Mercedes"]
const people = [
    {name: "Тима", age: 20},
    {name: "Настя", age: 21},
    {name: "Марина", age: 18},
    {name: "Светлана", age: 47}
]
const digits = [2, 5, 7, 10, 3, 1, 4, 8, 6, 9]
console.dir(cars)
console.log(cars)

const elem1 = "Lada"
const elem2 = "Porch"
cars.push(elem1) // добавление в конец
cars.unshift(elem2) // добавление в начало
console.log(cars)

const firstCar = cars.shift() // удаляет и записыает куда-то первый элемент массива
const lastCar = cars.pop()// удаляет и записыает куда-то последний элемент массива
console.log(firstCar, cars, lastCar)

const text = "УЛЫБОК ТЕБЕ ДЕД МОКАР"
const reversedText1 = text.split("").reverse().join("")
console.log(text)
console.log(reversedText1)
const reversedText2 = text.split(" ").reverse().join(" ")
console.log(text)
console.log(reversedText2)

for (let i = 0; i < cars.length; i++) {
    if (cars[i] === "BMW") {
        cars[i] = "BBB"
    }
}
console.log(cars)

const pos = cars.indexOf("BBB")
cars[pos] = "BMW"
console.log(cars)

const index = people.findIndex(function (person) {
    return person.age === 20
})
console.log(people[index].name)

//Способ передачи callBack функции
const person = people.find(function (person) {
    return person.age === 18
})
console.log(person.name)

//Способ передачи callBack функции проще
const person1 = people.find((person1) => {
    return person1.age === 21
})
console.log(person1.name)

//Способ передачи callBack функции пиздец как просто(c помощью лямбда-функции)
const person2 = people.find(person2 => person2.age === 47)
console.log(person2.name)

// Методы высоких порядков
const upperCaseCars = cars.map(car => car.toUpperCase())
console.log(upperCaseCars)

const filteredDigits = digits.filter(num => num > 5)
console.log(filteredDigits)

const peoplesAges = people
    .filter(pers => pers.age >= 20)
    .reduce((acc, person) => (acc += person.age)
, 0)
console.log(peoplesAges)

