const months = [
	"January",
	"Feburary",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const numbers = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// const futureDate = new Date(2022, 7, 4, 12, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 30, 0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month]

let day = futureDate.getDay();
day = weekdays[day]

const date = futureDate.getDate();

giveaway.textContent = `Giveaway ends on ${day}, ${month} ${year} ${hours}:${mins}am`

// future time in milliseconds

const futureTime = futureDate.getTime();

function getRemainingTime() {
	const today = new Date().getTime();
	const t = futureTime - today;

	// 1s = 1000ms
	// 1min = 60s
	// 1hr = 60min
	// 1d = 24hr

	// to miliseconds
	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMin = 60 * 1000;

	// calculating the value
	let days = Math.floor(t / oneDay);
	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMin);
	let seconds = Math.floor((t % oneMin) / 1000);

	// inputing Values Into HTML
	const values =[days, hours, minutes, seconds];

	function numberFormat(number) {
		if(number < 10) {
			return number = `0${number}`
		} 
		return number;
	}


	numbers.forEach(function(number, index) {
		number.innerHTML = numberFormat(values[index]);
	})
	if(t < 0) {
		clearInterval(countdown);
		deadline.innerHTML = `<h4 class="expired"> Sorry, this giveaway has ended.</h4>`
	}
}

// continuous countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();