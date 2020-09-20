const burger = document.querySelector('.humburger');
const navlinks = document.querySelector(".nav-links");

const links = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
	navlinks.classList.toggle("open");
	links.forEach(link => link.classList.toggle("fade"));
});