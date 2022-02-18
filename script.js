// Quando o usuario alterar um valor dentro dos inputs
// a borda respectiva deve alterar a propriedade border-radius pro valor do input
// além disso, o texto do board deve mudar também

let borderTopLeftValue = 0;
const borderTopLeft = document.querySelector("#bordertopleft")
borderTopLeft.addEventListener("keyup",function(event){
    borderTopLeftValue = event.target.value
    renderBorderRadius()
})

let borderTopRightValue = 0;
const borderTopRight = document.querySelector("#bordertopright")
borderTopRight.addEventListener("keyup",function(event){
    borderTopRightValue = event.target.value
    renderBorderRadius()
})

let borderBottomLeftValue = 0;
const borderBottomLeft = document.querySelector("#borderbottomleft")
borderBottomLeft.addEventListener("keyup",function(event){
    borderBottomLeftValue = event.target.value
    renderBorderRadius()
})

let borderBottomRightValue = 0;
const borderBottomRight = document.querySelector("#borderbottomright")
borderBottomRight.addEventListener("keyup",function(event){
    borderBottomRightValue = event.target.value
    renderBorderRadius()
})

function renderBorderRadius(){
    // ``
    const style = ` 
        border-top-left-radius: ${borderTopLeftValue}px;
        border-top-right-radius: ${borderTopRightValue}px;
        border-bottom-left-radius: ${borderBottomLeftValue}px;
        border-bottom-right-radius: ${borderBottomRightValue}px;
    `
    const box = document.querySelector(".box")
    box.setAttribute("style",style)
}