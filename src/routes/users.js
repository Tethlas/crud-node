/* eslint-disable import/extensions */
import { Router } from 'express';
import usersController from '../controllers/userController.js';

const { getAllUsers } = usersController;

const router = Router();

router
  .get('/', getAllUsers)
  .get('/:id', (req, res) => res.send('Hello get users by id!'))
  .post('/', (req, res) => res.send('Hello post!'))
  .put('/:id', (req, res) => res.send('Hello put!'))
  .delete('/:id', (req, res) => res.send('Hello delete!'));

export default router;
