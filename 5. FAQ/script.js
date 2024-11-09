// const c = document.getElementsByClassName("c");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const con1 = document.querySelector("#ctn-1");
const con2 = document.querySelector("#ctn-2");
const con3 = document.querySelector("#ctn-3");
const i1 = document.querySelector("#i1");
const i2 = document.querySelector("#i2");
const i3 = document.querySelector("#i3");

btn1.addEventListener("click", () => {
    con1.classList.toggle("active");
    i1.classList.toggle("fa-plus");
    i1.classList.toggle("fa-minus");
})

btn2.addEventListener("click", () => {
    con2.classList.toggle("active");
    i2.classList.toggle("fa-plus");
    i2.classList.toggle("fa-minus");
})

btn3.addEventListener("click", () => {
    con3.classList.toggle("active");
    i3.classList.toggle("fa-plus");
    i3.classList.toggle("fa-minus");
})
