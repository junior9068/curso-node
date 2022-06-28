const express = require("express") // Importando o express

const app = express() // Iniciando o express

//Rotas
app.get("/", function(req, res){
    //req = São os dados enviados pelo usuário
    //res = Resposta que vai ser enviada para o usuário
    res.send("HOME!")
});

app.get("/blog", function(requisicao, resposta){
    nome = requisicao.query["nome"]
    resposta.send("BEM VINDO AO MEU BLOG - "+ nome)
});

app.get("/canal/youtube", function(requisicao, resposta){
    resposta.send("BEM VINDO AO MEU CANAL")
});

//Passar parametros pela URL:
app.get("/nome/:nome?", function(req, res){
     //req = São os dados enviados pelo usuário
    //res = Resposta que vai ser enviada para o usuário
    var nome = req.params.nome
    if (nome == undefined){
        res.send(`Você é um anonymus`)
    }else{
        res.send(`Seu nome é: ${nome}`)
    }
});

//Inicia o servidor
app.listen(8000,function(erro){
    if (erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
}) 