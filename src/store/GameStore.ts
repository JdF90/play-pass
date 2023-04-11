import { defineStore } from 'pinia';
import { Game } from '../domain/schema/GameSchema';
import { retrieveGame } from '../logic/service/GameService';
import {retrieveIfAnswerIsCorrect} from '../logic/service/QuestionService';

export const useGameStore = defineStore('GameStore', {
	state: () => ({
		game: {} as Game | null,
		current: 0,
		currentQuestion: {} as {},
		isCorrect: false,
		givenAnswer: ''
	}),
	getters: {
		getCurrent: (state) => {
			if (!state.game || !state.game.questions || state.current >= state.game.questions.length) {
				return null;
			}
			return state.game?.questions[state.current];
		},
		getCurrentId: (state): string => {
			if (!state.game || !state.game.questions || state.current >= state.game.questions.length) {
				return '';
			}
			return state.game?.questions[state.current].playerId;
		}
	},
	actions: {
		async retrieveGame() {
			await retrieveGame().then((game: Game | null) => {
				if (game === null) {
					this.game = null;
				}
				this.game = game;
			});
		},
		async retrieveIsCorrectAnswer(givenAnswer: string, playerId: string) {
			const correct = await retrieveIfAnswerIsCorrect(givenAnswer, playerId);
			if (correct) {
				this.isCorrect = true;
			}
		},
		setGivenAnswer(givenAnswer: string) {
			this.givenAnswer = givenAnswer;
		},
		nextQuestion() {
			this.current++;
			this.givenAnswer = '';
			this.isCorrect = false;
		}
	}
});
