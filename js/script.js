/* ==========================================
            PORTFOLIO V3 SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
            LOADER
    ========================= */

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        if (loader) {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

            setTimeout(() => {

                loader.remove();

            }, 500);

        }

    });

    /* =========================
            TYPING EFFECT
    ========================= */

    const typing = document.getElementById("typing");

    const words = [

        "Java Developer",

        "Full Stack Developer",

        "Founder @ Shuprama Kitchen",

        "Problem Solver"

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;

    function type() {

        if (!typing) return;

        const currentWord = words[wordIndex];

        if (!deleting) {

            typing.textContent =
                currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(type, 1400);

                return;

            }

        }

        else {

            typing.textContent =
                currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(type, deleting ? 40 : 90);

    }

    type();

    /* =========================
            COUNTER
    ========================= */

    const counters =
        document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target =
            +counter.dataset.target;

        let count = 0;

        const update = () => {

            count += Math.ceil(target / 80);

            if (count >= target) {

                counter.innerText = target;

            }

            else {

                counter.innerText = count;

                requestAnimationFrame(update);

            }

        };

        update();

    });

    /* =========================
            SCROLL REVEAL
    ========================= */

    const hidden =
        document.querySelectorAll("section");

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {

            threshold: 0.15

        });

    hidden.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

    /* =========================
            ACTIVE NAVBAR
    ========================= */

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top =
                section.offsetTop - 150;

            if (window.scrollY >= top) {

                current =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });

});