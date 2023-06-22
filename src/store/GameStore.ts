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
		givenAnswer: '',
		tries: 0
	}),
	getters: {
		getCurrentPlayer: (state) => {
			if (!state.game || !state.game.questions || state.current >= state.game.questions.length) {
				return null;
			}
			return state.game?.questions[state.current];
		},
		getCurrentPlayerId: (state): string => {
			if (!state.game || !state.game.questions || state.current >= state.game.questions.length) {
				return '';
			}
			return state.game?.questions[state.current].playerId;
		},
		getGameId: (state): string => {
			if (!state.game) {
				return '';
			}

			return state.game.id;
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
		async retrieveIsCorrectAnswer(givenAnswer: string) {
			const correct = await retrieveIfAnswerIsCorrect({
				gameId: this.getGameId, 
				playerId: this.getCurrentPlayerId, 
				answer: givenAnswer.toLowerCase(),
				questionNumber: this.current + 1
			});
			console.log(correct);
			if (correct) {
				this.isCorrect = true;
			}
			this.tries++;
		},
		setGivenAnswer(givenAnswer: string) {
			this.givenAnswer = givenAnswer;
		},
		nextQuestion() {
			this.current++;
			this.givenAnswer = '';
			this.isCorrect = false;
			this.tries = 0;
		}
	}
});
