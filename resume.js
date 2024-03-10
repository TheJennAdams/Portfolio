const red = 181;
const green = 236;
const blue = 255;

const header = document.getElementById("header");

function changeColor () {

const scrollFactor = 1 + window.scrollY / 1000;

const r = red / scrollFactor;
const g = green / scrollFactor;
const b = blue / scrollFactor;

const updatedColor = `rgb(${r}, ${g}, ${b})`;

header.style.backgroundColor = updatedColor;

const image = document.querySelector(".profilepic")

// if (window.scrollY > 0 ) {
//     header.style.height= "100px";
// }

// else {
//     header.style.height= "381px";
// }
}

console.log(window.scrollY)

// changeColor()

window.addEventListener('scroll', changeColor)

// changeSize()