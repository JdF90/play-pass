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
import {inject} from 'vue';

const headers = inject('question-table-headers');

</script>

<style scoped>

</style>
