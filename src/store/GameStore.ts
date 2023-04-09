import { defineStore } from 'pinia';
import { Game } from '../domain/schema/GameSchema';
import { retrieveGame } from '../logic/service/GameService';

export const useGameStore = defineStore('GameStore', {
	state: () => ({
		game: {} as Game | null,
		current: 0,
		currentQuestion: {} as {},
	}),
	getters: {
		getCurrent: (state) => {
			if (!state.game || !state.game.questions || state.current >= state.game.questions.length) {
				return null;
			}
			return state.game?.questions[state.current];
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
		nextQuestion() {
			this.current++;
		}
	}
});
