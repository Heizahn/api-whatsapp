import { Request, Response } from 'express';
import { sendPaymentService } from '../../services/send_message/send_payment';

export function PayNotification(req: Request, res: Response) {
	const { tlf, client, motivo, amountUSD, amountBs, reference } = req.body;

	if (!tlf || !client || !motivo || !amountUSD || !reference) {
		res.status(400).json({ message: 'Campos incompletos' });
		return;
	}

	sendPaymentService({ tlf, client, motivo, amountUSD, amountBs, reference })
		.then(() => {
			res.status(200).json({ message: 'Pago enviado' });
		})
		.catch((err) => {
			if (err instanceof Error) {
				console.log(err.message);
				res.status(500).json({ message: err.message });
			}
		});
}
