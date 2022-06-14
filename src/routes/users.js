import { Router } from 'express';

const router = Router();

router
  .get('/', (req, res) => res.send('Hello get users!'))
  .get('/:id', (req, res) => res.send('Hello get users by id!'))
  .post('/', (req, res) => res.send('Hello post!'))
  .put('/:id', (req, res) => res.send('Hello put!'))
  .delete('/:id', (req, res) => res.send('Hello delete!'));

export default router;
