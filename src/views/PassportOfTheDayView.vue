<template>
    <div class="flex flex-col gap-4 mx-auto text-center w-1/2">
        <h1 class="text-2xl">Passport of the day</h1>
        <div>
            <TransitionGroup name="list" tag="ul">
                <li v-for="(record, index) in recordsToShow" :key="index"> 
                    <span>
                        {{ record.period }}
                    </span>
                    <span>
                        {{ record.club }}
                    </span> 
                    <span>
                        {{ record.games }}
                    </span>
                    <span>
                        {{ record.goals }}
                    </span>
                </li>
            </TransitionGroup>
        </div>
        <div class="flex flex-col place-items-center w-full">
            <input type="text" name="answer" id="answer" class="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter your answer">
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref, onBeforeMount, ref, watch } from 'vue';
import { Passport, Record } from '../domain/Passport';
import { retrievePassportOfTheDay } from '../service/PassportService';

const passport: Ref<Passport | undefined> = ref(undefined);
const recordsToShow: Ref<Record[]> = ref([]);

onBeforeMount(async () => {
    passport.value = await retrievePassportOfTheDay();
});

const addRecord = () => {
    if (!passport.value || indexRecordToAdd.value === passport.value?.records.length) {
        clearInterval(interval);
        return;
    }

    recordsToShow.value.push(passport.value.records[indexRecordToAdd.value]);
    indexRecordToAdd.value++;
}

const interval = setInterval(addRecord, 2000);
const indexRecordToAdd = ref(0);

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