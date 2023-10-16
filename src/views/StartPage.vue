<template>
	<TheNavigation />
	// game generator
	<button
		name="start-game-button"
		data-testid="start-game-button"
		@click="startGame">
		Start Game
	</button>
</template>

<script setup lang="ts">
import TheNavigation from '../components/navigation/TheNavigation.vue';
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
