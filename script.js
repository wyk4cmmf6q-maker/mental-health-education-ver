const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const menuLinks = document.querySelectorAll(".side-menu a");

menuButton.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("open");
  });
});

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -40px 0px"
  }
);

fadeElements.forEach((element) => {
  observer.observe(element);
});