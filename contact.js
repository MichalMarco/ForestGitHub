const burgerBtn = document.querySelector('.burger-btn');
const ul = document.querySelector('.nav__items');
const navLiItems = ul.querySelectorAll('li');

const footerYear = document.querySelector('.footer__label-year');

const contactSendBtn = document.querySelector('.contact__form-btn');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const textArea = document.querySelector('#msg');

const showMenu = () => {
	ul.classList.toggle('nav__items--active');
	navLiItems.forEach((item) => {
		item.addEventListener('click', showMenu);
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.textContent = year + ' ';
};
handleCurrentYear();

const sendEmail = (e) => {
	e.preventDefault();

	if (
		nameInput.value !== '' &&
		emailInput.value !== '' &&
		textArea.value !== ''
	) {
		confirm('Twój email został wysłany');
		nameInput.value = '';
		emailInput.value = '';
		textArea.value = '';
	} else {
		alert('Wypełnij wszystkie pola!');
	}
};

burgerBtn.addEventListener('click', showMenu);
contactSendBtn.addEventListener('click', sendEmail);
