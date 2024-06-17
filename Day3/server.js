const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World! by express')
})
app.listen(5500)