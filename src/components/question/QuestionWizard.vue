<template>
	<section class="question-wizard">
		<answer />
		<try-answer-button @try-answer="checkAnswer" />
		<next-question-button
				v-if="isCorrect"
				@next-question="nextQuestion"
		/>
	</section>
</template>

<script setup lang="ts">
import Answer from './QuestionAnswer.vue';
import TryAnswerButton from './QuestionTryAnswerButton.vue';
import NextQuestionButton from './QuestionNextButton.vue';
import {useGameStore} from '../../store/GameStore';
import {storeToRefs} from 'pinia';

const emit = defineEmits(['nextQuestion']);

const store = useGameStore();
const { isCorrect, givenAnswer, getCurrentId } = storeToRefs(store);
const checkAnswer = async () => await store.retrieveIsCorrectAnswer(givenAnswer.value, getCurrentId.value);

function nextQuestion() {
	emit('nextQuestion', true);
}


</script>

<style scoped>

.question-wizard {
    display: flex;
}

</style>
