const btn1 = document.querySelector(".decrease");
const btn2 = document.querySelector(".increase");
const btn3 = document.querySelector(".reset");

btn1.addEventListener('click', function () {
    let number = Number(document.getElementById('value').innerText);
    number--;
    document.getElementById('value').innerText = String(number);
});
btn2.addEventListener('click', function () {
    let number = Number(document.getElementById('value').innerText);
    number++;
    document.getElementById('value').innerText = String(number);
});
btn3.addEventListener('click', function () {
    let number = Number(document.getElementById('value').innerText);
    number = 0;
    document.getElementById('value').innerText = String(number);
});