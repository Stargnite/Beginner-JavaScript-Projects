const modalBtn = document.querySelector('.open');
const cancel = document.querySelector('.cancel');
const alert = document.querySelector('.pop-up');
const outside = document.querySelector('.outside')

modalBtn.addEventListener('click',  function () {
	alert.classList.remove('no-alert');
	alert.classList.add('alert');
	outside.classList.add('blur')
	
})

cancel.addEventListener('click', function () {
	alert.classList.add('no-alert');
	outside.classList.remove('blur');
})