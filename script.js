const toggleMenuButton = document.getElementById("toggle-menu");
const sidebar = document.getElementById("sidebar");
const mainContent = document.querySelector("main");

// Mostrar/ocultar el menú lateral
toggleMenuButton.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    if (sidebar.classList.contains("hidden")) {
        mainContent.style.marginLeft = "0";
    } else {
        mainContent.style.marginLeft = "250px";
    }
});

// Mostrar/ocultar secciones
const menuButtons = document.querySelectorAll(".menu button");
const sections = document.querySelectorAll(".section");
const inicioSection = document.getElementById("inicio");

menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        if (targetSection.classList.contains("active")) {
            sections.forEach((section) => section.classList.remove("active"));
            inicioSection.classList.add("active");
        } else {
            sections.forEach((section) => section.classList.remove("active"));
            targetSection.classList.add("active");
        }
    });
});
