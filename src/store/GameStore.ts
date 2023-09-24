import { defineStore } from 'pinia';
import { Game } from '../domain/schema/GameSchema';
import { retrieveGame, retrieveGameResultsFromBackend } from '../logic/service/GameService';
import {retrieveIfAnswerIsCorrect} from '../logic/service/QuestionService';
import { GameResult } from '../domain/schema/GameResultSchema';

export const useGameStore = defineStore('GameStore', {
	state: () => ({
		game: {} as Game | null,
		total: 0,
		current: 0,
		currentQuestion: {} as {},
		isCorrect: false,
		givenAnswer: '',
		tries: 0,
		gameResult: {} as GameResult | undefined,
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
		},
		getPercentageCorrectAnswers: (state): number => {
			return (state.gameResult!.correct.length / state.total) * 100; 
		},
		isLastQuestion: (state): boolean => {
			return state.current + 1 === state.total;
		}
	},
	actions: {
		async retrieveGame() {
			await retrieveGame().then((game: Game | null) => {
				if (game === null) {
					this.game = null;
				}
				this.game = game;
				console.log(this.game);
				this.total = game!.questions.length
			});
		},
		async retrieveIsCorrectAnswer(givenAnswer: string) {
			console.log(this.getCurrentPlayerId);
			const correct = await retrieveIfAnswerIsCorrect({
				gameId: this.getGameId, 
				playerId: this.getCurrentPlayerId, 
				answer: givenAnswer.toLowerCase(),
				questionNumber: this.current + 1
			});
			if (correct) {
				this.isCorrect = true;
			}
			this.tries++;
		},
		async retrieveGameResults() {
			this.gameResult = await retrieveGameResultsFromBackend(this.getGameId);
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
