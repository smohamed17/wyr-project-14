<script setup>
import WouldYouRather from './components/WouldYouRather.vue'// this will import the component from the file into the app.vue space.

import { ref, onMounted } from 'vue' // we are importing onMounted (hooks) from vue. we call a function when a components are first loaded in.
import servicesWYR from "./services/servicesWYR.js" // importing the servicesWYR from the file we just made.


const wyrQuestion = ref('') // this is being imported from the servicesWYR.js file.
const wyrAnswer1 = ref('') // the refs are being blanked out for the random question that the webpage throws at us.
const wyrAnswer2 = ref('')

// this will store the user's answer after answering.
const userSelection = ref('')

onMounted(() => { // this function will return a promise from the serviceWYR file.
  servicesWYR.getRandomWyr().then( (wyrData) => { // it will paste the random questions data from the RAW JSON section with objects.
    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2 // this will send the data to the reactive data
  })
})


function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! you chose ${userChoice}` // choice.value will be included when the answer is selected, and it will call to update selection
}

</script>

<template>

  <div id="app-component">

    <h1>Would You Rather?</h1> <!-- this will be the title of the starting page.  -->
      <WouldYouRather v-bind:question="wyrQuestion"
                v-bind:answer1="wyrAnswer1"
                v-bind:answer2="wyrAnswer2"
                v-on:answer-selected="updateUserSelection">
      </WouldYouRather><!-- this is similar to HTML component and will be driven by the template of the 'WouldYouRather.vue' section.   -->
<!-- We use v-bind to figure out which to bind in the webpage. -->

    <p> {{ userSelection }} </p>
  </div>

  <!--  we can modify the app.vue component of the webpage. -->

</template>

<style scoped>

#app-component {
  background-color: lightgreen;
  padding: 35px;
}

h1 {
  color: magenta;
}

p {
  font-family: fantasy;
}

</style>