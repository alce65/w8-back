import mongoose from 'mongoose';

const beerSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TypeBeer', // nombre del Modelo
  },
});

beerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});

export const Beer = mongoose.model('Beer', beerSchema);
