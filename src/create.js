
const fs = require("fs");
const path = require("path");
const mkdirp = require('mkdirp');
const getDirName = require('path').dirname;
const config = require(path.join(__dirname, '../config.json'))

function selectTemplate(ppath, tindex) {
    const pa = fs.readdirSync(ppath);
    pa.forEach((ele, index) => {
        if (index === tindex) {
            const templatePath = path.join(__dirname, '../template', ele)
            create(templatePath);
        }
    });
}

function create(fpath) {
    const pa = fs.readdirSync(fpath);
    pa.forEach(ele => {
        const info = fs.statSync(path.join(fpath, ele))
        if (info.isDirectory()) {
            create(path.join(fpath, ele));
        } else {
            dealTemplate(path.join(fpath, ele));
        }
    })
}

function dealTemplate(file) {
    // console.log(file);
    const name = file.match(/template\\\w+\\([\w\W]+)/)[1];
    const des = path.join(config.path, name);
    console.log(des);
    console.log(getDirName(des));
    mkdirp(getDirName(des));
    fs.writeFileSync(des, fs.readFileSync(file));
    
}

const templateRoot = path.join(__dirname, '../template')
selectTemplate(templateRoot, 1);
