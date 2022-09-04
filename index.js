const express = require('express')
const home = require('./home')

const app = express()

app.get('/', (req, res) => {
  home(req, res)
})

app.get('/about', (req, res) => {
  res.send('Ini halaman about')
})

app.get('/home', (req, res) => {
  res.send('Ini halaman home')
})

app.get('/profile/:name', (req, res) => {
  const name = req.params.name
  res.send('Ini halaman profile ' + name)
})

app.listen(5000, () => {
  console.log('server sedang berjalan..')
})