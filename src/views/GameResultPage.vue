<template>
	<main class="page-container">
		<game-title :title="title" />
		<p>Total Questions: {{ gameStore.total }}</p>
    	<p>Percentage Correct: {{ gameStore.getPercentageCorrectAnswers }}%</p>
    
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
</script>

<style scoped lang="scss">

.page-container {
    background-color: rgb(18, 18, 18);
    color: var(--main-text-color);
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
}

/* desktop */
@media screen and (min-width: 768px) {
	.page-container {
		font-size: 1.25rem;
		width: 50%;
	}
}

</style>
