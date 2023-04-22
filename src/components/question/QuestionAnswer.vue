<template>
	<section class="answer-container">
		<input
			id="answer"
			v-model="givenAnswer"
			type="text"
			placeHolder="Antwoord">
	</section>
</template>

<script setup lang="ts">
import { useGameStore } from '../../store/GameStore';
import {computed} from 'vue';

const gameStore = useGameStore();
const givenAnswer = computed({
	get() {
		return gameStore.givenAnswer;
	},
	set(value) {
		return gameStore.setGivenAnswer(value);
	}
});

</script>

<style scoped>

.answer-container {
	width: 100%;
}

input {
	background-color: whitesmoke;
}

</style>
