<template>
	<div
		v-for="row in data"
		:key="row.period"
		class="row"
		data-testid="question-table-body">
		<div class="column period"> {{ row.period }} </div>
		<div class="column club"> {{ row.club }} </div>
		<div class="column games"> {{ row.games }} </div>
		<div class="column goals"> {{ row.goals }} </div>
	</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { QuestionTableData } from '../../domain/QuestionTable';

defineProps({
	data: Object as PropType<QuestionTableData>
});

</script>

<style scoped>

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
