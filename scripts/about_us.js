import * as navbar from './src/navbar.js';
navbar.init();

const people = {
    Justin: {
        name: 'Justin Yu',
        pfp: '../images/about_us/justin_yu.jpg',
        bio: "Hey! My name is Justin Yu and I am a rising junior at Cupertino High School. I have competed in Public Forum (PF) debate for 2+ years. Currently, I serve as PF Captain for our 30+ member team at my high school responsible for teaching and leading new and experienced debaters to excel at tournaments. My partner (Avy) and I have competed in over a dozen tournaments and have advanced to elimination rounds including at one of the top Public Forum debate camps in the nation. Outside of debate, I am a Boy Scout and served as Senior Patrol Leader of my 40+ member troop. I also enjoy playing basketball, and was selected as Co-Captain of Cupertino JV Basketball."
    },
    Avy: {
        name: 'Avyukth Harish',
        pfp: '../images/about_us/kartik.jpg',
        bio: "Hello, my name is Avy and I am currently a rising junior at Cupertino High School. For the last two years, I have participated as a varsity debate member, competing at both national and district tournaments with my partner, Justin. Throughout our experience as varsity debaters, we have advanced to elimination rounds at numerous tournaments as both JV and Varsity debaters, competing at extremely high levels. Outside of debate, I have enjoyed participating on my school’s robotics team as the elected hardware lead in addition to mentoring a middle school robotics team, both of which have provided me with invaluable leadership experience. I have also served as a troop guide along with Assistant Senior Patrol Leader of my Boy Scout troop for consecutive terms, allowing me to mentor younger scouts and lead meetings consisting of 40+ scouts." 
    },
    Sailesh: {
        name: 'Sailesh Tuplur',
        pfp: '../images/about_us/sailesh.jpg',
        bio: "Hi, I’m Sailesh, and I’m a rising junior at Cupertino High. I’ve done Public Forum (PF) debate for 1 year with Skyler as my partner, and we went undefeated in our second tournament of the year!! I’ve been the Team Manager of Tino FTC Team 7128, where I had to organize meetings and ensure our entire team was on track with our goals. I was also Senior Patrol Leader of Troop 457, where I led troop meetings of 50+ people. Besides Speech and Debate, I also enjoy making puns (it’s a blessing for me but a curse for Justin, Avy, and Skyler), cooking, and spending a concerning amount of money at Main Street. I listen to music a ton, especially The Weeknd and Surfaces, so ask me for song recs!! I’m really excited to help run this camp, so hopefully see you in August :))"
    },
    Skyler: {
        name: 'Skyler Tabofunda',
        pfp: '../images/about_us/henry.png',
        bio: "Hi! I’m Skyler, a rising junior at Cupertino High School. Currently a varsity debater, I’ve accumulated a lot of experience and knowledge since I first started Public Forum two years ago. Some of my notable achievements this year include going 4-0 in CFL Super Debate 1, breaking to double-octos in John Lewis SVUDL after achieving a 5-1 record, and breaking to quarters in SVUDL Ryan Mills. Aside from debate, I’m a member of my school’s FTC robotics team, and love tinkering around with web development, competitive programming, and configuring neovim."
    }
};

console.log("ABOUT US");
const profiles = document.querySelectorAll('.profile')
initProfiles();

function initProfiles() {
    for (let i = 0; i < Object.keys(people).length; i++) {
        let prof = profiles[i];
        let name = Object.keys(people)[i];
        prof.setAttribute('id', name.toLowerCase()+'_prof');

        let nameElem = document.createElement('h3');
        nameElem.classList.add('name');
        nameElem.textContent = people[name].name;

        let pfpElem = document.createElement('img');
        pfpElem.classList.add('pfp');
        pfpElem.src = people[name].pfp;

        let bioElem = document.createElement('p');
        bioElem.classList.add('bio_text');
        bioElem.textContent = people[name].bio;

        prof.appendChild(nameElem);
        prof.appendChild(pfpElem);
        prof.appendChild(bioElem);
    }
}
