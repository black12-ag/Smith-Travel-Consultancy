// Initialize AOS Animation Library
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Navigation Background on Scroll
const nav = document.querySelector(".glass-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "rgba(255, 255, 255, 0.95)";
    nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
  } else {
    nav.style.background = "rgba(255, 255, 255, 0.85)";
    nav.style.boxShadow = "none";
    nav.style.borderBottom = "1px solid rgba(255,255,255,0.3)";
  }
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");

mobileToggle.addEventListener("click", () => {
  // Simple toggle for now, in a real app would class toggle
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "80px";
    navLinks.style.left = "0";
    navLinks.style.width = "100%";
    navLinks.style.background = "white";
    navLinks.style.padding = "20px";
    navLinks.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    navLinks.style.gap = "20px";
  }
});

// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    // Close mobile menu if open
    if (window.innerWidth <= 900) {
      navLinks.style.display = "none";
    }
  });
});
