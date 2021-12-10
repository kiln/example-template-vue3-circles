import { createApp, ref } from 'vue'
import App from './App.vue'

let state = {
  numCircles: 25
}

let stateRef = ref({ ...state })

let template = {
  data: {},

  state,

  update() {
    stateRef.value = { ...state }
  },

  draw() {
    createApp(App, { state: stateRef }).mount('#app')
  }
}

window.template = template
