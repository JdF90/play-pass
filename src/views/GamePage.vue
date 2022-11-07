<template>
	<section
		class="page-container">
		<game-title :title="title" />
		<question class="question-container" />
	</section>
</template>

<script setup lang="ts">
import GameTitle from '../components/util/TitleComponent.vue';
import Question from '../components/question/GameQuestion.vue';

const title = 'Who is the following player?';

</script>

<style scoped>

.question-container {
	margin: auto;
	font-size: 1.25rem;
}

</style>
