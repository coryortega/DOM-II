// Your code goes here


const catImage = document.querySelector(".img-content");

catImage.addEventListener("mouseenter", () => {
  catImage.style.transform = "scale(1.2)";
  catImage.style.transition = "all 0.3s"
})
catImage.addEventListener("mouseleave", () => {
 catImage.style.transform = "scale(1.0)";
 catImage.style.transition = "all 0.3s"
})

const busImage = document.querySelector(".intro");

busImage.addEventListener("click", () => {
    busImage.style.transform = "rotate(36000deg)";
    busImage.style.transition = "all 1s"
})

const changeImg = document.querySelector('.content-destination img');
changeImg.addEventListener("dblclick", () => {
  changeImg.src= "https://cdn.imgbin.com/13/19/18/imgbin-field-trip-student-school-hukoos-family-fun-bus-school-bus-yellow-school-bus-illustration-twVhrLHsvgsNvaXZfzND948uw.jpg";
})

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.destination');
el.onwheel = zoom;


let button = document.querySelector('.btn');
let html = document.querySelector('html');

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

button.onmousedown = function() {
  button.style.backgroundColor = randomColor();
};

button.onauxclick = function(e) {
  e.preventDefault();
  button.style.color = randomColor();
}

button.oncontextmenu = function(e) {
  e.preventDefault();
}

const body = document.querySelector("body")

body.onmousemove = function() {
    body.style.backgroundColor = randomColor();
    body.style.transition = "all 2s"
};



const contentPick = document.querySelector(".content-pick")
contentPick.addEventListener("mouseover", () => {
    contentPick.style.backgroundColor="red";

  const cardGroup = document.querySelector(".destination");
  cardGroup.addEventListener('click', (event) => {
    cardGroup.style.backgroundColor="rebeccapurple";
    event.stopPropagation();
  });

})

document.querySelector(".nav").addEventListener("click", function(event){
    event.preventDefault()
  });