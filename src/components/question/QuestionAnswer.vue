<template>
	<section class="answer-container">
		<input 
			id="answer" 
			v-model="givenAnswer" 
			placeHolder="Antwoord">
	</section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { retrieveIfAnswerIsCorrect } from '../../logic/service/QuestionService';
import {storeToRefs} from 'pinia';
import {useGameStore} from '../../store/GameStore';

const givenAnswer = ref('');
const gameStore = useGameStore();
const { getCurrentId } = storeToRefs(gameStore);
const checkAnswer = async (answer: string) => await retrieveIfAnswerIsCorrect(answer, getCurrentId.value);
const isCorrect = ref(false);

watch(givenAnswer, async (value) => {
	isCorrect.value = await checkAnswer(value);
});

</script>

<style scoped>

.answer-container {
	width: 100%;
}

</style>
