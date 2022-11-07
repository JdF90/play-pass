<template>
	<h1
		class="title"
		data-testid="game-title">
		{{ props.title }}
	</h1>
</template>

<script setup lang="ts">

const props = defineProps({
	title: String
});

</script>

<style scoped>

.title {
	font-size: 1.25rem;
}

</style>
