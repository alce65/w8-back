import { Beer } from '../models/beer.model.js';
import { TypeBeer } from '../models/type.beer.model.js';

export async function getAllBeers(req, res, next) {
  try {
    res.json(await Beer.find({}).populate('type', { name: 1, description: 1 }));
  } catch (error) {
    next(error);
  }
}
export async function addBeer(req, res, next) {
  const { name, description, typeId } = req.body; // name + description + type
  if (!name || !typeId) {
    next(new Error());
  }
  const type = await TypeBeer.findById(typeId);
  if (!type) {
    next(new Error());
  }
  const beer = {
    name,
    description,
    type: type._id,
  };
  try {
    const newBeer = await Beer.create(beer);
    res.json(newBeer);
    type.beers = [...type.beers, newBeer._id];
    await type.save();
  } catch (error) {
    next(error);
  }
}

export function getBeerById(req, res, next) {}
export function updateBeer(req, res, next) {}
export function deleteBeer(req, res, next) {}
