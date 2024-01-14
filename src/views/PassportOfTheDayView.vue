<template>
        <p v-for="record in passport?.records"> {{ record.club }} </p>
</template>

<script setup lang="ts">
import { Ref, onBeforeMount, ref } from 'vue';
import { Passport } from '../domain/Passport';
import { retrievePassportOfTheDay } from '../service/PassportService';

const passport: Ref<Passport | undefined> = ref(undefined);

onBeforeMount(async () => {
    passport.value = await retrievePassportOfTheDay();
});

</script>