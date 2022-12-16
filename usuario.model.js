const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    gamername: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profiles: {
        type: [String],
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)