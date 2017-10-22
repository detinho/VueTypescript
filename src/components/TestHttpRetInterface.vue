<template>
  <div>
    <p>User name {{ user.name }}</p>
    <p>User geo {{ user.address.geo }}</p>
    <button @click="call">Call Http</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Http from '@/components/http'
import User from '@/models/user'

@Component({})
export default class TestHttpRetInterface extends Vue {
  user: User = {
    id: 0,
    name: '',
    address: {
      geo: {
        lat: 0,
        lng: 0
      }
    }
  }

  call () {
    new Http().getData('https://jsonplaceholder.typicode.com/users', {})
      .then(data => {
        this.user = data[0]
        console.log(this.user)
      })
  }
}
</script>

