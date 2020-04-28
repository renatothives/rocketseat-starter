# rocketseat-starter
Iniciando no mundo de desenvolvimento web

Instalar o NodeJs e o Yarn

https://nodejs.org/pt-br/
https://classic.yarnpkg.com/pt-BR

node -v
yarn -v

Na pasta raiz do repositório executar o comando:

yarn init

enter para todas as respostas, esse comando irá criar o arquivo "package.json" que é reponsável por gerenciar as dependências do projeto.

Para instalar dependências é possível usar o terminal:

yarn add @babel/core
yarn add @babel/cli
yarn add @babel/preset-env

O babel "preset-env" será responsável por transcrever as informações do ES6, ES7... para os navegadores antigos.

podemos criar "scripts" no arquivo "package.json" que serão executados no terminal como o exemplo:

yarn dev

onde "dev" é o nome do script.