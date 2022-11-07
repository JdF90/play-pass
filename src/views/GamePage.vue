<template>
	<main
		class="page-container">
		<game-title :title="title" />
		<question class="question-container" />
		<answer />
	</main>
</template>

<script setup lang="ts">
import GameTitle from '../components/util/TitleComponent.vue';
import Question from '../components/question/GameQuestion.vue';
import Answer from '../components/question/QuestionAnswer.vue';

const title = 'Who is the following player?';

</script>

<style scoped>

.question-container {
	font-size: 1.25rem;
	margin: auto;
}

</style>
