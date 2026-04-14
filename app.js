// Aluno: Nicolas da Silva Mesquita Oliveira
// Curso e Período: P5 de Informática
// Atividade 06: Express

const express = require('express') // Importando a biblioteca 'express'
const app = express() // Iniciando um novo projeto Express.js
PORT = 3000 // Definindo a porta padrão como 3000

// Criando um Middleware de registro de entrada de rotas
const routeRegister = (req, res, next) => {
    console.log(`Nova requisição "${req.method}" registrada em ${req.url}`)
    next()
}

// Usando o método .use para que todas as rotas possam ser registradas
app.use(routeRegister)

// Criando e enviando uma resposta à rota raiz indicando a data e a hora de entrada do usuário
app.get('/', (req, res, next) => {
    const now = new Date() // Chamando e guardando as informações da função 'Date()'
    const dataLocal = now.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    res.send(`Bem vindo ao site! Você entrou em: ${dataLocal}.`)
    next()
})

// Criando um novo Middleware para uma nova rota /about
app.get('/about', (req, res) => {
    res.send('Essa é a sessão "sobre". Seja bem vindo!')
})

// Criando o Middleware com método POST para a rota /data
app.post('/data', (req, res) => {
    res.send('Você está na página "Dados". Seja bem vindo!')
})

// Criando o Middleware para a rota /user
app.get('/users', (req, res) => {
    res.redirect('/users/signup')
})

// Criando o Middleware para a rota /users/signin
app.get('/users/signin', (req, res, next) => {
    res.send("Essa é a página de login. Seja bem vindo!")
})

// Criando o Middleware para a rota /users/signup, que é o redirecionamento da rota /users
app.get('/users/signup', (req, res, next) => {
    res.send("Essa é a página de cadastro. Seja bem vindo!")
})

// Criando o Middleware com o id de usuário, digitado pelo próprio na URL
app.get('/users/:userid', (req, res, next) => {
    const userId = req.params.userid
    res.send(`Bem vindo ao site, Usuário ${userId}!`)
})

app.use((req, res, next) => {
    res.status(404).send("Erro 404: Página não encontrada.")
})

// Definindo a execução do servidor a partir da porta 3000 definida anteriormente
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

