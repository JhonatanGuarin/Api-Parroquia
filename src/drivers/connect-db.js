const mongoose = require('mongoose')

const URI = "mongodb+srv://tatis26lesmes:23702771Tiberio@cluster1.bd82dz7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"



mongoose.set('strictQuery')

mongoose.connect(URI)
  .then(()=> console.log('Connect Success...'))
  .catch( err => console.log(err))

module.exports = mongoose