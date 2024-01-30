<template>
    <main v-if="passport" class="flex flex-col gap-4 text-center">
        <h1 class="mt-20 mb-8 text-white text-4xl">Passport of the day</h1>
        <div v-if="!submitted">
            <div>
                <PassportVue :records="passport.records"/>
            </div>
            <div class="bottom-0 fixed flex justify-center gap-4 mt-8 mb-8 w-full">
                <input v-model="answer" type="text" name="answer" id="answer" class="block w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-100 sm:text-sm sm:leading-6" placeholder="Enter your answer">
                <button @click="submit" type="button" class="rounded-md bg-green-400 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">Submit</button>
            </div>
        </div>
        <div v-else class="flex flex-col place-items-center gap-5">
            <p> {{ answerResponse?.isCorrect ? 'Correct!' : 'Wrong...' }} </p>
            <div class="h-10 w-[500px] inline-flex place-items-center">
                <p> {{ answerResponse?.correct }} </p>
                <div :style="{ width: correctPixelValue + 'px' }" class="bg-green-400 h-full ml-3"></div>
                <div :style="{ width: notCorrectPixelValue + 'px' }" class="bg-red-400 h-full mr-3"></div>
                <p> {{ answerResponse?.notCorrect }} </p>
            </div>
            <p v-if="!answerResponse?.isCorrect"> The correct answer was {{ answerResponse?.answer }} </p>
        </div>
    </main>
</template>

<script setup lang="ts">
import { Ref, onBeforeMount, ref } from 'vue';
import { Passport, Record } from '../domain/Passport';
import PassportVue from '../components/Passport.vue';
import { SubmitAnswerResponse, retrievePassportOfTheDay, submitAnswer } from '../service/PassportService';

const passport: Ref<Passport | undefined> = ref(undefined);
const answer = ref('');
const submitted = ref(false);
const answerResponse: Ref<SubmitAnswerResponse | null> = ref({} as SubmitAnswerResponse);
const correctPixelValue = ref(0);
const notCorrectPixelValue = ref(0);

onBeforeMount(async () => {
    passport.value = await retrievePassportOfTheDay();
});

const submit = async () => {
    answerResponse.value = await submitAnswer({ playerId: passport.value!.playerId, input: answer.value });

    if (answerResponse.value === null) {
        return;
    }

    submitted.value = true;
    calculatePercentages();
}

function calculatePercentages(): void{
    const total = answerResponse.value!.correct + answerResponse.value!.notCorrect;
    correctPixelValue.value = answerResponse.value!.correct / total * 500;
    notCorrectPixelValue.value = answerResponse.value!.notCorrect / total * 500;
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
