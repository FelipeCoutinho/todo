const express  =  require('express')

const app =  express()

app.get('/task',(req, res) => {
  res.status(200).send('olá mundo"')
})

app.listen(3333, () => {
  console.log('runnin')
})