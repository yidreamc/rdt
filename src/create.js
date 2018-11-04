
const fs = require("fs");
const path = require("path");
const mkdirp = require('mkdirp');
const config = require(path.join(__dirname, '../config.json'))



function selectTemplate(ppath, tindex, name) {
    const pa = fs.readdirSync(ppath);
    pa.forEach((ele, index) => {
        if (index === tindex) {
            const info = fs.statSync(path.join(ppath, ele));
            if (info.isDirectory()) {
                const templatePath = path.join(__dirname, '../template', ele);
                create(templatePath, name);
            }

        }
    });
}

function create(fpath, name) {
    const pa = fs.readdirSync(fpath);
    pa.forEach(ele => {
        const info = fs.statSync(path.join(fpath, ele))
        if (info.isDirectory()) {
            create(path.join(fpath, ele), name);
        } else {
            dealTemplate(path.join(fpath, ele), name);
        }
    })
}

function dealTemplate(file, name) {
    // 相对文件名字
    const rename = file.match(/template\\\w+\\([\w\W]+)/)[1].replace(/\$name/g,name);

    // 复制的目的地
    const des = path.join(config.path, rename);
    const basename = path.basename(des);
    mkdirp(path.dirname(des));
    fs.writeFileSync(des, fs.readFileSync(file,'utf-8').replace(/\$\{name\}/g, name));

}

const templateRoot = path.join(__dirname, '../template')
selectTemplate(templateRoot, 1, "Rate");
