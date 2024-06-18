const mongoose = require('mongoose')


const {Schema} = mongoose

const userSchema = new Schema({

    name: {
        type: String,
        required : true
    },

    lastName: {
        type: String,
        required : true
    },
    fechaNacimiento: {
        type: Date,
        required: true
      },
   
    documentNumber:{
        type: String,
        required : true,
    },
    typeDocument:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DocumentType',
        required : true,
    },

    mail : {
        type: String,
        required : true,
        unique:true
    },
    password : {
        type: String,
        required : true
    },
    role : {
      type: String,
      enum: ['cliente', 'administrador', 'super administrador'],
      required: true,
    }
  })



  //OPCIONAL AUN NO SE AGREGO AL CONTROL USER SOLO SE HACE SI SE NECESITA

  // Método virtual para calcular la edad
  userSchema.virtual('edad').get(function() {
    const hoy = new Date();
    const fechaNacimiento = this.fechaNacimiento;
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual = hoy.getMonth() + 1;
    const mesNacimiento = fechaNacimiento.getMonth() + 1;
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  });

  
  module.exports = mongoose.model('Users',userSchema)