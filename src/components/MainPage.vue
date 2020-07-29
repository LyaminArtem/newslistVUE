<template>
  <div>
    <!--    HEADER     -->
    <div>
      <Sources :sources="sources"
               v-on:show_choice="handle_show_choice"/>
      <RefreshButton/>
      <LayoutSelector v-on:layout_changed="handle_layout_change"/>
    </div>
    <!--    MAIN     -->
    <ArticlesComponent :articles="articles"
                       :choice="choice"
                       :amount="amount"
                       :current-layout="currentLayout"
    />
  </div>
</template>


<script>
  import {s_data} from '@/components/stub_data';
  import Sources from '@/components/Sources';
  import RefreshButton from "@/components/RefreshButton";
  import ArticlesComponent from "@/components/ArticlesComponent";
  import LayoutSelector from "@/components/LayoutSelector";


  export default {
    name: "MainPage",
    components: {
      ArticlesComponent,
      Sources,
      RefreshButton,
      LayoutSelector,
    },
    data: function () {
      return {
        articles: s_data,
        choice: "",
        amount: 4,
        currentLayout: "",
        sources: ["all", "lenta", "mosru"],
        test_data: "test data string",
      }
    },
    created: function () {
      console.log("entered created scope")
      for (let article_index in this.articles) {
        let a = this.articles[article_index]
        a.id = Math.random()
      }

      this.choice = this.sources[0]
      this.currentLayout = "desktop"

    },
    methods: {
      handle_show_choice: function (value) {
        this.choice = value;
      },
      handle_layout_change: function (value) {
        console.log(`layout changed to: ${value}`)
        switch (value) {
          case "desktop":
            this.amount = 4;
            break;
          case "mobile":
            this.amount = 3;
            break;
        }
        console.log(`amount changed to: ${this.amount}`)
      }
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