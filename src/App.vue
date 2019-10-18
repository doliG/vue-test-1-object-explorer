<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Toucan Object explorer</h1>
    <h2>Test by <!-- put your name here --></h2>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      obj: {
        something: {
          key1: {
            nested: "really"
          },
          other: "hey"
        },
        stuff: "yeah"
      }
      // If the object changes, your code should work
      // obj: {
      //   somethingElse: {
      //     key2: {
      //       nested: {
      //         more: "nesting"
      //       }
      //     },
      //     hop: "hophop"
      //   },
      //   yipeee: "yeah"
      // }

    }
  }
}
</script>

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
