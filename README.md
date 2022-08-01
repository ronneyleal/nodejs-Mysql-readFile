<!-- /////////////////LINGUAGENS////////////////////// -->

## Na construção do projeto foi utilizado as seguintes linguagens / Frameworks

** front-end **
-Html
-Css
-Javascript
-Bootstrap

** Back-end **
-Nodejs juntamente com o handlebars para processar o template do front
-MySql

## também foi utilizado o **Docker**

<!-- /////////////////DEPENDENCIAS////////////////////// -->

# instalar as dependencias

## npm install express

## npm install -g nodemon

## npm install --save sequelize

## npm install --save mysql2

## npm install express-handlebars --save

## npm install sequelize --save

## npm install multer --save

<!-- /////////////////EXECUÇÃO////////////////////// -->

Com o mysql instalado com e com a base 'virtex' criada (o docker esta configurado pra criar a base), agora é só executar a aplicação utilizando o comando:

docker-compose up

<!-- /////////////////UTILIZAÇÃO////////////////////// -->

Com a aplicação rodando agora basta acessar através do navegador utilizando a porta 3000.

Na pagina principal é onde faremos o envio do arquivo txt com as informações a serem enviadas ao banco, basta apenas selecionar o arquivo em qualquer lugar da sua máquina.

Existem 3 opções para marcar de qual equipamento se refere o arquivo, porém não é obrigatório que seja marcado o correto, nem mesmo é obrigatório selecionar algum, eu havia feito dessa forma mas posteriormente eu melhorei o código para que faça essa verificação de forma automática, deixei apenas como demonstração.

Após o envio do arquivo, você será redirecionado para uma página mostrando os dados que foram enviados ao banco, referente ao arquivo que foi feito upload, porém essa informação é referente apenas ao arquivo enviado naquele momento.

Caso queira ver todos os registros no banco de dados, basta navegar no menu no topo da página com o título "Listar dados", ele irá filtrar todos os registros, inclusive com a possibilidade de exclusão de algum registro por lá mesmo.

Obs: caso queiram acessar e verificar o banco diretamente pelo phpMyAdmin basta acessar através da porta 8000 e colocar as informações do banco: servidor: db / utilizador: root / senha: root
