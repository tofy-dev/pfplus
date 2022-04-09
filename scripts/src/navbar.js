const home = document.getElementById("nav_home");
const about = document.getElementById("nav_about");
const curriculum = document.getElementById("nav_curriculum");
const signupInfo = document.getElementById("nav_signup_info");

function init() {
    let ogDir = "https://tofy-dev.github.io/pfplus/"

    home.addEventListener("click", () => {
        window.open(ogDir+"index.html", "_self");
    });
    about.addEventListener("click", () => {
        window.open(ogDir+"pages/about_us.html", "_self");
    });
    curriculum.addEventListener("click", () => {
        window.open(ogDir+"pages/curriculum.html", "_self");
    });
    signupInfo.addEventListener("click", () => {
        console.log("pressed");
        window.open(ogDir+"pages/signup_info.html", "_self");
    });
}

export { init }
