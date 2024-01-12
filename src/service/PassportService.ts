const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const PASSPORT_OF_THE_DAY_ENDPOINT_URL = '/passport-of-the-day';

export const retrievePassportOfTheDay = async () => {
    try {
        const response = await fetch(BACKEND_URL + PASSPORT_OF_THE_DAY_ENDPOINT_URL);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}
