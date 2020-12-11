const express = require('express')
const app = express()

// definindo qual engine para renderizar htmls a ser usada
app.set('view engine', 'ejs')

app.get("/",(req, res) =>{
    res.render("index", {
        nome: "Carlos Arruda",
        linguagem: "Python"
    })
})

app.listen(8080, () =>{
    console.log("Servidor executado com sucesso!")
})