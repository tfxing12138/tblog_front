<template>
    <div class="top-back">
      <a href="#">link の blog</a>
      <div class="header">
        <h1>link の blog</h1>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>


  .top-back {
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url(../assets/img/header-back.jpeg);
    background-position: center;
    background-size: cover;
  }
  
  .header {
    width: 80%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .header h1 {
    font-family: 'pingfangzhuiguang';
    font-size: 80px;
    margin-bottom: 60px;
    color: #fff;
  }
  
  .top-back > a {
    font-size: 24px;
    font-family: 'pingfangzhuiguang';
    color: #fff;
    position: absolute;
    margin-top: 10px;
    margin-left: 20px;
    text-decoration: none;
  }
  </style>
  