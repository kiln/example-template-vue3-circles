import { createApp, ref } from 'vue'
import App from './App.vue'

let state = {
  numCircles: 25
}

let numCircles = ref(state.numCircles)

let template = {
  data: {},

  state,

  update() {
    numCircles.value = state.numCircles
  },

  draw() {
    createApp(App, { numCircles }).mount('#app')
  }
}

window.template = template
