<script setup>
import Velocity from 'velocity-animate'
import { toRefs, watch } from 'vue'

const props = defineProps({
  state: Object
})

const { state } = toRefs(props)

let circles = $ref([])


times(state.value.numCircles, num => {
  setTimeout(addCircle, num * 50)
})


watch(
  () => state.value.numCircles,
  (newCount) => {
    if (newCount > circles.length) {
      times(newCount - circles.length, (num) => {
        setTimeout(addCircle, num * 50)
      })
    } else {
      times(circles.length - newCount, (num) => {
        setTimeout(() => circles.pop(), num * 50)
      })
    }
  }
)

function addCircle() {
  circles.push({
    cx: Math.floor(10 + Math.random() * 85) + '%',
    cy: Math.floor(10 + Math.random() * 75) + '%',
    r: Math.floor(Math.random() * 100),
    fill: `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
  })
}

function times(num, func) {
  return Array.from({ length: num }, (_, i) => func(i))
}
</script>

<template>
  <svg width="100%" height="100%">
    <transition-group
      name="pop"
      tag="g"
      v-bind:css="false"
      v-on:before-enter="(el, complete) => Velocity(el, { scale: 0 }, { duration: 0, complete })"
      v-on:enter="(el, complete) => Velocity(el, { scale: 1 }, { duration: 4000, complete })"
      v-on:leave="(el, complete) => Velocity(el, { scale: 0 }, { complete })"
    >
      <circle
        v-for="(circle, index) in circles"
        :key="index"
        v-bind="circle"
        :data-index="index"
      />
    </transition-group>
  </svg>
</template>

<style>
html,
body {
  height: 100%;
}

svg {
  display: block;
}

svg > g {
  transform-origin: 400px 400px;
}
</style>
