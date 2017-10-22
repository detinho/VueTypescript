<template>
  <div>
    <p>Will call {{ url }} using the parameters bellow.</p>
    <pre>{{ params }}</pre>
    <button @click="call">Call Url</button>
    <hr >
    <pre>{{ result }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import Http from '@/components/http'

@Component({})
export default class TestHttp extends Vue {
  @Prop()
  url: string
  @Prop()
  params: Object

  result = {}

  call () {
    new Http().getData(this.url, this.params)
      .then(data => {
        this.result = data
      })
  }
}
</script>

