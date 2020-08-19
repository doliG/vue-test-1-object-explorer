<script>
export default {
  name: "Tree",
  props: ["obj"],
};
</script>

<template>
  <ul class="tree">
    <li v-for="(value, prop) in obj" :key="prop">
      <b>{{ prop }}:</b>
      <Tree v-if="typeof value === 'object'" :obj="value" />
      <span v-else>{{ value }}</span>
    </li>
  </ul>
</template>

<style>
</style>