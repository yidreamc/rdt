const fs = require('fs');
const path = require('path');

function dirSet(dir) {
    if (dir) {
        const config = {
            path: dir
        }
        fs.writeFileSync(path.join(__dirname, '../config.json'), JSON.stringify(config));
        console.log('update project path success');
    } else{
       
    }
}


function readDirSync(path) {
    const pa = fs.readdirSync(path);
    let list = '';
    pa.forEach(function (ele, index) {
        list += `${index}: ${ele}\n`
    });
    return list;
}

function newModule(index,name){

}

exports.dirSet = dirSet;
exports.readDirSync = readDirSync;