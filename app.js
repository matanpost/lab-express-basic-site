const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log('Main page')
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/contacts', (req, res) => {
    console.log('contacts')
    res.sendFile(__dirname + '/views/contacts.html')
})

app.get('/about', (req, res) => {
    console.log('about')
    res.sendFile(__dirname + '/views/about.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
