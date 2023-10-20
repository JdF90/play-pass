<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <a class="navbar-item" href="https:">
                <img src="/src/assets/play-pass-icon.png" alt="" width="40" height="40">
            </a>
            <TitleComponent title="Play Pass" class="m-auto" />
            <a role="button" class="navbar-burger" data-target="navbar-menu-items" @click="toggleMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbar-menu-items" class="navbar-menu is-flex-grow-0" :class="{ 'is-active': showMenu }">
            <div class="navbar-start">
                <a class="navbar-item">
                    Games
                </a>
            </div>
            <div class="navbar-start">
                <a class="navbar-item">
                    Passport of the day
                </a>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import TitleComponent from '../util/TitleComponent.vue';
import { ref } from 'vue';

const showMenu = ref(false);

function toggleMenu() {
    showMenu.value = !showMenu.value;
}

</script>

<style scoped>

</style>
