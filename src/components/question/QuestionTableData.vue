<template>
	<ul 
		class="table"
		data-testid="question-table-body">
		<li
			v-for="(row, index) in data"
			:key="index"
			class="row">
			<div class="column period"> {{ row.period }} </div>
			<div class="column club"> {{ row.club }} </div>
			<div class="column games"> {{ row.games }} </div>
			<div class="column goals"> {{ row.goals }} </div>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { QuestionTableData } from '../../domain/QuestionTable';

defineProps({
	data: Object as PropType<QuestionTableData>
});

</script>

<style scoped>

.table {
	width: 100%;
	padding: 0;
}

.row {
	display: flex;
}

.period  {
	flex: 30%;
}

.club {
	flex: 40%;
}

.games, .goals {
	flex: 15%;
	text-align: center;
}

</style>
