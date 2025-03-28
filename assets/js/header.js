document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const icon = hamburger.querySelector("span");

    if (hamburger && menu) {
        hamburger.addEventListener("click", function () {
            menu.classList.toggle("active");
            hamburger.classList.toggle("active");

        
            if (menu.classList.contains("active")) {
                icon.innerHTML = "✖";
            } else {
                icon.innerHTML = "☰";
            }
        });
    } else {
        console.error("Hamburger or Menu element not found!");
    }
});
