const mongoose = require('mongoose')

const URI = "mongodb+srv://jhonatancamilo99:12345@proyecto.j13wixj.mongodb.net/Parroquia_Santa_Maria?retryWrites=true&w=majority&appName=Proyecto"



mongoose.set('strictQuery')

mongoose.connect(URI)
  .then(()=> console.log('Connect Success...'))
  .catch( err => console.log(err))

module.exports = mongoose