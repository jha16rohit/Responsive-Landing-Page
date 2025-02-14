document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.2)";
        });
        link.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
