import { Game, GameSchema } from '../../domain/schema/GameSchema';
 
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const GAME_ENDPOINT_URL = '/game';

export const retrieveGame: () => Promise<Game | null> = async () => {
	return await fromBackendApi()
		.then((retrieved: Game) => {
			return retrieved;
		})
		.catch((error: unknown) => {
			if (error instanceof Error) {
				console.error(error.message);
			} else {
				console.error('Something went wrong retrieving the game from the backend, ' + String(error));
			}
			return null;
		});
};

const fromBackendApi: () => Promise <Game> = async () => {
	const response = await fetch(BACKEND_URL + GAME_ENDPOINT_URL);
	const json = await response.json();
	return GameSchema.parse(json);
}; 