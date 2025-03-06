// Handle navbar background change on scroll
window.onscroll = function () {
    toggleNavbarBackground();
};

function toggleNavbarBackground() {
    const navbar = document.getElementById("navbar");
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    navbar.style.backgroundColor = scrollTop > 20 ? "black" : "transparent";
}

// Function to open the mobile menu
function openMenu() {
    document.querySelector(".menu").style.top = "0%";
}

// Function to close the mobile menu
function closeMenu() {
    document.querySelector(".menu").style.top = "-100%";
}

// Function to open the login page
function loginOpen() {
    document.querySelector(".login-page").style.top = "15%";
}

// Function to close the login page
function loginClose() {
    document.querySelector(".login-page").style.top = "-100%";
}
