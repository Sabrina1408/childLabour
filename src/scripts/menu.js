let btnMobile = document.querySelector("#btnMobile");
let btnMobileLiA = document.querySelectorAll(".btn-mobile-li-a");
let header = document.querySelector("#header");
let body = document.querySelector("body");


btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("click", fixed);
function fixed () {
    const active = nav.classList.contains("active");
    if(active){
        body.style.position = "fixed";
    } else {
        body.style.position = "static";
    }
}
function toggleMenu(event) {
    let nav = document.querySelector("#nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if(active){
        event.currentTarget.setAttribute("aria-label", "Fechar menu");
        arrayLiAs = Array.from(btnMobileLiA);
        arrayLiAs.forEach(liA => {
            liA.addEventListener("click", toggleMenu);
        });
    } 
    else {
        event.currentTarget.setAttribute("aria-label", "Abrir menu");
        body.style.position = "static";
    }
}