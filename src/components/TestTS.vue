<template>
  <div>
    <p>{{ message }}</p>
    <p>There are {{ counter }} items in the list.</p>
    <hr >
    <button @click="increment">{{ counter }}</button>
    <hr >
    <ul>
      <li v-for="value in values" :key="value">{{ value }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class TestTS extends Vue {
  message: string = 'A message here'
  values: Array<number> = []

  get counter (): number {
    return this.values.length
  }

  increment () {
    this.values.push(Math.random())
  }
}
</script>

