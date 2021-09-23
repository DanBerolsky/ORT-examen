const { throws } = require('assert');

function parcial(parametro){
    const dir = './files';
    const fs = require('fs');
    
    if(parametro == "count"){
              
        fs.readdir(dir, (err, files) => {
            console.log(files.length);
        });
    }
    else if(parametro == "size"){
        fs.writeFile("summary.txt","```txt\n", (err,data)=>{
            if(err) throw err
            console.log("exito");
            fs.readdir(dir, (err, files) => {
                files.map(x => {
                    let peso = fs.statSync(dir+"/"+x).size
                    fs.appendFile("summary.txt", x+"  "+ peso + "  kb" +"\n", err=>{if(err) throw err} )
                })
            });
        })
    } else if(parametro == "length"){
        fs.writeFile("summary.txt","```txt\n", (err,data)=>{
            if(err) throw err
            console.log("exito");
            fs.readdir(dir, (err, files) => {
                files.map(x => {
                    var data = fs.readFileSync(dir+"/"+x,'utf8');
                    let cantCarateres = data.length
                    fs.appendFile("summary.txt", x+"  "+ cantCarateres + "  chars" +"\n", err=>{if(err) throw err} )
                })
            });
        })
    }
}



parcial(process.argv.splice(2))