import express from 'express';
import * as departementsController from '../controllers/departementsController.js';

const router = express.Router();

router
  .route('/')
  .get(departementsController.getAllDepartements)
  .post(departementsController.createDepartement);

router
  .route('/:id')
  .get(departementsController.getDepartement)
  .patch(departementsController.updateDepartement)
  .delete(departementsController.deleteDepartement);

export default router;
