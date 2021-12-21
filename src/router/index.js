import { Router } from 'express';
import bodyParser from 'body-parser';
import { authMiddleware } from '../middleware/auth';
import * as test from '../controller/test.controller';

const router = Router();
router.use(bodyParser.json());

router.post('/register', test.register);
router.get('/logintest', test.logintest);
router.get('/login', test.login);

router.get('/', test.findAll);
  
export default router;
