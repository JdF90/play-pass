<template>
	<table>
		<table-headers :headers="table.headers" />
		<table-data :data="table.data" />
	</table>
</template>

<script setup lang="ts">
import {QuestionTable} from '../../domain/QuestionTable';
import {PropType} from 'vue';
import TableHeaders from './QuestionTableHeaders.vue';
import TableData from './QuestionTableData.vue';

defineProps({
	table: Object as PropType<QuestionTable>
});

</script>

<style scoped>

</style>
