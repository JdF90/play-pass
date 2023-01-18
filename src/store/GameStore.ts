import { defineStore } from 'pinia';
import { Game } from '../domain/schema/GameSchema';

export const useGameStore = defineStore('GameStore', {
    state: () => ({
        game: {} as Game,
    })
})