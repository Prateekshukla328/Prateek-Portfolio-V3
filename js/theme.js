/* ==========================================
        PORTFOLIO V3 THEME
========================================== */

const themeButton = document.getElementById("theme-toggle");

/* Current Theme */

function getCurrentTheme() {

    return document.body.classList.contains("light")
        ? "light"
        : "dark";

}

/* Apply Theme */

function applyTheme(theme) {

    if (theme === "light") {

        document.body.classList.add("light");

        if (themeButton) {

            themeButton.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        }

    }

    else {

        document.body.classList.remove("light");

        if (themeButton) {

            themeButton.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    }

}

/* Load Saved Theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {

    applyTheme(savedTheme);

}

else {

    if (window.matchMedia("(prefers-color-scheme: light)").matches) {

        applyTheme("light");

    }

    else {

        applyTheme("dark");

    }

}

/* Toggle Theme */

if (themeButton) {

    themeButton.addEventListener("click", () => {

        let nextTheme =
            getCurrentTheme() === "dark"
            ? "light"
            : "dark";

        applyTheme(nextTheme);

        localStorage.setItem("theme", nextTheme);

    });

}

/* Listen System Theme */

window.matchMedia("(prefers-color-scheme: dark)")
.addEventListener("change", (e)=>{

    if(!localStorage.getItem("theme")){

        if(e.matches){

            applyTheme("dark");

        }

        else{

            applyTheme("light");

        }

    }

});