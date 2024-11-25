import express, { Router } from 'express';
import { viewDocumentation } from '../controllers/documentation/documentation';
import routerAPI from './routerAPI';
import { RedirectToIndex } from '../controllers/redirectToIndex/redirectToIndex';

const router = Router();

router.use(express.static('public'));
router.get('/', viewDocumentation);
router.use('/api', routerAPI);
router.get('*', RedirectToIndex);

export default router;
