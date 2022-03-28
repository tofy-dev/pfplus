const fs = require('fs');
const path = require('path');
const dirPath = path.join(process.cwd(), 'images', 'gallery');

fs.readdir(dirPath, function (err, files) {
    let images = []
    if (err)
        return console.log('Unable to scan directory, PFPlus must be WD. ' + err);
    files.forEach(function (file) {
        images.push("../../images/gallery/"+file);
    });
    images = images.join(" ")

    fs.writeFileSync(path.join(__dirname, 'names.js'),
        `export function listImages() {\n`+
        `    let images = "${images}".split(" ");\n`+
        `    return images;\n`+
        `}`
    );
})