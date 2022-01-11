import express from 'express';
import * as usersController from '../controllers/usersController.js';

const router = express.Router();

router
  .route('/')
  .get(usersController.getAllUsers)
  .post(usersController.createUser);

router.route('/delete/:id').get(usersController.deleteUser);
router
  .route('/update/:id')
  .get(usersController.getUser)
  .post(usersController.updateUser);

export default router;
