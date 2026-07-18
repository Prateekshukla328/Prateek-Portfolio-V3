/* ==========================================================
        DEVELOPER DIARY
        Version 1.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
        READING PROGRESS
    =========================== */

    const progressBar = document.querySelector(".reading-progress");

    function updateReadingProgress() {

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (scrollTop / documentHeight) * 100;

        progressBar.style.width = progress + "%";
    }

    window.addEventListener("scroll", updateReadingProgress);

    updateReadingProgress();


    /* ===========================
        SCROLL ANIMATION
    =========================== */

    const animatedElements =
        document.querySelectorAll(
            ".learning-card,.intro-card,.sidebar-card,.author-note,.next-article"
        );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    animatedElements.forEach(el => {

        observer.observe(el);

    });


    /* ===========================
        PRINT ARTICLE
    =========================== */

    const printButton =
        document.getElementById("print-article");

    if (printButton) {

        printButton.addEventListener("click", () => {

            window.print();

        });

    }


    /* ===========================
        COPY LINK
    =========================== */

    const copyButton =
        document.getElementById("copy-link");

    if (copyButton) {

        copyButton.addEventListener("click", () => {

            navigator.clipboard.writeText(window.location.href);

            copyButton.innerHTML =
                '<i class="fa-solid fa-check"></i> Copied';

            setTimeout(() => {

                copyButton.innerHTML =
                    '<i class="fa-solid fa-link"></i> Copy Link';

            }, 2000);

        });

    }


    /* ===========================
        READING TIME
    =========================== */

    const article =
        document.querySelector(".diary-article");

    const readingElement =
        document.querySelector(".reading-time");

    if (article && readingElement) {

        const words =
            article.innerText.trim().split(/\s+/).length;

        const minutes =
            Math.max(1, Math.ceil(words / 200));

        readingElement.textContent =
            minutes + " min read";

    }


    /* ===========================
        ACTIVE TIMELINE
    =========================== */

    const timelineItems =
        document.querySelectorAll(".timeline li");

    timelineItems.forEach(item => {

        item.addEventListener("click", () => {

            timelineItems.forEach(i =>
                i.classList.remove("active")
            );

            item.classList.add("active");

        });

    });

});

/* ==========================================================
        END
========================================================== */