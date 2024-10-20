<template>
    <div>
      <pagination
        :data="paginationData"
        @pagination-change-page="changePage"
      />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { Pagination } from 'vue-pagination-3';
  
  export default {
    components: { Pagination },
    setup() {
      const currentPage = ref(1);
      const pageSize = 10;
      const items = ref([...Array(100).keys()]); // 示例数据
      const paginationData = ref([]);
  
      const changePage = (page) => {
        currentPage.value = page;
        updatePaginationData();
      };
  
      const updatePaginationData = () => {
        const start = (currentPage.value - 1) * pageSize;
        paginationData.value = items.value.slice(start, start + pageSize);
      };
  
      updatePaginationData();
  
      return { paginationData, changePage };
    },
  };
  </script>
  