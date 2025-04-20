// Toggling the naivation menu

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("open");
});

// Toggle between light and dark mode

const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

const saved = localStorage.getItem("theme");
if (saved) {
  root.setAttribute("data-theme", saved);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.setAttribute("data-theme", "dark");
}

toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  // console.log("Switching theme to", next);
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  const img = toggle.querySelector("img");
  if (next === "dark") {
    img.src = "sun.png";
  }
  if (next === "light") {
    img.src = "moon.png";
  }
});

// JS for the feeback form rating
const r = document.getElementById("fb-rating");
r.addEventListener(
  "input",
  () => (document.getElementById("ratingValue").textContent = r.value)
);
