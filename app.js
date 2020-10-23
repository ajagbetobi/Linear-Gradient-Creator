const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const direction = document.querySelector('.direction')
const submitBtn = document.querySelector('.submitBtn')
const textResult = document.querySelector('.textResult')
const visualResult = document.querySelector('.visualResult')
const randomBtn = document.querySelector('.randomBtn')

let first 
let second
let flow
let newStyle

submitBtn.addEventListener('click', ()=>{
    first  =  extractAndReset(color1)
    second = extractAndReset(color2)
    flow = extractAndReset(direction)
    newStyle =`linear-gradient(${flow}, ${first}, ${second})`
   visualEffects()
})

randomBtn.addEventListener('click' , ()=>{
    randomGeneration()
})

document.addEventListener('keydown',(e)=>{
    const {keyCode}=e
   if (keyCode == 82){
    randomGeneration()
   }
})
function randomGeneration(){
    first =  `#${Math.floor(Math.random()*16777215).toString(16)}`
    second = `#${Math.floor(Math.random()*16777215).toString(16)}`
    flow = `${Math.floor(Math.random() * 360) + 1}deg`
    newStyle =`linear-gradient(${flow}, ${first}, ${second})`
    visualEffects()
}

function visualEffects(){
    textResult.textContent = `background: ${newStyle}`
    visualResult.style.background = `${newStyle}`  
}
function extractAndReset(elem){
    let {value} = elem
    if (value.length == 7) {
        elem.value = '#000000'
    } else elem.value = ''
    return value
}

