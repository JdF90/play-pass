<template>
	<main class="page-container">
		<game-title :title="title" />
		<p>Total Questions: {{ totalQuestions }}</p>
    	<p>Percentage Correct: {{ percentageCorrect }}%</p>
    
    	<h3>Correct Answers</h3>
    	<ul>
      		<li v-for="(passport, index) in correctPassports" :key="'correct-' + index">
        		{{ passport }}
      		</li>
    	</ul>

		<h3>Incorrect Answers</h3>
		<ul>
			<li v-for="(passport, index) in incorrectPassports" :key="'incorrect-' + index">
				{{ passport }}
			</li>
		</ul>
	</main>
</template>

<script setup lang="ts">
import GameTitle from '../components/util/TitleComponent.vue';
import { useGameStore } from '../store/GameStore';

const title = 'Final Score';
const gameStore = useGameStore();
const correctPassports = null;
const incorrectPassports = null;
const totalQuestions = null;
const percentageCorrect = null;
</script>

<style scoped lang="scss">

.page-container {
    background-color: rgb(18, 18, 18);
    border-radius: 20px;
    box-shadow: 0 5px 10px 0 rgb(18, 18, 18,0.75);
    color: var(--main-text-color);
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: auto;
    padding: 30px;
    width: 50%;
}

/* tablet */
@media screen and (min-width: 420px) and (max-width: 767px) {
	.page-container {
		width: 75%;
		font-size: 1.12rem;
	}
}

/* desktop */
@media screen and (min-width: 768px) {
	.page-container {
		width: 50%;
		font-size: 1.25rem;
	}
}

</style>
