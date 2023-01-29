<template>
	<button @click="nextQuestion">Next</button>
</template>

<script setup lang="ts">

const emit = defineEmits(['nextQuestion']);

function nextQuestion() {
    emit('nextQuestion', true);
}

</script>

<style scoped>

</style>
