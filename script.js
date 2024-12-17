let leftSidebar = document.querySelector('.left-sidebar');
let menuOpen = false;
function closeMenu() {
    menuOpen = false;
    leftSidebar.style.transform = "translateX(-100%)";
}
function openMenu() {
    if (menuOpen == false) {
        leftSidebar.style.transform = "translateX(0px)";
        menuOpen = true;
    }
    else if(menuOpen==true){
        leftSidebar.style.transform = "translateX(-100%)";
        menuOpen = false;
    }
}