//a biblioteca express facilita a criação de um servidor local

//const express = require('express')   jeito antigo

import express from 'express' //importação da lib Express jeito novo (exige configuração o package.json -> "type": "module",)
let app = express() // instância da aplicação do express (ação/como se fossem 2 cliques) (iniciação na memoria RAM)

// OU
// let app = require('express')()
// 
//  ^
//  |
//
//a linha acima pode ser utilizada no lugar das duas (mesma funcionalidade)




    //criando rotas

    //req/res (dados de requisição e resposta)


/*app.get('/usuario', function(req, res){         //rota usuario ('/usuario')
    res.send('<h1>Página de Usuário</h1>')
})

app.get('/sobre', function(req, res){           //rota sobre ('/sobre')
    res.send('<h1>Sobre nós</h1>')              
})

app.get('/', function(req, res){                //rota padrao ('/')
    res.send('<h1>Página Inicial</h1>')
})
*/


//Jeito atual de criar uma função em JavaScript (=>)

app.get('/usuario', (req, res)=>res.send('<h1>Página de Usuário</h1>'))     //uma função com uma instrução com => pode ser removido os {}   
app.get('/sobre', (req, res)=> res.send('<h1>Sobre nós</h1>'))              //uma função com uma instrução com => pode ser removido os {}     
app.get('/', (req, res)=>res.send('<h1>Página Inicial</h1>'))               //uma função com uma instrução com => pode ser removido os {}  
           
//criando servidor local ->

app.listen('3000', function(){  //numero da porta e função de callback (pode ser void, sem retorno)
    console.log(`Servidor rodando: http://localhost:3000`) 
})