const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://analytics:analytics@mflix.bc1fp.mongodb.net/Valorant?retryWrites=true&w=majority' , () => {
    console.log('DataBase Connected')
})

const db = mongoose.connection
module.exports = db