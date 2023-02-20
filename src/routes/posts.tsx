import { Router } from 'express';
import { fixedPhone, login, newClient, newPhone, phoneClient, registerUser } from '../controllers/post';
import validateToken from './validate-token';

const router = Router();

router.post('/login', login);
router.post('/register', registerUser); 
router.post('/client', validateToken, newClient);
router.post('/phone', validateToken, newPhone);
router.post('/reparation', validateToken, fixedPhone); 
router.post('/phoneClient', validateToken, phoneClient);

export default router