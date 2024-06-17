const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World! by express')
})

app.get('/hello/:name', (req, res) => {
    res.send('hello ' + req.params.name)
})

app.listen(3001)