const mongoose = require('mongoose')
const mongodbUrl = 'mongodb+srv://peter:MMiMO4AEZ7XZIqIM@gamesoatpeterson.npi1mdl.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongodbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    user: 'peter',
    pass: 'MMiMO4AEZ7XZIqIM'
})

const db = mongoose.connection

db.on('error', (err) => console.error(`Error: ${err}`))
db.on('connected', (err, res) => console.log('Connected to database'))