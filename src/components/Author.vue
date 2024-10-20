<template>
    <div class="autor-container">
        <div class="autor-info">
            <div class="avatar-img">
                <img src="../assets/img/avatar.jpg" alt="avatar">
            </div>
            <div class="avatar-name">
                {{ authorName }}
            </div>
        </div>
        <div class="notice">
            <i class="fas fa-bullhorn fa-shake"></i>
            <span class="notice-content">{{ notice }}</span>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Author",
    data() {
        return {
            authorName: "link",
            notice: "欢迎来到我的博客，接下来会在这个地址更新我的日常学习笔记，生活日常还有各种有趣的事情。"
        }
    }
  };
  </script>
  
  <style scoped>



    .notice-content {
        font-family: 'alipuhui';
    }

    /* 可以在此处编写样式 */
    .autor-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        transition: all 0.3s;
        width: 270px;
        height: 350px;
        overflow: hidden;
        line-height: 20px;
        margin-top: 40px;
    } 
    .autor-container:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }

    .avatar-img {
        width: 80px;
        height: 80px;
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