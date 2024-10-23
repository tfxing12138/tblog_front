<template>
    <div class="wrap">
        <ul>
            <li v-for="(article, index) in articles" :key="index">
                <div class="article">
                    <div class="article-info">
                        <a href="#">{{ article.title }}</a>
                        <p class="art-create-date"><svg t="1729410414663" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3329" width="200" height="200"><path d="M378.857631 467.61921l-88.76158 0 0 88.76158 88.76158 0L378.857631 467.61921zM556.38079 467.61921l-88.76158 0 0 88.76158 88.76158 0L556.38079 467.61921zM733.903949 467.61921l-88.76158 0 0 88.76158 88.76158 0L733.903949 467.61921zM822.665529 156.952658l-44.38079 0 0-88.76158-88.76158 0 0 88.76158L334.475817 156.952658l0-88.76158-88.76158 0 0 88.76158-44.38079 0c-49.262984 0-88.317465 39.942711-88.317465 88.76158l-0.444115 621.332081c0 48.818869 39.498596 88.76158 88.76158 88.76158l621.332081 0c48.818869 0 88.76158-39.942711 88.76158-88.76158L911.427108 245.714238C911.427108 196.895369 871.484398 156.952658 822.665529 156.952658zM822.665529 867.046319 201.333448 867.046319 201.333448 378.857631l621.332081 0L822.665529 867.046319z" p-id="3330"></path></svg>发表于 {{ article.insertTime }}</p>
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
                <div class="article-right-info">
                    <a href="#">
                        <div class="article-title">
                            文章
                        </div>
                        <div class="article-count">
                            {{ articleCount }}
                        </div>
                    </a>
                    <a href="#">
                        <div class="article-tag-title">
                            标签
                        </div>
                        <div class="article-tag-count">
                            {{ articleTagCount }}
                        </div>
                    </a>
                    <a href="#">
                        <div class="article-class-title">
                            分类
                        </div>
                        <div class="article-class-count">
                            {{ articleClassCount }}
                        </div>
                    </a>
                </div>
                <div class="personal">
                    <a class="contact-me" href="#">联系我</a>
                    <a class="about-me" href="#">关于我</a>
                </div>
            </div>
            <div class="notice">
                
                <span class="notice-title"><svg t="1729408347398" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1529" width="200" height="200"><path d="M773.51255 624.357997c51.065026-12.69309 88.902796-58.8442 88.902796-113.832582s-37.83777-101.139491-88.902796-113.834628L773.51255 114.634854c0.267083-2.090615 0.419556-4.228301 0.419556-6.395664 0-26.134217-21.189601-47.323818-47.323818-47.323818-10.766205 0-20.712741 3.598968-28.674063 9.658987L349.424786 297.555953 197.753411 297.555953c-21.667485 0-39.078017 17.428951-39.078017 38.924521l0 348.08886c0 21.437242 17.486256 38.923498 39.078017 38.923498l150.448524 0 0 0.171915 347.688747 225.148853c8.265244 7.062859 18.99461 11.319813 30.716582 11.319813 26.134217 0 47.323818-21.189601 47.323818-47.323818 0-2.166339-0.152473-4.305049-0.419556-6.395664L773.511527 624.357997z" fill="#cdcdcd" p-id="1530"></path></svg>公告</span>
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
            articleCount: 0,
            articleTagCount: 0,
            articleClassCount: 0,
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
                    this.articleCount = response.data.data.total;
                    console.log(response.data)
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
  
<style>

ul {
    list-style: none;
    width: 68%;
}

li {
    margin-top: 20px;
}

.wrap {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.author-container {
    width: 300px;
    height: 100%;
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

.article-right-info {
    width: 80%;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto 10px auto;
}

.article-right-info a{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000000;
    margin-left: 5px;
    transition: transform 0.2s;
}

.article-right-info a:first-child {
    margin-left: 0;
}

.article-right-info a>div:nth-child(2) {
    margin-top: 5px;
    font-size: 25px;
}

.article-right-info a>div:nth-child(1) {
    font-size: 12px;
}

.article-right-info a {
    width: 80px;
    height: 40px;
    padding-bottom: 8px;
    border-radius: 5px;
}

.article-right-info a:hover {
    color: #fff; /* 确保文字颜色独立 */
    background-color: #f8d7b7;
    opacity: 1; /* 保持文字完全不透明 */
    backdrop-filter: blur(5px); /* 添加背景模糊效果 */
    -webkit-backdrop-filter: blur(5px); /* 兼容性处理 */
    transform: scale(1.2); /* 悬浮时放大1.1倍 */
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
    margin-top: 15px;
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
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    width: 270px;
    height: 150px;
    overflow: hidden;
    line-height: 20px;
    margin-top: 60px;
    padding: 20px;
    box-sizing: border-box;
}

.notice:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.notice>span{
    display: block;
}

.notice>span:nth-child(1) {
    margin-bottom: 20px;
}

.notice>span:nth-child(2) {
    text-indent: 2em;
}

.notice>span>.icon {
    font-size: 20px;
}

.author-info {
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    width: 270px;
    height: 320px;
    overflow: hidden;
    line-height: 20px;
    margin-top: 56px;
    position: relative;
}

.author-info:hover{
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.avatar-img {
    width: 120px;
    height: 120px;
    transition: all 0.5s ease;
    border: 5px solid #fae4cd;
    border-radius: 50%;
    margin: 20px auto 8px auto;
    overflow: hidden;
    display: block;
}

.avatar-img img {
    width: 100%;
    height: 100%;
}

/* .avatar-img:hover {
    transform: rotate(180deg);
} */

.author-name {
    font-family: 'alipuhui';
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.2em;
    display: flex;
    justify-content: center;
    margin: 20px 0 5px 0;
}

.autor-info:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.personal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 55%;
    margin: 0 auto;
}

.contact-me{
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 3px;
    font-size: 14px;
    width: 50px;
    text-align: center;
    color: #fff;
    background-color: #000000;
}

.contact-me:hover{
    /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); */
    background-color: #f8d7b7;
    border: 1px solid #f8d7b7;
}

.about-me{
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 3px;
    font-size: 14px;
    width: 50px;
    text-align: center;
    color: #000000;
    background-color: #fff;
}

.about-me:hover{
    background-color: #f8d7b7;
    border: 1px solid #f8d7b7;
    color: #fff;
}

.art-create-date>.icon{
    font-size: 16px;
    margin-right: 3px;
}

</style>
  