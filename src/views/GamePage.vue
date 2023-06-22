<template>
	<main class="page-container">
		<game-title :title="title" />
		<suspense>
			<question class="question-container" />
		</suspense>
		<question-wizard @next-question="nextQuestion"/>
	</main>
</template>

<script setup lang="ts">
import GameTitle from '../components/util/TitleComponent.vue';
import Question from '../components/question/GameQuestion.vue';
import QuestionWizard from '../components/question/QuestionWizard.vue';
import { useGameStore } from '../store/GameStore';

const title = 'Who is the following player?';
const store = useGameStore();

const nextQuestion = () => {
	store.nextQuestion();
};

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

.question-container {
	margin: auto;
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
