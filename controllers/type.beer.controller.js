import { response } from 'express';
import { Beer } from '../models/beer.model.js';
import { TypeBeer } from '../models/type.beer.model.js';

export async function getAllTypeBeers(req, res, next) {
  try {
    res.json(
      await TypeBeer.find({}).populate('beers', {
        name: 1,
        description: 1,
        _id: 0,
      })
    );
  } catch (error) {
    next(error);
  }
}
export async function addTypeBeer(req, res, next) {
  const type = req.body; // name + description
  if (!type.name) {
    next(new Error());
  }

  type.beers = [];
  try {
    const newType = await TypeBeer.create(type);
    res.json(newType);
  } catch (error) {
    next(error);
  }
}
export function getTypeBeerById(req, res, next) {}
export function updateTypeBeer(req, res, next) {}

export async function deleteTypeBeer(req, res, next) {
  try {
    const result = await TypeBeer.findByIdAndDelete(req.params.id);

    if (result) {
      res.status(202).json({ deletedId: req.params.id });
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (error) {
    next(error);
  }
}
