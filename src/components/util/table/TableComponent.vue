<template>
	<table>
		<table-headers :headers="table.headers"> </table-headers>
	</table>
</template>

<script setup lang="ts">
import {QuestionTable} from '../../../domain/QuestionTable';
import {PropType, toRefs} from 'vue';
import TableHeaders from './TableHeadersComponent.vue';

const props = defineProps({
	table: Object as PropType<QuestionTable>
});

const { table } = toRefs(props);

</script>

<style scoped>

</style>
