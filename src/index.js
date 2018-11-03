const welcome = require('./welcome');
const { dirSet } = require('./dir')
const readlineSync = require('readline-sync');


const { MENU, QUE, OPTNUM } = require('./question')

welcome();


const opt = readlineSync.question(MENU);

switch(Number(opt)){
    case OPTNUM.PATH_NUM:
        const dir = readlineSync.question(QUE.PATH_QUE);
        dirSet(dir)
        break;
    case OPTNUM.NEW_NUM:
        const proNum = readlineSync.question(QUE.NEW_QUE);
        const name = readlineSync.question(QUE.MODUAL_NAME_QUE);
        break;
    default:
        console.log('输入有误');
}