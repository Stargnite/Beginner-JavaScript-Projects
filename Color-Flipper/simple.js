const color = ["red", "blue", "green", "yellow", "rgba(133, 100, 200)", "#f15025"];

const btn = document.getElementById("btn");
const colorNum = document.querySelector(".color-num");

btn.addEventListener("click", function () {
	const randomNum = getRandomNumber();
	document.body.style.backgroundColor = color[randomNum];
	colorNum.textContent = color[randomNum]
});

function getRandomNumber() {
	return Math.floor(Math.random() * color.length);
}