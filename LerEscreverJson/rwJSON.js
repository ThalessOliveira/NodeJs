//const fs = require('fs')
import fs from 'fs'

const rwJSON = {
    lerJSON: (arquivo)=>{
        //Lê arquivos de texto de forma síncrona
        let json = fs.readFileSync(arquivo, 'utf8')
        return json
    },
    converterJSON_obj: (json)=>{
        //Converte um string Json em objeto javaScript
        let dados = JSON.parse(json)
        return dados
    },
    converterObj_JSON: (dados)=>{
        //Converte um objeto em uma string Json 
        let json = JSON.stringify(dados)
        return json
    },
    salvarJSON: (json, arquivo)=>{
        //Grava arquivo de texto de forma síncrona
        fs.writeFileSync(arquivo, json)
        console.log('Gravação concluída!')
    }
}


export default rwJSON  //jeito novo

//module.exports = rwJSON