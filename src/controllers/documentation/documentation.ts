import { Request, Response } from 'express';
import path from 'path';

export function viewDocumentation(req: Request, res: Response) {
	res.sendFile(path.join('/public/index.html'));
}
