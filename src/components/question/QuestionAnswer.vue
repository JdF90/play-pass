<template>
	<section class="answer-container">
		<input 
			id="answer" 
			v-model="givenAnswer" 
			placeHolder="Antwoord">
	</section>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useGameStore } from '../../store/GameStore';

const gameStore = useGameStore();
const { givenAnswer, getCurrentId } = storeToRefs(gameStore);
const checkAnswer = async (answer: string) => await gameStore.retrieveIsCorrectAnswer(answer, getCurrentId.value);

watch(givenAnswer, async (value) => {
	await checkAnswer(value);
});

</script>

<style scoped>

.answer-container {
	width: 100%;
}

</style>
