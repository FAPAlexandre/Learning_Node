const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const users = require('./users')

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

var checkAuth = function (req, res, next) {
  req.authStatus = true

  if (req.authStatus) {
     const name = req.body.name
     const age = req.body.age

     
    console.log(`O nome do usuário é ${name} e sua idade é ${age}`)
    

    res.sendFile(`${basePath}/userform.html`)
    
  } else {
    console.log('Não está logado, faça o login para continuar!')
  }
}

app.use(checkAuth)


app.use('/users', users)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})