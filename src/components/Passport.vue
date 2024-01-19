<template>
   <TransitionGroup name="list" tag="ul" class="divide-y divide-gray-800">
        <li class="flex justify-center gap-x-4 py-5" :key="'headers'">
            <div class="flex justify-between gap-5 min-w-96 text-gray-400 font-semibold text-sm leading-6">
                <p>Period</p>
                <p>Club</p>
                <p>Games</p>
                <p>Goals</p>
            </div>
        </li>
        <li v-for="(record, index) in recordsToShow" :key="index" class="flex justify-center gap-x-4 py-5">
            <div class="flex justify-between gap-5 min-w-96 text-white">
                <p class="text-sm leading-6">{{ record.period }}</p>
                <p class="text-sm font-semibold leading-6">{{ record.club }}</p>
                <p class="text-sm leading-6">{{ record.games }}</p>
                <p class="text-sm leading-6">{{ record.goals }}</p>
            </div>
        </li>
    </TransitionGroup> 
</template>

<script setup lang="ts">
import { PropType, Ref, ref } from 'vue';
import { Record } from '../domain/Passport';

const props = defineProps({
    records: Object as PropType<Record[]>
});

const recordsToShow: Ref<Record[]> = ref([]);
const indexRecordToAdd = ref(0);

const addRecord = () => {
    if (!props.records || indexRecordToAdd.value === props.records.length) {
        clearInterval(interval);
        return;
    }

    recordsToShow.value.push(props.records[indexRecordToAdd.value]);
    indexRecordToAdd.value++;
}

const interval = setInterval(addRecord, 2000);

</script>
