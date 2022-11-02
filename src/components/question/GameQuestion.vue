<template>
	<question-table-component :table="table" />
</template>

<script setup lang="ts">
import { createQuestionTable } from '../../factory/QuestionTableFactory';
import {TEST_QUESTION_TABLE} from '../../assets/TestQuestion';
import QuestionTableComponent from './QuestionTable.vue';

const table = createQuestionTable({
	headers: TEST_QUESTION_TABLE.headers, data: TEST_QUESTION_TABLE.data
});

</script>

<style scoped>

</style>
