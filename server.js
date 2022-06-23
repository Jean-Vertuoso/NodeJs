const express = require("express")

const app = express()

const porta = 3001

app.listen(porta, function () {
    console.log(`Servidor rodando na porta ${porta}`);
})

app.get("/hora", function (req, resp) {
    let horaCerta = new Date();
    

    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Hora certa ${horaCerta.getDate()} </h1>
                </body>
            </html>
        `
    )

})

app.get("/usuarios", function (req, resp) {

    const user = {
        nome: "Jean",
        cpf: "000.000.000-00",
        email: "jean_b123@hotmail.com",

    }
    
    resp.json(user)
    
})