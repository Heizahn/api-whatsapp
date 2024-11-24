import { clientWhatsapp } from '../whatsapp/whatsapp';

interface Payment {
	tlf: string;
	client: string;
	motivo: string;
	amountUSD: number;
	amountBs?: number;
	reference: string;
}

export async function sendPaymentService(payment: Payment) {
	const sms = `*Pago registrado!*\n\nCliente: ${payment.client}\nMotivo: ${
		payment.motivo
	}\nMonto REF: ${payment.amountUSD}\n${
		payment.amountBs ? `Monto BS: ${payment.amountBs}\nnpm ` : ''
	}Referencia: ${payment.reference}`;
	try {
		await clientWhatsapp.sendMessage(payment.tlf.replace('0', '58') + '@c.us', sms);
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
