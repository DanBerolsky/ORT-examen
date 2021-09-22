function parcial(parametro){
    const fs = require('fs')
    const dir = './files';
    
    if(parametro == "count"){
              
        fs.readdir(dir, (err, files) => {
        console.log(files.length);
        });
    }

}

parcial(process.argv.splice(2))