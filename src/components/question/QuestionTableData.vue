<template>
	<tbody>
		<tr
			v-for="row in data.rows"
			:key="row">
			<td> {{ row.period }} </td>
			<td> {{ row.club }} </td>
			<td> {{ row.stats }} </td>
		</tr>
	</tbody>
</template>

<script setup lang="ts">
import {PropType} from 'vue';
import {QuestionTableData} from '../../domain/QuestionTable';

defineProps({
	data: Object as PropType<QuestionTableData>
});

</script>

<style scoped>

</style>
