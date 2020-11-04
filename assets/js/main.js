let titleLine = document.getElementById("command-line");
let navbar = document.getElementById("nav-bar");
let navbarList = navbar.children[0];
let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let body = document.querySelector("body");
// let w = window.innerWidth;

function blinkTitleLine(titleLine) {
    setInterval(() => {
        titleLine.classList.add("hide");
        setTimeout(() => {
            titleLine.classList.remove("hide");
        }, 600);
    }, 1200);
}
blinkTitleLine(titleLine);

openBtn.addEventListener("click", () => {
    navbar.style.bottom = "0";
    openBtn.classList.add("hide");
    closeBtn.classList.remove("hide");
    body.classList.add("prevent-scroll");
})

closeBtn.addEventListener("click", () => {
    navbar.style.bottom = "-100vh";
    closeBtn.classList.add("hide");
    openBtn.classList.remove("hide");
    body.classList.remove("prevent-scroll");
})

navbarList.addEventListener("click", () => {
    navbar.style.bottom = "-100vh";
    closeBtn.classList.add("hide");
    openBtn.classList.remove("hide");
    body.classList.remove("prevent-scroll");
})
