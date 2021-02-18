const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
let length = colors.length;

btn.addEventListener("click", function () {
    let randomColor = Math.floor(Math.random() * length);
    document.body.style.backgroundColor = colors[randomColor];
    document.querySelector(".color").textContent=colors[randomColor];

});