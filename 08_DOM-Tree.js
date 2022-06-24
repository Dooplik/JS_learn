//window.alert('1')
//window.prompt("Ты не бот?")

//const elemH1 = document.getElementById('123')
//const elemH2 = document.getElementsByTagName('h2')[0]
const elemH1 = document.querySelector("#sub") // современный метод
//const elemH2 = document.querySelector('h2') // возвращает первый попавшийся элемент
// для поиска класса нужно использовать точку перед навзанием, наприме ".class-name"
const elemH2 = elemH1.nextElementSibling
const elemH3 = elemH2.nextElementSibling

setTimeout(() => {
    addStylesTwo(elemH1, '2rem', "ЕЖЖЖИ")
}, 2000)

setTimeout(() => {
    addStylesTwo(elemH2, '3rem', "НА ТА ША")
}, 3000)

setTimeout(() => {
    const link = elemH3.querySelector('a')
    addStylesTwo(link, '3rem')
}, 4000)

console.dir(elemH1)
addStylesTwo(elemH1, "ЕЖЖЖИ")
function addStylesTwo(node, fontSize, text = node.textContent) {
    node.style.fontSize = fontSize
    node.textContent = text
    node.style.color = 'orange'
    node.style.textAlign = 'center'
    node.style.background = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
}

// События
// https://developer.mozilla.org/ru/docs/Web/Events

elemH1.onclick = () => {
    const colors = ['red', 'blue', 'red', 'orange', 'white', 'yellow']
    elemH1.style.color = colors[Math.floor(Math.random() * colors.length)]
}

elemH2.addEventListener('dblclick', () => {
    const colors = ['red', 'blue', 'red', 'orange', 'white', 'yellow']
    elemH2.style.color = colors[Math.floor(Math.random() * colors.length)]
})

