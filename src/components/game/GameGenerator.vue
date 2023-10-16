<template>
      <section class="section">
    <div class="container">
      <h1 class="title">Game</h1>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Difficulty</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <label class="radio">
                <input type="radio" v-model="difficulty" value="easy" /> Easy
              </label>
              <label class="radio">
                <input type="radio" v-model="difficulty" value="medium" /> Medium
              </label>
              <label class="radio">
                <input type="radio" v-model="difficulty" value="difficult" /> Difficult
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <input class="input" type="number" placeholder="Amount of questions" v-model="questionAmount" />
      </div>

      <div class="field">
        <button class="button is-primary" @click="generateLink">Generate link</button>
      </div>

      <div class="field">
        <input class="input" type="text" :value="generatedLink" readonly />
      </div>

      <div class="field">
        <button class="button is-success" @click="startGame">Start</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useRouter} from 'vue-router';
import {ROUTES} from '../../router';


const difficulty = ref('easy');
const questionAmount = ref<number>(5);
const generatedLink = ref('');
const router = useRouter();


const generateLink = () => {
    generatedLink.value = `/generated/link/to/game/${difficulty.value}/${questionAmount.value}`;
};

const startGame = () => {
    router.push({
		name: ROUTES.GAME_PAGE
	});
};

</script>
