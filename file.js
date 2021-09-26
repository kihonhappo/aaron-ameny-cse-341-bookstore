const fs = require('fs');


const fileWriter = (file_type, str, name) => {

    switch(file_type){
        case 'txt':

            break;
        case 'json':

            break;
    }
    fs.writeFileSync(name + '.' + file_type, str);
    return false;
};

module.exports = fileWriter;