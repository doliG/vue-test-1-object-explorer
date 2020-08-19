<script>
import SecondPart from "./SecondPart.vue";

export default {
  name: "app",
  components: { SecondPart },
  data() {
    return {
      selectedPersonInfo: undefined,
      people: [
        {
          firstName: "Hello",
          lastName: "Kitty",
          id: "hellok",
        },
        {
          firstName: "Peppa",
          lastName: "Pig",
          id: "peppap",
        },
        {
          firstName: "SpongeBob",
          lastName: "SquarePants",
          id: "spong",
        },
      ],
      peopleInfo: [
        {
          address: {
            street: "Pink St.",
            country: "Japan",
          },
          "Secret Info": {
            dont: "showme",
          },
          personId: "hellok",
          quote: "Meow",
          status: "Fictional",
        },
        {
          address: {
            street: "Pineapple under the sea",
            country: "The sea",
          },
          "Want to know more?": {
            dont: "showme",
          },
          personId: "spong",
          quote: "Where is Patrick?",
          status: "Fictional",
        },
        {
          address: {
            street: "Pig St.",
            country: "Mud Puddles Country",
          },
          "Secret Info": {
            dont: "showme",
          },
          "Want to know more?": {
            dont: "showme",
          },
          personId: "peppap",
          quote:
            "My most favorite thing in the whole world is jumping up and down in muddy puddles!",
          status: "Fictional",
        },
      ],
    };
  },
  methods: {
    select: function (person) {
      this.selectedPersonInfo = this.peopleInfo.find(
        (info) => info.personId === person.id
      );
    },
  },
};
</script>

<template>
  <div id="app">
    <h1>Toucan Object explorer</h1>
    <h2>Test by Guillaume Lodi</h2>

    <ul>
      <li
        v-for="person in people"
        @click="select(person)"
        :key="person.id"
        v-bind:class="{ active: selectedPersonInfo && person.id === selectedPersonInfo.personId }"
      >{{ person.firstName }} {{ person.lastName }}</li>
    </ul>

    <div v-if="selectedPersonInfo" class="info">
      <p v-for="(value, prop) in selectedPersonInfo" :key="prop">
        <b>{{ prop }}:</b>
        {{ typeof value === 'object' ? '[+]' : value }}
      </p>
    </div>

    <!-- Uncomment to start the second part
    <SecondPart />-->
  </div>
</template>

<style lang="css">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
}

li {
  margin: 0 10px;
  margin: 0.25rem auto;
  background: #efefef;
  border-radius: 3px;
  padding: 1rem;
  min-width: 350px;
  cursor: pointer;
}

li.active {
  outline: 2px dotted #3498db;
}

a {
  color: #42b983;
}

.info {
  text-align: left;
  border: 1px solid #efefef;
  border-radius: 3px;
  padding: 1rem;
}
</style>
