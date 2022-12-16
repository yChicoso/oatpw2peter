const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./src/utils/database')
const gameRouter = require('./src/routes/game.route')
const userRouter = require('./src/routes/usuario.route')
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('catalogojogos-api is running')
})

app.use('/api/v1/game', gameRouter)

app.use('/api/v1/users', userRouter)

app.use((error, req, res, next) => {
    console.log('ERRO', error) 
    res.status(500).json({errorMessage: error.message})
 })

app.listen(port, () => {
    console.log(`catalogojogos-api running on port ${port}`)
})