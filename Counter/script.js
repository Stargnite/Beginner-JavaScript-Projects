let count = 0;

const span = document.getElementById("num");
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");

decrease.addEventListener("click", function () {
	count--;
	span.textContent = count;
	if(count < 0) {
		span.style.color = "red";
	}
});

reset.addEventListener("click", function () {
	count = 0;
	span.textContent = count;
	if(count === 0) {
		span.style.color = "#222";
	}
})

increase.addEventListener("click", function () {
	count++;
	span.textContent = count;
	if(count > 0) {
		span.style.color = "green";
	}
})