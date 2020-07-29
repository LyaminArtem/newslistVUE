<template>
  <div>
    choice is: {{ choice }}
    <ul>
      <li v-for="article in articlesToShow"
          :key="article.id"
      >
        {{ article.title }} SOURCE: {{ article.source }}
      </li>
    </ul>
    <Pagination :amount="amount"
                :choice="choice"
                :atsh_len="articlesToShowLength"
                v-on:current_page_changed="handle_current_page_changed"
    />
  </div>
</template>
<script>
  import Pagination from "@/components/Pagination";

  export default {
    name: 'ArticlesComponent',
    components: {Pagination},
    data: function () {
      return {
        currentPage: 1,
        articlesToShowLength: this.articles.length
      }
    },
    props: {
      articles: {},
      choice: String,
      currentLayout: String,
      amount: Number,
    },
    methods: {
      handle_current_page_changed: function (value) {
        this.currentPage = value
      },
    },
    watch: {
      articlesToShow: function () {
        let count = this.articles.filter((a) => {
          return (a.source === this.choice || this.choice === "all")
        })
        this.articlesToShowLength = count.length
        console.log(this.articlesToShowLength)
      }
    },
    computed: {
      articlesToShow: function () {
        // arrow function to bind _this_ into context of filter function
        // use let/var or .bind(this) for clarity
        // https://stackoverflow.com/a/49714029
        let result = this.articles.filter(article => {
          return (article.source === this.choice || this.choice === "all")
        })
        let start = (this.currentPage - 1) * this.amount
        let end = start + this.amount
        return result.slice(start, end)
        // for article in articles
        //    if article.source === this.choice || this.choice === "all":
        //      result.push(article)
      }
    }
  }
  // function getFilteredArticlesCount(articles) {
  //   let result = articles.filter(a => {
  //     return (a.source === this.choice || this.choice === "all")
  //   })
  //   return result.length
  // }
</script>
<style scoped>
  b {
    color: red;
  }

  ul > li {
    list-style: none;
  }
</style>
