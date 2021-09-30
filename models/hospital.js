const { Schema, model } = require('mongoose');


const HospitalSchema = Schema({
  nombre: {
    type:String,
    required: true
  },
  img: {
    type: String,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Usuario'
  },
}, { collection: 'hospitales' });

HospitalSchema.method('toJSON', function () {
  // Escojo las variables que no quiero retornar
  const { __v, ...object } = this.toObject();
  // object.uid = _id
  return object
})

module.exports = model ('Hospital', HospitalSchema);