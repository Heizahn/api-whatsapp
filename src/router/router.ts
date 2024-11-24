import { Router } from 'express';
import { viewDocumentation } from '../controllers/documentation/documentation';
import routerAPI from './routerAPI';

const router = Router();

router.get('/', viewDocumentation);
router.use('/api', routerAPI);

export default router;
