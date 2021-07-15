import { response as res } from 'express';

export class Responses {
	static sentOk(results: any | any[]): void {
		res.status(200).json({
			payload: {
				results,
			},
		});
	}

	static sentNotFound(message = 'Not found'): void {
		res.status(404).send({
			status: 404,
			message,
		});
	}

	// static sentNotAuthenticated(message: string) {}
}
