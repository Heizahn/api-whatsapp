import { Request, Response } from 'express';
import { sendMessageService } from '../../services/send_message/send_message';

export function SendMessage(req: Request, res: Response) {
	const { message } = req.body;
	if (!message.tlf || !message.body) {
		res.status(400).json({ message: 'Campos incompletos' });
		return;
	}
	sendMessageService(message)
		.then(() => {
			res.status(200).json({ message: 'Mensaje enviado' });
		})
		.catch((err) => {
			if (err instanceof Error) {
				res.status(500).json({ message: err.message });
			}
		});
}
