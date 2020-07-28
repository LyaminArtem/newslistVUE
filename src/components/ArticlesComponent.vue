<template>
  <ul>
    <li v-for="article in articles" :key="article.id">
      {{ article.title }} SOURCE: {{ article.source }}
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'ArticlesComponent',
    props: {
      articles: {}
    }
  }
</script>
<style scoped>
  b {
    color: red;
  }

  ul > li {
    list-style: none;
  }
</style>