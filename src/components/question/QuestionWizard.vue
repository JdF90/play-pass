<template>
	<section class="question-wizard">
		<answer />
        <next-question-button @next-question="nextQuestion"/>
	</section>
</template>

<script setup lang="ts">
import Answer from './QuestionAnswer.vue';
import NextQuestionButton from './QuestionNextButton.vue';

const emit = defineEmits(['nextQuestion']);

function nextQuestion() {
    emit('nextQuestion', true);
}


</script>

<style scoped>

.question-wizard {
    display: flex;
}

</style>
