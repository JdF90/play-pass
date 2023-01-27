<template>
	<question-table-component 
		v-if="getCurrent" 
		:passport="getCurrent.passport" 
	/>
</template>

<script setup lang="ts">
import QuestionTableComponent from './QuestionTable.vue';
import { useGameStore } from '../../store/GameStore';
import { storeToRefs } from 'pinia';

const gameStore = useGameStore();
await gameStore.retrieveGame();
const { getCurrent } = storeToRefs(gameStore);
console.log(getCurrent.value);

</script>

<style scoped>

</style>
