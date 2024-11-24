import { Request, Response } from 'express';
import path from 'path';

export function viewDocumentation(req: Request, res: Response) {
	res.status(200).sendFile(path.join(__dirname, '/index.html'));
}
