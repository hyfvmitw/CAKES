let navMain = document.querySelector('.main-nav__list');
let navMainClosed = document.querySelector('.main-nav__list--closed');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('main-nav__list--closed')) {
		navMain.classList.remove('main-nav__list--closed');
		navMain.classList.add('main-nav__list--opened');
	} else {
		navMain.classList.add('main-nav__list--closed');
		navMain.classList.remove('main-nav__list--opened');
	}
});

navToggle.addEventListener('click', function () {
	if (navToggle.classList.contains('main-nav__toggle--closed')) {
		navToggle.classList.remove('main-nav__toggle--closed');
		navToggle.classList.add('main-nav__toggle--opened');
		document.body.classList.toggle('no-scroll');
	} else {
		navToggle.classList.add('main-nav__toggle--closed');
		navToggle.classList.remove('main-nav__toggle--opened');
		document.body.classList.toggle('no-scroll');
	}
});


// function mobileNav() {
// 	// Mobile nav button
// 	const navBtn = document.querySelector('.mobile-nav-btn');
// 	const nav = document.querySelector('.mobile-nav');
// 	const menuIcon = document.querySelector('.nav-icon');

// 	navBtn.onclick = function () {
// 		nav.classList.toggle('mobile-nav--open');
// 		menuIcon.classList.toggle('nav-icon--active');
// 		document.body.classList.toggle('no-scroll');
// 	};
// }

// export default mobileNav;