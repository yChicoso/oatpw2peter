const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
    Nomejogo: {
        type: String,
        required: true,
    },
    Genero: {
        type: String,
        required: true
    },
    Desenvolvedora: {
        type: String,
        required: false
    },
    Descricao: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Game', gameSchema)