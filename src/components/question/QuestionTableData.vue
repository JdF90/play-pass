<template>
	<tbody
		data-testid="question-table-body">
		<tr
			v-for="row in data.rows"
			:key="row.period">
			<td> {{ row.period }} </td>
			<td> {{ row.club }} </td>
			<td> {{ row.stats }} </td>
		</tr>
	</tbody>
</template>

<script setup lang="ts">
import {inject} from 'vue';
import { QuestionTableData } from '../../domain/QuestionTable';

const data: QuestionTableData = inject('question-table-data')!;

</script>

<style scoped>

</style>
