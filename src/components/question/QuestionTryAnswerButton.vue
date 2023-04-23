<template>
  <button @click="tryAnswer">Try</button>
</template>

<script setup lang="ts">
const emit = defineEmits(['tryAnswer']);
const tryAnswer = () => {
	emit('tryAnswer');
};

</script>

<style scoped>

button {
    margin-right: 5px;
}

</style>