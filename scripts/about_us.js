import * as navbar from './src/navbar.js';
navbar.init();

const people = {
    'Justin': '../images/about_us/justin_yu.jpg',
    'Avy': '../images/about_us/kartik.jpg',
    'Sailesh': '../images/about_us/sailesh.jpg',
    'Skyler': '../images/about_us/henry.png'
};

console.log("ABOUT US");
const profiles = document.querySelectorAll('.profile')
initProfiles();

function initProfiles() {
    for (let i = 0; i < Object.keys(people).length; i++) {
        console.log(i);
        let currentProf = profiles[i];

        let name = document.createElement('h3');
        name.classList.add('name');
        name.textContent = Object.keys(people)[i];

        let pfp = document.createElement('img');
        pfp.classList.add('pfp');
        pfp.src = Object.values(people)[i];

        let introText = document.createElement('p');
        introText.classList.add('intro_text');
        introText.textContent = "Hello, world!";

        currentProf.appendChild(name);
        currentProf.appendChild(pfp);
        currentProf.appendChild(introText);
    }
    console.log("ping!");
}