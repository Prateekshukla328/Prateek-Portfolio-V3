/* =========================================================
                CONTACT PAGE SCRIPT
                Portfolio V3
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
            SCROLL REVEAL
    ========================================== */

    const sections = document.querySelectorAll(
        ".contact-hero, .contact-section, .cta"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold:0.15

    });

    sections.forEach(section=>{

        section.classList.add("hidden");

        observer.observe(section);

    });

    /* ==========================================
            CONTACT CARD EFFECT
    ========================================== */

    document.querySelectorAll(".contact-card")
    .forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-10px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0)";

        });

    });

    /* ==========================================
            ACTIVE NAVIGATION
    ========================================== */

    document.querySelectorAll(".nav-links a")
    .forEach(link=>{

        if(link.getAttribute("href")==="contact.html"){

            link.classList.add("active");

        }

    });

    /* ==========================================
            PAGE LOADED
    ========================================== */

    console.log(

        "%cContact Page Loaded Successfully 🚀",

        "color:#2563EB;font-size:16px;font-weight:bold;"

    );

});