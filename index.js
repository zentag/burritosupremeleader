const express = require('express')
const app = express()
const path = require('path')

app.listen('3000', () => console.log("running!"))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './html/index.html')))

app.use(express.static('public'))