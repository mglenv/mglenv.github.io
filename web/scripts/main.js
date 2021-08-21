
var logo = document.getElementById("logo-icon");
var profileIcon = document.getElementById("profile-icon");

document.getElementById("logo-icon").addEventListener("click", function () {
    var icon = document.getElementById("left-side-menu");
    if (icon.classList.contains("side-menu--hidden")) {
        icon.classList.remove("side-menu--hidden");
    }
    else {
        icon.classList.add("side-menu--hidden");
    }
})

document.getElementById("profile-icon").addEventListener("click", function () {
    var icon = document.getElementById("right-side-menu");
    if (icon.classList.contains("side-menu--hidden")) {
        icon.classList.remove("side-menu--hidden");
    }
    else {
        icon.classList.add("side-menu--hidden");
    }
})

