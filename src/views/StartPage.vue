<template>
	<button
		name="start-game-button"
		@click="startGame">
		Start Game
	</button>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
import {ROUTES} from '../router';

const router = useRouter();

const startGame = () => {
	router.push({
		name: ROUTES.GAME_PAGE
	});
};

</script>

<style scoped>

</style>
