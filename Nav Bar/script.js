const navToggle = document.querySelector('.btn');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
	console.log(links.classList)

	if(links.classList.contains('event')) {
		links.classList.remove('event')
		links.classList.add('links')
	} else {
	links.classList.add('event')
	links.classList.remove('links')
	}
})