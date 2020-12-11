const express = require('express')
const app = express()

// definindo qual engine para renderizar htmls a ser usada
app.set('view engine', 'ejs')
// definindo pasta dos arquivos estaticos
app.use(express.static('public'))

app.get("/",(req, res) =>{

    res.render("index")
})

app.get("/perguntar", (req, res) =>{
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) =>{
    res.send("Formulário recebido com sucesso!")
})

app.listen(8080, () =>{
    console.log("Servidor executado com sucesso!")
})