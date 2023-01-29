<template>
	<thead
		data-testid="question-table-headers">
		<tr>
			<th
				v-for="header in headers"
				:key="header">
				{{ header }}
			</th>
		</tr>
	</thead>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { QuestionHeaders } from '../../domain/QuestionTable';

const props = defineProps({
	headers: Object as PropType<QuestionHeaders>
});

</script>

<style scoped>

</style>
