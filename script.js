function toggleMenu() {
    let menuIcon = document.getElementById("menuIcon");
    let closeIcon = document.getElementById("closeIcon");
    let menuList = document.getElementById("menuList");

    if (menuList.style.display === "none") {
        menuList.style.display = "block";
        menuIcon.style.display = "none";
        closeIcon.style.display = "inline";
    } else {
        menuList.style.display = "none";
        menuIcon.style.display = "inline";
        closeIcon.style.display = "none";
    }
}
function closeMenu() {
    let menuList = document.getElementById("menuList");
    let menuIcon = document.getElementById("menuIcon");
    let closeIcon = document.getElementById("closeIcon");

    menuList.style.display = "none";
    menuIcon.style.display = "inline";
    closeIcon.style.display = "none";
}
function closeMenuOnDesktop() {
    let menuIcon = document.getElementById("menuIcon");
    let closeIcon = document.getElementById("closeIcon");
    let menuList = document.getElementById("menuList");

    if (window.innerWidth >= 768) { 
        menuList.style.display = "none";
        menuIcon.style.display = "inline";
        closeIcon.style.display = "none";
    }
}
window.onload = closeMenuOnDesktop;
window.addEventListener("resize", closeMenuOnDesktop);
