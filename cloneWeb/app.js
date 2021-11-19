let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");

menuIcon.addEventListener("click", onclick);
function onclick() {
    sidebar.classList.toggle("small-sidebar");
    // add a class to container for menu-icon
    container.classList.toggle("large-container");
}










