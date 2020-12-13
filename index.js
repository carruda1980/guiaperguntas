const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Model de pergutas
const Pergunta = require('./database/Pergunta')

// conectando ao banco
const connection = require('./database/database')
connection.authenticate()
    .then(()=>{
        console.log("Conexão com banco realizada com sucesso!")
    })
    .catch((msgError) =>{
        console.log(msgError)
    })

// definindo qual engine para renderizar htmls a ser usada
app.set('view engine', 'ejs')
// definindo pasta dos arquivos estaticos
app.use(express.static('public'))

// bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// rotas
app.get("/",(req, res) =>{
    res.render("index")
})

app.get("/perguntar", (req, res) =>{
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    })
})

app.listen(8080, () =>{
    console.log("Servidor executado com sucesso!")
})