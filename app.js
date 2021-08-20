window.addEventListener("load", () => {
	const showMenuBtn = document.querySelector(".hamburger");
	const menu = document.querySelector(".hide-menu");

	showMenuBtn.addEventListener("click", () => {
		menu.classList.toggle("menu");
	});
});
