const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const PASSPORT_OF_THE_DAY_ENDPOINT_URL = '/passport-of-the-day';
const CHECK_ANSWER_PATH_URL = '/check-answer'

export const retrievePassportOfTheDay = async () => {
    try {
        const response = await fetch(BACKEND_URL + PASSPORT_OF_THE_DAY_ENDPOINT_URL);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const submitAnswer = async ({playerId, input}: { playerId: string, input: string }) => {
    try {
        const response = await fetch(BACKEND_URL + PASSPORT_OF_THE_DAY_ENDPOINT_URL + CHECK_ANSWER_PATH_URL, { 
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ playerId, input })
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}
