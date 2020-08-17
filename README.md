# Teste Asin Soluções

Este teste busca avaliar quesitos técnicos para as pessoas que se candidatem às vagas de desenvolvimento full stack da Asin Soluções.

## Desafio

Evoluir o projeto de uma PokeDex em SPA (Single Page Application) usando ReactJS e NodeJS

## Informação importante

- Este projeto já contém alguns padrões e um deles e a presença de task runners.
  Estes são utilizados para verificar padrões de projeto, como a execução dos testes, padronização dos linters (eslint, prettier e commit lint) e bloqueio da Branch master

- Para subir um novo código, é preciso fazer um fork desse projeto e abrir uma nova PR a cada novo push

- Caso não esteja familiarizado, o padrão de commits é o guide line do [Angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format)

- Ao final do teste, envie uma PR para este projeto e nos avise pelo e-mail de contato

## O problema

Nossa Pokedex já está trazendo os pokemon da pokeApi, porém ainda não conseguimos ver os detalhes de cada um deles e nem temos como ver mais pokemon além dos 20 primeiros
Outra coisa que nos incomoda é que a API retorna poucos dados na primeira requisição e gostaríamos de ter mais dados com apenas uma request pra economizar requisições, com isso deixar a aplicação mais veloz e melhorar a experiência

## O que queremos ver

### backend

Criar uma API em NodeJS e um banco de dados **RELACIONAL** que irá salvar os dados já consultados pelo usuário. Caso os dados do pokemon já exista na base, retorna-los, caso contrário, buscar na pokeAPI e salvar no banco de dados para futuras consultas

### frontend

Criação de uma tela simples de detalhes dos pokemon que será apresentada assim que o usuário clicar nos cards de cada pokemon

## O que será avaliado

- Sua semântica e capacidade de evoluir um projeto mantendo os padrões pre estabelecidos
- Facilidade de entendimento do seu código

## Bonus round

Será muito bem visto a presença de testes e a refatoração do CSS para utilizar styled-components
