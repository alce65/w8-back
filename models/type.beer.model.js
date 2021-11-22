import { Schema, model } from 'mongoose';

const typeBeerSchema = new Schema({
  name: String,
  description: String,
  beers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Beer', // nombre del Modelo
    },
  ],
});

typeBeerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});

export const TypeBeer = model('TypeBeer', typeBeerSchema);
