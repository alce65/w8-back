import mongoose from 'mongoose';

const typeBeerSchema = new mongoose.Schema({
  name: String,
  description: String,
  beers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Beer', // nombre del Modelo
    },
  ],
});

typeBeerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});

export const TypeBeer = mongoose.model('TypeBeer', typeBeerSchema);
