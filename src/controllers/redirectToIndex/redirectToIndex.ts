import { Request, Response } from 'express';

export function RedirectToIndex(req: Request, res: Response) {
	res.redirect('/');
}
