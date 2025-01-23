const toggleMenuButton = document.getElementById("toggle-menu");
const sidebar = document.getElementById("sidebar");
const main = document.querySelector("main");
const licenciaturaButtons = document.querySelectorAll(".licenciatura-btn");

// Alternar el menú lateral y ajustar el espacio
toggleMenuButton.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    main.style.marginLeft = sidebar.classList.contains("hidden") ? "0" : "250px";
});

// Botones de licenciaturas
licenciaturaButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const desc = button.nextElementSibling;
        desc.style.display = desc.style.display === "block" ? "none" : "block";
    });
});
