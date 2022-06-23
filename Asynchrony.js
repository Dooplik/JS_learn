// Event Loop

const timeout = setTimeout(() => {
    clearTimeout(timeout)
    console.log('After timeout')
}, 2500)

const interval = setInterval(() => {
    clearInterval(interval)
    console.log('After interval')
}, 1000)

const delay = (callback, milis=1000) => {
    setTimeout(callback, milis)
}

delay(() => {
    console.log("After two seconds")
}, 2000)

const delay1 = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            // reject("Что-то пошло не так") // для ошибочек в консоли
        }, wait)
    })
    return promise
}
delay1(2500)
    .then(() => {
        console.log("After 2.5 seconds")
    })
    .catch((err) => {
        console.log("ERROR", err)
    }) // сюда заходит если видит ошибку
    .finally(() => {
        console.log("Finally")
    })
// тема какая-то непонятная так что надо разбираться глубже