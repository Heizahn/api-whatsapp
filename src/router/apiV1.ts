import express, { Router } from 'express';
import { SendMessage } from '../controllers/send_message/send_message';
import { LoginWhatsapp } from '../controllers/login_whatsapp/login_whatsapp';
import { PayNotification } from '../controllers/send_message/pay_notification';

const router = Router();

router.get('/login_whatsapp', LoginWhatsapp);
router.post('/send_message', SendMessage);
router.post('/pay_notification', PayNotification);

export default router;
