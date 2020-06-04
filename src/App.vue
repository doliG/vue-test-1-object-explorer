<script>
import SecondPart from './SecondPart.vue';

export default {
  name: 'app',
  components: { SecondPart },
  data () {
    return {
      people: [
        {
          firstName: 'Hello',
          lastName: 'Kitty',
          id: 'hellok'
        },
        {
          firstName: 'Peppa',
          lastName: 'Pig',
          id: 'peppap'
        },
        {
          firstName: 'SpongeBob',
          lastName: 'SquarePants',
          id: 'spong'
        },
      ],
      peopleInfo: [
        {
          address: {
            street: 'Pink St.',
            country: 'Japan'
          },
          'Secret Info': {
            dont: 'showme'
          },
          personId: 'hellok',
          quote: 'Meow',
          status: 'Fictional'
        },
        {
          address: {
            street: 'Pineapple under the sea',
            country: 'The sea'
          },
          'Want to know more?': {
            dont: 'showme'
          },
          personId: 'spong',
          quote: 'Where is Patrick?',
          status: 'Fictional'
        },
        {
          address: {
            street: 'Pig St.',
            country: 'Mud Puddles Country'
          },
          'Secret Info': {
            dont: 'showme'
          },
          'Want to know more?': {
            dont: 'showme'
          },
          personId: 'peppap',
          quote: 'My most favorite thing in the whole world is jumping up and down in muddy puddles!',
          status: 'Fictional'
        },
      ],
    }
  }
}
</script>

<template>
  <div id="app">
    <h1>Toucan Object explorer</h1>
    <h2>Test by Your name here</h2>

    <!-- Do the first part here -->

    <!-- Uncomment to start the second part
    <SecondPart /> -->
  </div>
</template>

<style lang="css">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
