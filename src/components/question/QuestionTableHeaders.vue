<template>
	<thead class="headers">
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
import {PropType} from 'vue';
import {QuestionHeaders} from '../../domain/QuestionTable';

defineProps({
	headers: Object as PropType<QuestionHeaders>
});

</script>

<style scoped>

</style>
