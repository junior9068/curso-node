# <center>Curso de Node.js
# O que é Node?
Primeiro é importante falar sobre a linguagem Javascript.

Quando o javascript foi criado, a ideia era dele rodar apenas em navegadores.  A linguagem era limitada apenas para o navegador. Todo navegador tem um interpretador, que é um software que faz o código ser executado no navegador.

<b>O Node é um interpretador Javascript que roda fora dos navegadores.
#
# Módulos

Módulos são partes do programa que são guardados separadamente. Melhora a organização do código entre outros benefícios.

### Utilização:

Para poder utilizar um módulo em outra parte do programa é necessário exportar as funções do módulo antes de utilizar (pode ser exportada de modo individual ou como um objeto).<br>
EX individual: ```module.exports = NomeDaFunção;```<br>
EX objeto: 
```
module.exports = {
    funcao1,
    funcao2,
    funcao3,
    funcao4
}
```

Se faz necessário importar o módulo dentro do arquivo que o irá consumir com o comando require: ``` require("./NomeDoMódulo.js")```

É importante lembrar que é possível fazer essa chamada com uma variável . Ex: ``` var funcao = require("./NomeDoMódulo.js")```. <br>
No caso de ter exportado um objeto é possivel acessar cada item do objeto: 
``` 
var objeto = require("./nomeModulo")
var a = objeto.nomeFuncao
```
#
# HTTP

É um protocolo de transferência de dados na web. Funciona com requisição e resposta.
#
# Express.js e NPM

Express é um framework para desenvolvimento web, backend, para o node.js (tipo um Django do Python). Um framework é basicamente uma super-biblioteca que lhe ajuda a fazer uma tarefa

## NPM 
NPM (Node Package Manager) é o gerenciador de pacotes do Node.

Para instalar um pacote: ```npm install express --save``` (o --save é para salvar este pacote no package.json)

no arquivo package.json ficam todas as informações do projeto. A identidade do projeto está toda lá.

#
# Rota

Caminho que leva a uma determinada página. 

/cadastro

#
# Reiniciando servidor após uma alteração

Para facilitar a reinicialização do servidor após uma alteração é necessário a instalação do pacote _nodemon_ (```npm install nodemon -g```). Depois basta simplesmente chamar o arquivo desta maneira: ``` nodemon <arquivo.js>```
#

# Passagem de Parâmetros

Para passar um parâmetro basta adicionar /: após a rota. (Exemplo de utilização usando o framewor Express - Para mais detalhes veja o arquivo index.js)
EX:  ```cadastro/:parametro1``` 
#
