<template>
    <div class="wrap">
      <ul>
        <li v-for="(article,index) in articles" :key="index">
          <div class="article">
            <div class="article-info">
                <a href="#">{{ article.title }}</a>
                <p class="art-create-date">发表于 {{ article.insertTime }}</p>
                <p class="art-content">
                    {{ article.content }}
                </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';  // 引入axios
  import config from '@/config/config';

  export default {
    name: "Article",
    data() {
        return {
            articles: [
                
            ]
        }
    },
    methods: {
        listArticle() {
            axios.post(`${config.API_BASE_URL}/article/page`, {
                    headers: { 'Content-Type': 'application/json' }  
                })
                .then(response => {
                    this.articles = response.data.data.records; // 将返回的数据赋值给articles
                    console.log(response.data.data.records)
                })
                .catch(error => {
                    console.error("Error fetching articles:", error);
                });
        }
    },
    mounted() {
        const params = {
            pageSize: 10
        }
        this.listArticle(params);
    }
  };
  </script>
  
  <style scoped>

    ul{
        list-style: none;
    }

    li{
        margin-top: 20px;
    }
    .wrap {
        width: 60%;
        margin: 0 auto;
    }
    
    .article {
        font-family: 'alipuhui';
        width: 100%;
        height: 200px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        transition: all 0.3s;
        overflow: hidden;
        padding: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 20px;
        margin-top: 40px;
    }

    .article-info {
        margin-top: 45px;
        height: 150px;
    }
    
    .article:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
    
    .article a {
        font-size: 25px;
        margin: 0;
        color: black;
    }
    
    .article .art-create-date {
        font-size: 10px;
    }
    
    .article .art-content {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 10px;
        color: #64676b;
    }
  </style>
  