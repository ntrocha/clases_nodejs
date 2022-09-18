const colors = require('colors');
const fs = require('fs');
const creador = async (a = 5, l, h) => {
    try{

    let salida = '';
    let consola = '';
    for (i=1; i <= h; i++){
        salida += `${a} x ${i}= ${a*i}\n`;
        consola += `${colors.cyan(a)} ${'x'.red} ${colors.cyan(i)}${'='.red} ${colors.cyan(a*i)}\n`;
    }
    if ( l ){  
        console.log(`====================`.yellow);
        console.log(`   Tabla del ${colors.green(a)}`.yellow);
        console.log(`====================`.yellow);
        console.log(consola);
    } else {
        console.log(`lista inhabilitada`.red);
    }
    fs.writeFileSync(`./salida/tabla_${a}.txt`, salida);
        return (`tabla_${a}.txt`);
    
    } catch (error){
        throw error;

    }
}
    module.exports = {
         creador
    }