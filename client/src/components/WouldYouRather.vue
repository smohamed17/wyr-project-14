<script setup>
import { ref, watch  } from 'vue' // this will import the reference from vue.js to the page.
// we can change data through the watcher.

defineProps({ // this will send the user the questions to answer and this will be used as a string,boolean,arrays or anything else. It will not modify its components from its props.
question: String, answer1: String, answer2: String,
})

const choice = ref(null) // this will circle the answer you give on the WYR.
// this will remove a bug where both radio buttons are both selected at the same time. By using null it will go back to normal selections and the answer will appear.

const emit = defineEmits([
    'answer-selected' // this will emit an event, and it highly recommended to use two words.
])


//function choiceMade() { // we are able to emit the function to any choice is made in the webpage.
  //emit('answer-selected', choice.value) // choice.value is a string.
//}

watch(choice, () => {
  emit('answer-selected', choice.value) // this will replace the v-on:change function on the div selection of this code.
}) // it will emit the event for the user to make a choice.

</script>

<template>

  <div id="wyr">

    <h2>Make your choice!</h2> <!-- this will allow and display the question for the user to select the radio buttons of this topic. -->

      <p> {{ question }} </p> <!-- this will be a header 3 or paragraph for the question. -->

    <div>
      <input v-model="choice" v-bind:value="answer1"  type="radio" id="answer-1"> <!-- using the id and for to label attribute the answers properly.-->
      <label for="answer-1">{{ answer1 }}</label>
<!-- we are setting the value for both answers and being selected properly.  -->
      <input v-model="choice" v-bind:value="answer2"  type="radio" id="answer-2">  <!-- this will add the buttons to the two options. -->
      <label for="answer-2">{{ answer2 }}</label>
    </div>
    <!-- we can modify the WYR selection of the webpage. -->
  </div>
</template>

<style scoped>

#wyr {
  background-color: darkslategrey;
}

h2 {
  color: magenta;
}

p {
  font-family: "Times New Roman", serif;
}

</style>
