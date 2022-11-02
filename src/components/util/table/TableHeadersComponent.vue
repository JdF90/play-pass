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
import {PropType, toRefs} from 'vue';
import {QuestionHeaders} from '../../../domain/Question';

const props = defineProps({
	headers: Object as PropType<QuestionHeaders>
});

const { headers } = toRefs(props);

</script>

<style scoped>

</style>
