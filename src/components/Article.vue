<template>
    <div class="wrap">
        <ul>
            <li v-for="(article, index) in articles" :key="index">
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
            <li v-if="!articles.length">
                <div class="article">
                    <div class="article-info">
                        <p class="art-content">
                            你还没有开始写博客哦~
                        </p>
                    </div>
                </div>
            </li>
        </ul>

        <div class="author-container">
            <div class="author-info">
                <div class="avatar-img">
                    <img src="../assets/img/avatar.jpg" alt="avatar">
                </div>
                <div class="author-name">
                    {{ authorName }}
                </div>
            </div>
            <div class="notice">
                <i class="fas fa-bullhorn fa-shake"></i>
                <span class="notice-title">公告</span>
                <span class="notice-content">{{ notice }}</span>
            </div>
        </div>
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

            ],
            authorName: "link",
            notice: "欢迎来到我的博客，接下来会在这个地址更新我的日常学习笔记，生活日常还有各种有趣的事情。"
        }
    },
    methods: {
        listArticle() {
            axios.post(`${config.API_BASE_URL}/article/page`, {
                headers: {
                    'Content-Type': 'application/json'
                }
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
        const params = {}
        this.listArticle(params);
    }
};
</script>
  
<style scoped>
ul {
    list-style: none;
    width: 60%;
}

li {
    margin-top: 20px;
}

.wrap {
    width: 65%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
}

.article {
    font-family: 'alipuhui';
    width: 100%;
    height: 160px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    overflow: hidden;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 20px;
    margin-top: 40px;
}

.article-info {
    margin-top: 20px;
    height: 100px;
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
    font-size: 14px;
}

.author-container {
    margin-left: 120px;
}


.notice-content {
    font-family: 'alipuhui';
    padding-bottom: 6px;
    font-size: 12px;
    text-align: left; /* 向左对齐 */
    margin: 0; /* 去掉默认的 margin */
    display: block; /* 确保每个内容在新行上 */
}

.notice-title {
    font-family: 'alipuhui';
    font-size: 18px;
    text-align: left;
    margin: 0;
    display: block;
}

.notice {
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    width: 270px;
    height: 100px;
    overflow: hidden;
    line-height: 20px;
    margin-top: 60px;
    padding: 30px; 
}

.notice:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* 可以在此处编写样式 */
.author-info {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    width: 270px;
    height: 300px;
    overflow: hidden;
    line-height: 20px;
    margin-top: 56px;
    padding: 30px;
    position: relative;
}

.avatar-img {
    width: 120px;
    height: 120px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.5s ease;
}

.avatar-img:hover {
    transform: rotate(180deg);
}

.author-name {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 135px;
    font-family: 'alipuhui';
    font-size: 20px;
    font-weight: bold;
}

.autor-info:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}


.avatar-img img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.notice {
    display: flex;
    align-items: center;
}
</style>
  