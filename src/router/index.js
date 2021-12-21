import { Router } from 'express';
import bodyParser from 'body-parser';
  const test = require('../controllers/tutorial.controller.js');

  const router = Router();
  router.use(bodyParser.json());

  router.post('/', test.create);
  router.get('/', test.findAll);
  router.get('/published', test.findAllPublished);
  router.get('/:id', test.findOne);
  router.put('/:id', test.update);
  router.delete('/:id', test.delete);
  router.delete('/', test.deleteAll);
export default router;
