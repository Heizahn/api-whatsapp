import { clientWhatsapp } from '../whatsapp/whatsapp';

interface Message {
	title?: string;
	body: string;
	tlf: string;
}
export async function sendMessageService(message: Message) {
	try {
		await clientWhatsapp.sendMessage(
			message.tlf.replace('0', '58') + '@c.us',
			`${message.title ? `*${message.title}*\n\n` : ''}${message.body}`,
		);
	} catch (err) {
		if (err instanceof Error) {
			if (err.message.includes('Cannot read properties')) {
				throw Error('Campos incompletos');
			}
			console.log(err.message);
			throw new Error('Primero escanea el código QR');
		}
	}
}
