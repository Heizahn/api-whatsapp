import { Client, LocalAuth } from 'whatsapp-web.js';
import path from 'path';
import fs from 'fs';
import QR from 'qrcode-terminal';

export const clientWhatsapp = new Client({
	puppeteer: {
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	},
	authStrategy: new LocalAuth({
		dataPath: path.join(__dirname, './'),
		clientId: 'WH',
	}),
});

clientWhatsapp.on('ready', () => {
	console.log('Client ready!');
});

clientWhatsapp.on('authenticated', () => {
	console.log('Authenticated!');
});

clientWhatsapp.on('auth_failure', () => {
	console.log('Authentication failed!');
});
