<template>
    <main v-if="passport" class="flex flex-col gap-4 text-center">
        <h1 class="mt-20 text-white text-4xl">Passport of the day</h1>
        <div class="mt-8">
            <PassportVue :records="passport.records"/>
        </div>
        <div class="bottom-0 fixed flex justify-center gap-4 mt-8 mb-8 w-full">
            <input v-model="answer" type="text" name="answer" id="answer" class="block w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-100 sm:text-sm sm:leading-6" placeholder="Enter your answer">
            <button @click="submit" type="button" class="rounded-md bg-green-400 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">Submit</button>
        </div>
    </main>
</template>

<script setup lang="ts">
import { Ref, onBeforeMount, ref } from 'vue';
import { Passport, Record } from '../domain/Passport';
import PassportVue from '../components/Passport.vue';
import { retrievePassportOfTheDay, submitAnswer } from '../service/PassportService';

const passport: Ref<Passport | undefined> = ref(undefined);
const answer = ref('');

onBeforeMount(async () => {
    passport.value = await retrievePassportOfTheDay();
});

const submit = async () => {
    const isCorrect = await submitAnswer({ playerId: passport.value!.playerId, input: answer.value })
}

</script>

<style>

.list-enter-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
