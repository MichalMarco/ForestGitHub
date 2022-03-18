const burgerBtn = document.querySelector('.burger-btn');
const ul = document.querySelector('.nav__items');
const navLiItems = ul.querySelectorAll('li');
const footerYear = document.querySelector('.footer__label-year');



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

burgerBtn.addEventListener('click', showMenu);


