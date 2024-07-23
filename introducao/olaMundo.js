// require tem como função importar bibliotecas JS no padrão Common JS
const readline = require('readline')

//readline é um módulo que permite realizar leituras de entradas de console
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

console.log('Olá Mundo!!!')
rl.question('Qual é o seu nome?\n',nome=>{
    console.log(`Olá ${nome}`)
    rl.close()
})
console.log('Olá Turma 36')