import { Router } from 'express';
import * as ctrl from '../controllers/beer.controller.js';

export const router = Router();

router.get('/', ctrl.getAllBeers);
router.post('/', ctrl.addBeer);
router.get('/:id', ctrl.getBeerById);
router.patch('/:id', ctrl.updateBeer);
router.delete('/:id', ctrl.deleteBeer);

// export default router;
