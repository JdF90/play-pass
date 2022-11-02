<template>
	<section>
		<game-title :title="title" />
		<question></question>
	</section>
</template>

<script setup lang="ts">
import GameTitle from '../components/util/TitleComponent.vue';
import Question from '../components/question/GameQuestion.vue';

const title = 'Who is the following player?';

</script>

<style scoped>

</style>
