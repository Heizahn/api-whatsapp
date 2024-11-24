import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from '../router/router';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { clientWhatsapp } from '../services/whatsapp/whatsapp';

const server = express();
const http = createServer(server);
const io = new Server(http, {
	cors: {
		origin: 'http://localhost:3001',
	},
});

const sockets: any = [];

clientWhatsapp.on('authenticated', () => {
	sockets.forEach((socket: { emit: (arg0: string, arg1: { message: string }) => void }) => {
		socket.emit('auth', {
			message: 'Authenticated',
		});
	});
});

clientWhatsapp.on('qr', (qr) => {
	sockets.forEach((socket: { emit: (arg0: string, arg1: { qr_code: string }) => void }) => {
		socket.emit('qr_code', {
			qr_code: qr,
		});
	});
});

io.on('connection', (socket) => {
	sockets.push(socket);

	socket.on('disconnect', () => {
		sockets.splice(sockets.indexOf(socket), 1);
	});
});

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.use('/', router);

export default http;
