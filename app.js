const express = require('express')
const app = express()

app.listen(4000)

app.get("/info", (req, res) => {
    console.log('test text');

    res.send({message: "test texttest texttest text"})
})