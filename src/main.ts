import server from './server/server';
import { clientWhatsapp } from './services/whatsapp/whatsapp';

const app = server;
const port = process.env.PORT || 3000;

clientWhatsapp.initialize();

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
