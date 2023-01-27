<template>
	<main
		class="page-container">
		<game-title :title="title" />
		<suspense>
			<question class="question-container" />
		</suspense>
		<answer />
		<button @click="nextQuestion">Next</button>
	</main>
</template>

<script setup lang="ts">
import GameTitle from '../components/util/TitleComponent.vue';
import Question from '../components/question/GameQuestion.vue';
import Answer from '../components/question/QuestionAnswer.vue';
import { useGameStore } from '../store/GameStore';

const title = 'Who is the following player?';
const store = useGameStore();


const nextQuestion = () => {
	store.nextQuestion();
}

</script>

<style scoped>

.question-container {
	font-size: 1.25rem;
	margin: auto;
}

</style>
