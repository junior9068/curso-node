const express = require("express") // Impostando o express

const app = express() // Iniciando o express

//Rotas
app.get("/", function(req, res){
    //req = São os dados enviados pelo usuário
    //res = Resposta que vai ser enviada para o usuário
    res.send("HOME!")
});

app.get("/blog", function(requisicao, resposta){
    resposta.send("BEM VINDO AO MEU BLOG")
});

app.get("/canal/youtube", function(requisicao, resposta){
    resposta.send("BEM VINDO AO MEU CANAL")
});

//Passar parametros pela URL:
app.get("/nome/:nome", function(req, res){
     //req = São os dados enviados pelo usuário
    //res = Resposta que vai ser enviada para o usuário
    var nome = req.params.nome
    res.send(`Seu nome é: ${nome}`)
});

//Inicia o servidor
app.listen(8000,function(erro){
    if (erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
}) 