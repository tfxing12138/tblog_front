<template>
  <div>
    <Header />
    <div class="content">
      <Article />
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
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100vh;
}

</style>
