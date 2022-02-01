const express = require('express')
const app = express()

app.listen(3000)

app.get("/info", (req, res) => {
    console.log('ku ku');

    res.send({message: "labas, as esu krabas"})
})