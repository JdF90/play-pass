<template>
  <section class="section">
    <div class="container is-flex is-flex-direction-column is-gap-20-px">
      <h1 class="title is-size-1 has-text-centered">Game</h1>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label is-size-4 has-text-centered">Difficulty</label>
        </div>
        <div class="field-body">
          <div id="difficulty-level" class="field">
            <div class="control">
              <label class="radio ">
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

      <div class="field is-horizontal">
        <div class="field-label is-normal has-text-centered">
          <label class="label is-size-4">How many passports?</label>
        </div>
        <div class="field-body">
          <div id="question-amount" class="field">
            <div class="control">
              <input class="input is-width-25-percent" type="number" placeholder="" v-model="questionAmount" />
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="control has-text-centered">
          <button class="button is-primary" @click="generateLink">Generate link</button>
        </div>
      </div>

      <div v-if="generatedLink" class="field">
        <div class="control">
          <input class="input" type="text" :value="generatedLink" readonly />
        </div>
      </div>

      <div v-if="generatedLink" class="field">
        <div class="control has-text-centered">
          <button class="button is-success" @click="startGame">Start</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useRouter} from 'vue-router';
import {ROUTES} from '../../router';
import { DifficultyLevel } from './Difficulty';

const difficulty = ref(DifficultyLevel.EASY);
const questionAmount = ref<number | undefined>(undefined);
const generatedLink = ref('');
const router = useRouter();

const generateLink = () => {
  console.log(difficulty.value + " " + questionAmount.value);
  generatedLink.value = `/generated/link/to/game/${difficulty.value}/${questionAmount.value}`;
};

const startGame = () => {
    router.push({
		name: ROUTES.GAME_PAGE
	});
};

</script>

<style scoped lang="scss">
@import 'bulma/sass/utilities/mixins.sass';

#difficulty-level {
    text-align: left;

    @include mobile  {
      text-align: center;
    }
}

#question-amount {
  text-align: left;

  @include mobile  {
    text-align: center;
  }
}

.is-gap-20-px {
  gap: 20px;
}

.is-width-25-percent {
  width: 25%;
}

</style>
