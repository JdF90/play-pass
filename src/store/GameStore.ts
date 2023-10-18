import { defineStore } from 'pinia';
import { Game } from '../domain/schema/GameSchema';
import { retrieveGame, retrieveGameResultsFromBackend } from '../logic/service/GameService';
import {retrieveIfAnswerIsCorrect} from '../logic/service/QuestionService';
import { GameResult } from '../domain/schema/GameResultSchema';
import { DifficultyLevel } from '../components/game/Difficulty';

export const useGameStore = defineStore('GameStore', {
	state: () => ({
		game: {} as Game | null,
		total: 0,
		current: 0,
		currentQuestion: {} as {},
		isCorrect: false,
		givenAnswer: '',
		questionAnswered: false,
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
		async generateGameLink({ difficulty, questionAmount }: { difficulty: DifficultyLevel, questionAmount: number }) {
			await 
		},
		async retrieveGame() {
			await retrieveGame().then((game: Game | null) => {
				if (game === null) {
					this.game = null;
				}
				this.game = game;
				this.total = game!.questions.length
			});
		},
		async retrieveIsCorrectAnswer(givenAnswer: string) {
			this.isCorrect = await retrieveIfAnswerIsCorrect({
				gameId: this.getGameId, 
				playerId: this.getCurrentPlayerId, 
				answer: givenAnswer.toLowerCase(),
				questionNumber: this.current + 1
			});
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
			this.questionAnswered = false;
		}
	}
});
