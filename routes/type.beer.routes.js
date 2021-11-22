import { Router } from 'express';
import * as ctrl from '../controllers/type.beer.controller.js';

export const router = Router();

router.get('/', ctrl.getAllTypeBeers);
router.post('/', ctrl.addTypeBeer);
router.get('/:id', ctrl.getTypeBeerById);
router.patch('/:id', ctrl.updateTypeBeer);
router.delete('/:id', ctrl.deleteTypeBeer);

// export default router;
