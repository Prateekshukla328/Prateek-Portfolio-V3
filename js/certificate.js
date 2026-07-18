/* ==========================================================
            CERTIFICATE
            Version 1.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
                IMAGE PREVIEW
    ========================================== */

    const images =
        document.querySelectorAll(".certificate-image img");

    const body =
        document.body;

    const lightbox =
        document.createElement("div");

    lightbox.className = "certificate-lightbox";

    lightbox.innerHTML = `

        <span class="close-lightbox">&times;</span>

        <img src="" alt="Certificate">

    `;

    body.appendChild(lightbox);

    const previewImage =
        lightbox.querySelector("img");

    const closeButton =
        lightbox.querySelector(".close-lightbox");

    images.forEach(image => {

        image.addEventListener("click", () => {

            previewImage.src = image.src;

            previewImage.alt = image.alt;

            document.getElementById("certificate-title").innerText =
image.alt;

            lightbox.classList.add("active");

            body.style.overflow = "hidden";

        });

    });

    closeButton.addEventListener("click", closePreview);

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            closePreview();

        }

    });

    function closePreview() {

        lightbox.classList.remove("active");

        body.style.overflow = "";

    }

    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {

            closePreview();

        }

    });

    /* ==========================================
                SCROLL ANIMATION
    ========================================== */

    const cards =
        document.querySelectorAll(".certificate-card,.journey-card");

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {

            threshold:0.15

        });

    cards.forEach(card => {

        observer.observe(card);

    });

    /* ==========================================
            BUTTON RIPPLE EFFECT
    ========================================== */

    document.querySelectorAll(".certificate-buttons a")
        .forEach(button => {

            button.addEventListener("click", function(e){

                const circle =
                    document.createElement("span");

                const size =
                    Math.max(this.clientWidth,this.clientHeight);

                circle.style.width = size + "px";

                circle.style.height = size + "px";

                circle.classList.add("ripple");

                this.appendChild(circle);

                setTimeout(()=>{

                    circle.remove();

                },600);

            });

        });

});