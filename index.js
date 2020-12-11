const express = require('express')
const app = express()

// definindo qual engine para renderizar htmls a ser usada
app.set('view engine', 'ejs')
// definindo pasta dos arquivos estaticos
app.use(express.static('public'))

app.get("/",(req, res) =>{
    var produtos = [
        {nome: "Livro python", preco: 50.00},
        {nome: "Caneca nodejs", preco: 25.30}
    ]
    res.render("index", {
        nome: "Carlos Arruda",
        linguagem: "Python",
        msg: false,
        produtos: produtos
    })
})

app.listen(8080, () =>{
    console.log("Servidor executado com sucesso!")
})