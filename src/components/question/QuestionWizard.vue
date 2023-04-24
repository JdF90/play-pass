<template>
	<section class="question-wizard">
		<answer />
		<span> {{ feedBack }} </span>
		<div>
			<try-answer-button
					v-if="!isCorrect"
					@try-answer="checkAnswer" />
			<next-question-button
					v-if="isCorrect"
					@next-question="nextQuestion"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import Answer from './QuestionAnswer.vue';
import TryAnswerButton from './QuestionTryAnswerButton.vue';
import NextQuestionButton from './QuestionNextButton.vue';
import {useGameStore} from '../../store/GameStore';
import {storeToRefs} from 'pinia';
import {computed} from 'vue';

const emit = defineEmits(['nextQuestion']);

const store = useGameStore();
const { isCorrect, givenAnswer, getCurrentId, tries } = storeToRefs(store);

const feedBack = computed(() => {
	if (givenAnswer.value === '' || tries.value === 0) {
		return '';
	}
	if (isCorrect.value) {
		return 'Correct!';
	}
	return 'Wrong..';
});

const checkAnswer = async () => {
	await store.retrieveIsCorrectAnswer(givenAnswer.value, getCurrentId.value);
};

const nextQuestion = () => {
	emit('nextQuestion', true);
};

</script>

<style scoped>

.question-wizard {
	display: flex;
	justify-content: space-between;
}

</style>
