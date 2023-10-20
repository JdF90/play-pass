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
import { useRouter } from 'vue-router';
import { ROUTES } from '../router';

const title = 'Who is the following player?';
const store = useGameStore();
const router = useRouter();

const nextQuestion = async () => {
	if (store.isLastQuestion) {
		await store.retrieveGameResults();
		routeToGameResult();
		
		return;
	}
	store.nextQuestion();
};

function routeToGameResult() {
	router.push({name: ROUTES.GAME_RESULT_PAGE, params: { id: store.getGameId }})
}

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

.question-container {
	margin: auto;
}

/* desktop */
@media screen and (min-width: 768px) {
	.page-container {
		font-size: 1.25rem;
		margin: auto;
		width: 50%;
	}
}

</style>
