import * as names from './names.js'

const gallery_cont = document.getElementById('gallery_cont');

const gallery = document.getElementById('gallery')
const leftArrow = document.getElementById('left_arrow');
const rightArrow = document.getElementById('right_arrow');

let imageList = [];
let activeImg;

function init() {
    preloadImages();
    updateImg(0);
    console.log(imageList.indexOf(activeImg));
    leftArrow.addEventListener("click", () => {
        let newNum = imageList.indexOf(activeImg)-1;
        newNum = (newNum < 0) ? imageList.length-1 : newNum;
        updateImg(newNum);
    })
    rightArrow.addEventListener("click", () => {
        let newNum = imageList.indexOf(activeImg)+1;
        newNum = (newNum > imageList.length-1) ? 0 : newNum;
        updateImg(newNum)
    })
}

function preloadImages() {
    let preloaded = names.listImages();
    for (let img in preloaded) {
        let newImg = new Image();
        newImg.src = preloaded[img];

        newImg.classList.add('preloading_image');
        imageList.push(newImg);
        gallery.appendChild(newImg);
    }
    document.querySelectorAll('.preloading_image').forEach(img => {
        img.addEventListener("load", () => {
            img.style.display = "none";
        })
    })
}

function updateImg(imgNum) {
    activeImg = imageList[imgNum];
    gallery.style.backgroundImage = `url(${activeImg.src})`;
    console.log(activeImg);
}

export {init}
