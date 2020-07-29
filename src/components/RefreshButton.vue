<template>
  <div>
    <button v-on:click="inner_onclick">REFRESH</button>
  </div>
</template>

<script>
  export default {
    name: "RefreshButton",
    data: function () {
      return {
        testModel: "",
        checked: true
      };
    },
    methods: {
      inner_onclick: function () {
        console.log("inner test")
      }
    }
  }
</script>

<style scoped>

</style>