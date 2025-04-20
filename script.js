// Toggling the naivation menu

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("open");
});

const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

const saved = localStorage.getItem("theme");
const img = toggle.querySelector("img");
if (saved) {
  console.log("Saved theme:", saved);
  root.setAttribute("data-theme", saved);
  if (saved === "dark") {
    img.src = "sun.png";
  }
  if (saved === "light") {
    img.src = "moon.png";
  }
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.setAttribute("data-theme", "dark");
  img.src = "sun.png";
} else {
  root.setAttribute("data-theme", "light");
  img.src = "moon.png";
}

toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  // console.log("Switching theme to", next);
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
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
