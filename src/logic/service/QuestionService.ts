import { GivenAnswer } from "../../domain/GivenAnswer";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const QUESTION_ENDPOINT_URL = BACKEND_URL + '/question';

export const retrieveIfAnswerIsCorrect: (givenAnswer: GivenAnswer) => Promise<boolean>  = async (givenAnswer) => {
	const response = await fetch(QUESTION_ENDPOINT_URL, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(givenAnswer),
	});
	return await response.json();
};
