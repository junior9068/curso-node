var http = require("http")

http.createServer(function(requisicao,resposta){
    resposta.end("<h1>Bem vindo!</h1>")
}).listen(9000);
