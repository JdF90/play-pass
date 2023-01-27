<template>
	<tbody
		data-testid="question-table-body">
		<tr
			v-for="row in data"
			:key="row.period">
			<td> {{ row.period }} </td>
			<td> {{ row.club }} </td>
			<td> {{ row.games }} </td>
			<td> {{ row.goals }} </td>
		</tr>
	</tbody>
</template>

<script setup lang="ts">
import {PropType} from 'vue';
import { QuestionTableData } from '../../domain/QuestionTable';

defineProps({
	data: Object as PropType<QuestionTableData>
})

</script>

<style scoped>

</style>
