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

Express é um framework para desenvolvimento web, backend, para o node.js (tipo um Django do Python). Um framework é basicamente uma super-biblioteca que lhe ajuda a fazer uma tarefa.


## NPM 
NPM (Node Package Manager) é o gerenciador de pacotes do Node.

Para instalar um pacote: ```npm install express --save``` (o --save é para salvar este pacote no package.json)

no arquivo package.json ficam todas as informações do projeto. A identidade do projeto está toda lá.

## Criando uma aplicação com Express

Após a instalação do Express com o NPM crie um arquivo chamado index.js:

```javascript
const express = require("express") // Importando o express

const app = express() // Iniciando o express

//Rotas
app.get("/", function(req, res){
    //req = São os dados enviados pelo usuário
    //res = Resposta que vai ser enviada para o usuário
    res.send("HOME!")
});

//Inicia o servidor
app.listen(8000,function(erro){// 8000 é a porta que o servidor vai subir
    if (erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
}) 

```
PS: Para mais informações veja o arquivo index.js
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

Parâmetro não obrigatório (só adicionar uma ? no final do nome do parâmetro):
EX: ```cadastro/:parametro2?``` 
#

# Query Params

É um tipo de parâmetro que não é fixo na rota. O usuário passa o nome e o valor do parametro na url. É completamente opcional, considerando que é o próprio usuário que passará esses dados. 

EX: 

```javascript
//Na URL:
cadastro?nome=edilson
//Na função
nome = req.query["nome"] //query é um array com os parametros

``` 
#
# MySQL
## Mostrando todos bancos de dados:
show databases;
## Criando banco de dados:

create database sistemaDeCadastro;

## Acessando um banco:

use sistemaDeCadastro

## Mostrando Tabelas:

show tables;

## Criando uma tabela;

Em banco de dados as tabelas funcionam com colunas e linhas, como numa planilha de excel. Cada coluna deve ter a informação de que tipo de dado a mesma deverá receber, a quantidade de caracteres e etc. Abaixo estão os tipos de dados mais utilizados:

INT - Para inteiros <br>
VARCHAR - Para texto <br>
FLOAT - Para números quebrados <br>

Segue exemplo de criação de tabela:

```mysql
create table usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);
```
Para ver a estrutura da tabela digite: describe [nome da tabela]

# INSERT, SELECT E WHERE

## INSERT - 

```
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Edilson Junior",
    "edilson@gmail.com",
    34
);
```

## SELECT

Para selecionar tudo da tabela usuarios: 
```
SELECT * FROM usuarios; 
```
## WHERE
### Funciona com condicionais para retornar o que é pedido. 

Para selecionar apenas usuarios que tem o nome Edilson: 

```
SELECT * FROM usuarios WHERE nome = "Edilson" ;
```

Para selecionar apenas pessoas que tem idade maior ou igual a 18:
```
SELECT * FROM usuarios WHERE idade >= 18 ;
```

# DELETE

Para deletar um registro da tabela use:

```
DELETE FROM usuarios WHERE nome = "Diego";
```

## CUIDADO!!!
O comando  `DELETE FROM usuarios;` DELETA TODA A TABELA! NÃO ESQUEÇA DE USAR SEMPRE O WHERE
# UPDATE

Comando para atualizar algum dado da tabela. Neste comando também temos que sempre utilizar o WHERE, do contrário todos os registros serão atualizados.

```
UPDATE usuarios SET nome = "Cardoso" WHERE nome = "Edilson Junior";
```

# Plataforma de Perguntas e respostas
## Criado um novo projeto e tudo será documentado nele
https://github.com/junior9068/perguntas-e-respostas
# 
