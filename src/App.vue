<template>
  <div>
    <Header />
    <div class="content">
      <Article ref="article" />
    </div>
  </div>

</template>

<script>
import Header from './components/Header.vue';
import Article from './components/Article.vue';

export default {
  name: 'App',
  components: {
    Header,
    Article
  },
  methods: {
    scrollToArticle() {
      const article = this.$refs.article;
      if(article) {
        article.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100vh;
}

</style>
