<template>
	<question-table-component />
</template>

<script setup lang="ts">
import { createQuestionTable } from '../../factory/QuestionTableFactory';
import { TEST_QUESTION_TABLE } from '../../test/TestQuestion';
import QuestionTableComponent from './QuestionTable.vue';
import { provide } from 'vue';
import { useGameStore } from '../../store/GameStore';
import { storeToRefs } from 'pinia';

const gameStore = useGameStore();
gameStore.retrieveGame();
const { game } = storeToRefs(gameStore);
console.log(game);

const table = createQuestionTable({
	headers: TEST_QUESTION_TABLE.headers, data: TEST_QUESTION_TABLE.data
});

provide('question-table-headers', table.headers);
provide('question-table-data', table.data);

</script>

<style scoped>

</style>
