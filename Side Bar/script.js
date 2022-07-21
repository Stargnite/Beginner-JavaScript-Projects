const openNav = document.querySelector('.navbar-toggle');
const sideBar = document.querySelector('.sidebar');
const cancel = document.querySelector('.cancel');

openNav.addEventListener('click', function () {
	sideBar.classList.toggle('add-sidebar');

	if (sideBar.classList.contains('remove-sidebar')) {
		sideBar.classList.remove('remove-sidebar')
	}
})

// cancel button's function
cancel.addEventListener('click', function () {
	sideBar.classList.add('remove-sidebar');
})
