/* ==========================================
            MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const body = document.body;

/* Toggle Menu */

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");

    navLinks.classList.toggle("active");

    body.classList.toggle("menu-open");

});

/* Close Menu on Link Click */

document.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        menuBtn.classList.remove("active");

        navLinks.classList.remove("active");

        body.classList.remove("menu-open");

    });

});

/* Close on Outside Click */

document.addEventListener("click",(e)=>{

    if(
        !menuBtn.contains(e.target) &&
        !navLinks.contains(e.target)
    ){

        menuBtn.classList.remove("active");

        navLinks.classList.remove("active");

        body.classList.remove("menu-open");

    }

});

/* Close on Resize */

window.addEventListener("resize",()=>{

    if(window.innerWidth>992){

        menuBtn.classList.remove("active");

        navLinks.classList.remove("active");

        body.classList.remove("menu-open");

    }

});