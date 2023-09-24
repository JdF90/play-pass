<template>
	<section class="answer-container">
		<input
			id="answer"
			class="input is-primary"
			v-model="givenAnswer"
			type="text"
			placeHolder="Answer">
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
		console.log(value);	
		return gameStore.setGivenAnswer(value);
	}
});

</script>

<style scoped>

.answer-container {
	width: 40%;
}

input {
	background-color: var(--main-text-color);
	width: 100%;
}

</style>
