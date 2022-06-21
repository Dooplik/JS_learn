const nickName = 'Dooplik'

//const output = 'Меня зовут ' + nickName + ' конец.'
const output = `Меня зовут ${nickName} конец`
// такие ковычки находятся на клавише Ё

const htmlOutput = `
    <div>It's div</div>
    <p>It's p</p>
`
console.log(output)
const name = "Тимофей"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.indexOf("1"))
console.log(name.startsWith("Тим"))
console.log(name.endsWith("ей"))
console.log(name.repeat(4))
const pass = "             H            S"
console.log(pass)
console.log(pass.trim())
console.log(pass.trimStart())

// Полезная штука для валидации данных
function func(mas, name, age) {
    if (age < 0) {
        age = "Ещё не родился"
    }
    console.log(mas, name, age) // (3) ['Имя: ', ', возраст: ', '', raw: Array(3)] 'Dooplik' 20
    return `${mas[0]}${name}${mas[1]}${age}${mas[2]}`
}
const persName = "Dooplik"
const persAge = 20

const out1 = func`Имя: ${persName}, возраст: ${persAge}`
const out2 = func`Имя: ${persName}, возраст: ${persAge - 21}`

console.log(out1)
console.log(out2)