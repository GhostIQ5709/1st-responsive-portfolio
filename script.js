// Add active class to nav links on click
document.querySelectorAll('nav a').forEach((link) => {
	link.addEventListener('click', () => {
		link.classList.add('active');
	});
});
