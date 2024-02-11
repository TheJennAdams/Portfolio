const red = 181;
const green = 236;
const blue = 255;

// rgb(239,200,201)

const header = document.getElementById("header");
console.log(header.innerText);

function changeColor () {

const scrollFactor = 1.5 + window.scrollY / 1000;

const r = red / scrollFactor;
const g = green / scrollFactor;
const b = blue / scrollFactor;

const updatedColor = `rgb(${r}, ${g}, ${b})`;

header.style.backgroundColor = updatedColor;
}

changeColor()

window.addEventListener('scroll', changeColor)
