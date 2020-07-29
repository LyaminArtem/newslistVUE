<template>
  <div>
<!--    <a href="#" @click="return(3);">picture</a> <br>-->
    <a href="#" @click="LayoutChange('mobile')">mobile</a> <br>
    <a href="#" @click="LayoutChange('desktop')">desktop</a>
  </div>
</template>

<script>
  export default {
    name: "LayoutSelector",
    data: function () {
      return {
        currentLayout: "",
      }
    },
    created: function () {
      this.LayoutChange("desktop")
    },
    methods: {
      LayoutChange: function (value) {
        this.$emit('layout_changed', value)
        this.currentLayout = value
      }
    }
  }

</script>

<style scoped>
a.active {}
</style>