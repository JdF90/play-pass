const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const QUESTION_ENDPOINT_URL = '/question';

export const retrieveIfAnswerIsCorrect: (answer: string, playerId: string) => Promise<boolean>  = async (answer, playerId) => {
	const urlSearchParams = new URLSearchParams({
		answer, playerId
	});

	const response = await fetch(BACKEND_URL + QUESTION_ENDPOINT_URL + '?' + urlSearchParams);
	return await response.json();
};