const { readDirSync } = require('./dir')

const PATH_NUM = 1;
const NEW_NUM = 2;

const MENU = `\
Please select the number of the operation.\n\
${PATH_NUM}.Set project dir\n\
${NEW_NUM}.Create new module from template.\n\
`

const PATH_QUE = '\
Please input the project path\n\
'
const NEW_QUE = '\
Please select the template number\n\
' + readDirSync('../template');

const MODUAL_NAME_QUE = '\
Please input the module name\n\
'
exports.MENU = MENU;

exports.OPTNUM = {
    PATH_NUM,
    NEW_NUM
}
exports.QUE = {
    PATH_QUE,
    NEW_QUE,
    MODUAL_NAME_QUE
}