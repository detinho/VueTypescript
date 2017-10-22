<template>
  <div class="hello">
    {{person.name}}
    <button @click="test">Teste</button>
  </div>
</template>

<script lang="ts">
import Person from '@/models/person'

let person: Person = {
  id: 1,
  name: 'Marcos',
  age: 31
}

export default {
  name: 'HelloWorld',
  data () {
    return {
      person: person
    }
  },

  methods: {
    test () {
      console.log(this.person)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
