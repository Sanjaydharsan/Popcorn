window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor = "black";
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
    }
}



function openMenu() {

    var menu = document.querySelector(".menu")
    menu.style.top = "0%"
}

function closeMenu(){
    var menu = document.querySelector(".menu")
    menu.style.top = "-100%"

}
function loginOpen(){
    var login = document.querySelector(".login-page")
    login.style.top = "15%"
}

function loginClose(){
    var login = document.querySelector(".login-page")
    login.style.top = "-100%"
}