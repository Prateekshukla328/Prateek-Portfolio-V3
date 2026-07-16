/* ==========================================
            ABOUT PAGE SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
            SCROLL REVEAL
    ========================= */

    const sections = document.querySelectorAll(
        ".about-hero, .journey, .education, .about-skills, .about-vision, .cta"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

    /* =========================
            ACTIVE NAVBAR
    ========================= */

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        if (link.getAttribute("href") === "about.html") {

            link.classList.add("active");

        }

        else {

            link.classList.remove("active");

        }

    });

    /* =========================
            SKILL CARD EFFECT
    ========================= */

    document.querySelectorAll(".skill-card")
    .forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-10px) scale(1.03)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0) scale(1)";

        });

    });

    /* =========================
            JOURNEY CARD EFFECT
    ========================= */

    document.querySelectorAll(".journey-card")
    .forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0)";

        });

    });

    /* =========================
            EDUCATION CARD EFFECT
    ========================= */

    document.querySelectorAll(".education-card")
    .forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.borderColor =
                "var(--primary)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.borderColor =
                "var(--border)";

        });

    });

    /* =========================
            PAGE TITLE
    ========================= */

    console.log(
        "%cAbout Page Loaded Successfully 🚀",
        "color:#3B82F6;font-size:16px;font-weight:bold;"
    );

});