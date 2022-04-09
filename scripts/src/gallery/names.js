export function listImages() {
    let link = "https://tofy-dev.github.io/pfplus/images/gallery/";
    let images = ["fox.jpg", "house.jpg", "mountains.jpg", "northern-lights.jpg", "san-fran.jpg"];
    for (let img in images) {
        images[img] = link+images[img];
    }
    return images;
}
