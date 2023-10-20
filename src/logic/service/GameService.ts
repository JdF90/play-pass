import { DifficultyLevel } from '../../components/game/Difficulty';
import { GameResult, GameResultSchema } from '../../domain/schema/GameResultSchema';
import { Game, GameSchema } from '../../domain/schema/GameSchema';
 
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const GAME_ENDPOINT_URL = '/game';
const GAME_GENERATE_LINK_PATH_URL = '/generate';
const GAME_RESULT_PATH_URL = '/result';

export const generateGameLink: ({ difficulty, questionAmount }: { difficulty: DifficultyLevel, questionAmount: number }) => Promise<Object> = async() =>{
	try {
		const response = await fetch(BACKEND_URL + GAME_ENDPOINT_URL + GAME_GENERATE_LINK_PATH_URL);
		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error);
	}
}

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

export const retrieveGameResultsFromBackend: (gameId: string) => Promise<GameResult> = async (gameId) => {
	const response = await fetch(BACKEND_URL + GAME_ENDPOINT_URL + `/${gameId}` + GAME_RESULT_PATH_URL);
	const json = await response.json();
	return GameResultSchema.parse(json);
}

const fromBackendApi: () => Promise <Game> = async () => {
	const response = await fetch(BACKEND_URL + GAME_ENDPOINT_URL);
	const json = await response.json();
	return GameSchema.parse(json);
}; 