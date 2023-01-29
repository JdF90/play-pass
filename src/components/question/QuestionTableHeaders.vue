<template>
	<div class="row"
	data-testid="question-table-headers">
		<div class="column period"> {{ headers![0] }} </div>
		<div class="column club"> {{ headers![1] }} </div>
		<div class="column games"> {{ headers![2] }} </div>
		<div class="column goals"> {{ headers![3] }} </div>
	</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { QuestionHeaders } from '../../domain/QuestionTable';

const props = defineProps({
	headers: Object as PropType<QuestionHeaders>
});

</script>

<style scoped>

.row {
	display: flex;
	align-items: center;
}

.period {
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
