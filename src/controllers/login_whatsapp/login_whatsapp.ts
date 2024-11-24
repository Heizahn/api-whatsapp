import { clientWhatsapp } from '../../services/whatsapp/whatsapp';
import { Request, Response } from 'express';

export function LoginWhatsapp(req: Request, res: Response) {
	clientWhatsapp.getState().then((state) => {
		if (state === 'CONNECTED') {
			res.status(200).json({ message: 'Authenticated' });
		} else {
			res.status(401).json({ message: 'Not Authenticated' });
		}
	});
}
