<template>
  <div>
    <Header />
    <div class="content">
      <Article />
      <Author />
    </div>
  </div>

</template>

<script>
import Header from './components/Header.vue';
import Article from './components/Article.vue';
import Author from './components/Author.vue';

export default {
  name: 'App',
  components: {
    Header,
    Article,
    Author
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100vh;
}
</style>
