# API Rest NodeJs sem framwork 🚀

## Descrição 📚

Esta é a minha primeira API Rest desenvolvida sem a ajuda de nenhum framework.

## Como utilizar 🔄

* Primeiro faça um clone do repositório
```
git clone ssh://john@example.com/path/to/my-project.git
```

* Agora dentro do terminar do seu Editor use o comando
```
node src/index.js
```
> **Note**
> É necessário ter o NodeJs instalado

* Pronto! A API está rodando.

## Requisições

### Rotas

   | Rota | Retorno |
   |---|---|
   | / | É a rota que leva à Home. |
   | /users | É a rota que lista todos os usuários. |
   | /products | É a rota que lista todos os produtos. |
   
   
### Parâmetros
 | Tipo | Parâmetro | Retorno|
   |---|---|---|
   | ID | /users/id | Retorna um Id específico da lista de usuários. |
   | ID | /products/id | Retorna um Id específico da lista de produtos.  |
  
  > **Note**
> Caso o ID não exista, se retorna uma rota específica para ids não encontrados.


### Query Params
 | Tipo | Param | Retorno|
   |---|---|---|
   | order | asc | Retorna a lista com os Ids ordenados de forma crescente |
   | order | dsc | Retorna a lista com os Ids ordenados de forma descrescente |
