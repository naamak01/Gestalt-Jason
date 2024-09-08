// This function will used to target the hamburger menu
// when you click, it expands to show you it contents.
// When you click again, its collapse
const hamburgerMenu = document.querySelector('.hamburger-icon');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
	hamburgerMenu.classList.toggle('active');
	navMenu.classList.toggle('active');
});

// Corrected selector and added missing toggle for hamburgerMenu
document.querySelectorAll('.nav-menu li a').forEach((link) =>
	link.addEventListener('click', (e) => {
		// e.preventDefault(); // Prevent default action if needed
		hamburgerMenu.classList.remove('active'); // Remove 'active' from hamburgerMenu
		navMenu.classList.remove('active'); // Remove 'active' from navMenu
	})
);
