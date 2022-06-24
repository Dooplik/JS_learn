const person = {
    name: "Dooplik",
    age: 20,
    isStudent: true,
    //'complex key': 'complex value',
    //[1 + 3]: "1 + 3",
    greet() {
        console.log("Its greet")
    },
    // this в данном контексте это объект person
    info() {
        console.info('Информация про человека по имени:', this.name)
    }
}
console.log(person.name)
console.log(person['age'])
console.log(person['complex key'])
console.log(person[4])
person.greet()

person['complex key'] = 'new complex key'
console.log(person['complex key'])

delete person.age
console.log(person.age);

// Деструктуризация
//const name = person.name
//const isStudent = person.isStudent

const {name: name, isStudent: isStudent = false} = person
console.log(name, isStudent)

// Итерация по объекту
// Цикл forin опасен, так как может проходить не только п колючам данного объекта,
// но и в прототип Object
for(let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key:', key)
        console.log('value:', person[key])
    }
}

// данная конструкция позволяет избежать проблемы описанной выше
const keys = Object.keys(person)
console.log(keys)
keys.forEach((key) => {
    console.log('key:', key)
    console.log('value:', person[key])
})

// Context
person.info()

// слабо понял чё сделал в методе keysAndValue, но работает
const logger = {
    keys() {
        console.log('Object keys:', Object.keys(this))
    },
    keysAndValues() {
        Object.keys(this).forEach((key) => {
            console.log(`${key}: ${this[key]}`)
        })
    },
    withParams(top=false, between = false, bottom = false) {
        if (top) {
            console.log('------Start------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`${key}: ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('--------------')
            }
        })
        if (bottom) {
            console.log('------End------')
        }
    }
}

// метод bind привязывает контекст ....... ЧТО?
// bind возвращает новую функцию
// в целом крутая штука разберись потом поподробней
const bound = logger.keys.bind(person)
bound()

// как bind, только он сразк вызывает функцию
logger.keysAndValues.call(person)
logger.withParams.call(person, true, false, true)
// apply то же что и call, только остальные параметры оборачиваются в массив
logger.withParams.apply(person, [true, false, true])




