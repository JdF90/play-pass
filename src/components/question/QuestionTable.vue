<template>
	<section class="table-wrapper">
		<table-headers :headers="headers" />
		<table-data :data="passport"/>
	</section>
</template>

<script setup lang="ts">
import TableHeaders from './QuestionTableHeaders.vue';
import TableData from './QuestionTableData.vue';
import { PropType } from 'vue';
import { QuestionHeaders, QuestionTableData } from '../../domain/QuestionTable';

defineProps({
	passport: Object as PropType<QuestionTableData>,
});

const headers: QuestionHeaders = ['Period', 'Clubs', 'Games', 'Goals'];

</script>

<style scoped>

.table-wrapper {
	display: flex;
	flex-direction: column;
	width: 100%;
}

</style>
