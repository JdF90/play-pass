<template>
	<question-table-component 
		v-if="getCurrentPlayer" 
		:passport="getCurrentPlayer.passport" 
	/>
</template>

<script setup lang="ts">
import QuestionTableComponent from './QuestionTable.vue';
import { useGameStore } from '../../store/GameStore';
import { storeToRefs } from 'pinia';

const gameStore = useGameStore();
await gameStore.retrieveGame();
const { getCurrentPlayer } = storeToRefs(gameStore);

</script>

<style scoped>

</style>
