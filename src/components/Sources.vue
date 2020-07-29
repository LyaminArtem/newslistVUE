<template>
  <div>
    <a href="#"
       @click="onclick_source($event.target)"
       v-bind="{ ['data-custom']: `${source}` }"
       v-bind:key="index"
       v-for="(source, index) in sources">
      {{source}}
    </a>
  </div>
</template>

<script>
  export default {
    name: "sources",
    props: ['sources'],
    methods: {
      onclick_source: function (target) {
        let value = target.getAttribute("data-custom")
        this.$emit('show_choice', value)
      }
    }
  }
</script>
<style scoped>

</style>