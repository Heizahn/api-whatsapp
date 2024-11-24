import { Router } from 'express';
import apiV1 from './apiV1';

const router = Router();

router.use('/v1', apiV1);

export default router;