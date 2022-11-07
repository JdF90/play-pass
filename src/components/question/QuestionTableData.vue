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
import {inject} from 'vue';

const data = inject('question-table-data');

</script>

<style scoped>

</style>
