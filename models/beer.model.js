import { Schema, model } from 'mongoose';

const beerSchema = new Schema({
  name: String,
  description: String,
  type: {
    type: Schema.Types.ObjectId,
    ref: 'TypeBeer', // nombre del Modelo
  },
});

beerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});

export const Beer = model('Beer', beerSchema);
