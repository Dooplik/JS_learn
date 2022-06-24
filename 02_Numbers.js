const int = 10 // челочисленное
const float = 10.5 // с плавающей точкой
const pow = 10e3 // 10 в 3 степени

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('2/0', 2/0)
console.log("NaN", Number.NaN, typeof(Number.NaN))
console.log(isNaN(2/0))
console.log(isFinite(2/0))

const strNum = '10'
console.log(strNum + 2)
console.log(parseInt(strNum) + 2)
console.log(+strNum + 2)

console.log(0.4 + 0.2)
console.log(+(0.4 + 0.2).toFixed(1))
console.log(parseFloat((0.4 + 0.2).toFixed(1))) // обрезает всё до 1 знака после запятой и переводит в строку
console.log('===========================')

// BigInt
// Для работы с числами больше чем MAX_SAFE_INTEGER
// Только целые яисла
const notBigNum = 9999999999999999999999999999999
const bigNum = 9999999999999999999999999999999n
console.log(typeof(notBigNum))
console.log(typeof(bigNum))
console.log('===========================')

// Math
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25))
console.log(Math.floor(2.3)) // округление вверх
console.log(Math.ceil(2.3)) // округление вниз
console.log(Math.random()) // рандом находится в классе Math



