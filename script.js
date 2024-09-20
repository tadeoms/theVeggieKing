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

    if (window.innerWidth >= 750) { 
        menuList.style.display = "none";
        menuIcon.style.display = "inline";
        closeIcon.style.display = "none";
    }
}
window.onload = closeMenuOnDesktop;
window.addEventListener("resize", closeMenuOnDesktop);


let images = ["./assets/img/food1.png", "./assets/img/food2.png", "assets/img/food3.png", "assets/img/food4.png"];
let imageIndex = 0; 

function changeImage() {
    let imgElement = document.getElementById("dynamicImage");
    imgElement.src = images[imageIndex];
    imageIndex++;
    if (imageIndex === images.length) {
        imageIndex = 0;
    }
}
changeImage();
setInterval(changeImage, 2000);

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, index * 200); 
    });
});