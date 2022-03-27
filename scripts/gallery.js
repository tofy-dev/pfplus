import * as dir from '../node_modules/node-dir';

const gallery_cont = document.getElementById('gallery_cont');
const leftArrow = document.getElementById('left_arrow');
const rightArrow = document.getElementById('right_arrow');
const gallery = document.getElementById('gallery')

export function foo() {
    dir.readFiles(__dirname,
        function(err, content, next) {
            if (err) throw err;
            console.log('content:', content);
            next();
        },
        function(err, files){
            if (err) throw err;
            console.log('finished reading files:', files);
        }
    );
}