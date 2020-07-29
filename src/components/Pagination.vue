<template>
  <div :value="amount" :len="atsh_len">
    <a href="#"
       @click="onclick_page(pageNumber)"
       :key="index"
       :class="{active: pageNumber === clickedPage}"
       v-for="(pageNumber, index) in pagesToShow"
    >
      {{ pageNumber }}
    </a>
    <br>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    data: function () {
      return {
        pagesAmount: Number,
        clickedPage: 1,
      }
    },
    props: {
      articles_length: Number, //30
      amount: Number,
      choice: String,
      atsh_len: Number,
    },
    created: function () {
      this.pagesAmount = Math.ceil(this.atsh_len / this.$props.amount)
    },
    beforeUpdate: function () {
      console.log(this.choice)
      this.pagesAmount = Math.ceil(this.atsh_len / this.$props.amount)
      if (this.clickedPage > this.pagesAmount) {
        this.onclick_page(this.pagesAmount)
      }
    },
    methods: {
      onclick_page: function (pageNumber) {
        this.$emit('current_page_changed', pageNumber)
        this.clickedPage = pageNumber

      },
    },
    computed: {
      pagesToShow: function () {
        let result = []

        // push first
        result.push(1)

        // push middle
        for (let i = this.clickedPage - 3; i <= this.clickedPage + 3; i++) {
          if (i > 1 && i < this.pagesAmount) {
            result.push(i)
          }
        }

        // push last
        result.push(this.pagesAmount)
        return result
      }
    }
  }
</script>

<style scoped>
a.active {
  color: deeppink;
}
</style>