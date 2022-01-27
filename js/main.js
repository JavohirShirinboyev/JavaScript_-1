const btn1 = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

const textBox = document.querySelector(".text__box");
const lose = document.querySelector(".lose");

const header = document.querySelector(".header");

btn1.addEventListener("click", noHidden)
btn2.addEventListener("click", noHidden)
btn3.addEventListener("click", noHidden)


function noHidden() {
    textBox.classList.remove("onhidden");
    textBox.classList.add("offhidden");
    header.classList.add("blur");
}

lose.addEventListener("click", x);

function x() {
    textBox.classList.remove("offhidden");
    textBox.classList.add("onhidden");
    header.classList.remove("blur");
}