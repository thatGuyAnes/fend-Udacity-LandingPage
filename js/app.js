/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

const sectionList = document.querySelectorAll('.content__section');

window.addEventListener('scroll', (e) => {
	for (section of sectionList) {
		let position = section.getBoundingClientRect().top;
		if (
			position < (window.innerHeight * 40) / 100 &&
			position > (-window.innerHeight * 50) / 100
		) {
			section.style.border = '1px solid red';
		} else {
			if (section.style.border) {
				section.style.border = '';
			}
		}
	}
});

// Changing the header's background color depending on its scroll position.
const header = document.querySelector('.header');
window.addEventListener('scroll', (e) => {
	if (window.pageYOffset >= (window.innerHeight * 40) / 100) {
		header.classList.remove('at-the-top');
	} else {
		header.classList.add('at-the-top');
	}
});

// Toggling the active class for the nav items.
const menuList = document.querySelector('.menu-list');
const menuChildrenList = menuList.children;
const removeActiveClassFromLinks = (list) => {
	for (let item of list) {
		item.children[0].classList.remove('header__link--active');
	}
};

const onMenuItemClick = (event) => {
	if (event.target.nodeName === 'A') {
		removeActiveClassFromLinks(menuChildrenList);
		event.target.classList.add('header__link--active');
	}
};
menuList.addEventListener('click', onMenuItemClick);

// Hiding the navigation menu when not scrolling.
const toggleNav = () =>
	header.classList.toggle('header--hidden', 'header--visible');
let scrollTimeoutId;
const clearScrollTimer = () => clearTimeout(scrollTimeoutId);
// Stopping the timeout when mouse over menu(before it hides).
header.addEventListener('mouseover', () => clearScrollTimer());
// Restarting timeout when mouse leaves menu.
header.addEventListener('mouseleave', () => {
	// Check if not at the top of the page.
	if (window.scrollY) {
		scrollTimeoutId = setTimeout(toggleNav, 2000);
	}
});

document.addEventListener('scroll', () => {
	if (window.scrollY === 0) {
		clearScrollTimer();
	} else {
		// Brings back the menu on scroll.
		header.classList.remove('header--hidden');
		header.classList.add('header--visible');
		// Clear the timer.
		clearScrollTimer();
		// Activates scroll timer if its not active.
		scrollTimeoutId = setTimeout(toggleNav, 2000);
	}
});
