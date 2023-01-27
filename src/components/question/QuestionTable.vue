<template>
	<table>
		<table-headers :headers="table.headers" />
		<table-data :data="table.data"/>
	</table>
</template>

<script setup lang="ts">
import { createQuestionTable } from '../../factory/QuestionTableFactory';
import TableHeaders from './QuestionTableHeaders.vue';
import TableData from './QuestionTableData.vue';
import { PropType, toRefs } from 'vue';
import { QuestionTableData } from '../../domain/QuestionTable';

const props = defineProps({
	passport: Object as PropType<QuestionTableData>,
});
const { passport } = toRefs(props);
const table = createQuestionTable({
	headers: ['Period', 'Clubs', 'Games', 'Goals'], data: passport!.value!
});

</script>

<style scoped>

</style>
