const toggleBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

// Set copyright date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();



// Toggle Nav bar dynamically
toggleBtn.addEventListener('click', () => {
	// linksContainer.classList.toggle('open-nav');
	const containerHeight = linksContainer.getBoundingClientRect().height;
	const linksHeight = links.getBoundingClientRect().height;

	if(containerHeight === 0) {
		linksContainer.style.height = `${linksHeight}px`
	} else {
		linksContainer.style.height = 0;
	}
})

const navBar = document.querySelector('.nav');
const topLink = document.querySelector('.top-link');
// fixed nav bar at top
window.addEventListener('scroll', function() {
	const scrollHeight = window.pageYOffset;
	const navHeight = navBar.getBoundingClientRect().height;
	if(scrollHeight > navHeight) {
		navBar.classList.add('fixed-nav');
	} else {
		navBar.classList.remove('fixed-nav');
	}

	if(scrollHeight > 500) {
		topLink.classList.add('show-link')
	} else {
		topLink.classList.remove('show-link')

	}
	
})

// ******* For Smooth Scroll ********
// links Selections
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(btn) {
	btn.addEventListener('click', function(e) {
	e.preventDefault();
	// navigate to section
		const id = e.currentTarget.getAttribute("href").slice(1);
		const element = document.getElementById(id);
		console.log(element)

		// calculating the height
		const navHeight = navBar.getBoundingClientRect().height;
		const containerHeight = linksContainer.getBoundingClientRect().height;
		const fixedNav = navBar.classList.contains('fixed-nav');
		let position = element.offsetTop - navHeight;

		if(!fixedNav) {
			position = position - navHeight;
		}
		if(navHeight > 82) {
			position = position + containerHeight;
		}

		console.log(position)
		window.scrollTo({
			left: 0,
			top: position,
		});
		linksContainer.style.height = 0;
	})
})
