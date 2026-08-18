// ========================================
// MOBILE MENU
// ========================================

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
	nav.classList.toggle("active");
});

// Закрываем меню после перехода

document.querySelectorAll(".nav a").forEach((link) => {
	link.addEventListener("click", () => {
		nav.classList.remove("active");
	});
});

// ========================================
// HEADER ON SCROLL
// ========================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
	if (window.scrollY > 50) {
		header.style.background = "rgba(16, 25, 21, .94)";
		header.style.backdropFilter = "blur(12px)";
	} else {
		header.style.background = "transparent";
		header.style.backdropFilter = "none";
	}
});

// ========================================
// FORM
// ========================================

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const button = form.querySelector("button");

	button.innerHTML = "Заявка отправлена ✓";
	button.style.background = "#17221e";
	button.style.color = "#fff";

	form.reset();
});

// ========================================
// SCROLL REVEAL
// ========================================

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = "1";
				entry.target.style.transform = "translateY(0)";

				observer.unobserve(entry.target);
			}
		});
	},
	{
		threshold: 0.1,
	},
);

document
	.querySelectorAll(
		".education-card, .teacher, .stat, .about__image, .about__content",
	)
	.forEach((element) => {
		element.style.opacity = "0";
		element.style.transform = "translateY(25px)";
		element.style.transition = "opacity .7s ease, transform .7s ease";

		observer.observe(element);
	});
