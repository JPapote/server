import { Router } from 'express';
import { getClient, getPhoneClient, reparation} from '../controllers/get';
import validateToken from './validate-token';

const router = Router();

router.get('/', validateToken, getClient);

router.get('/reparation', validateToken, reparation);

export default router