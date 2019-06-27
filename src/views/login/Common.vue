<template>
  <div class="container">
   <!-- <div class="content">
      <div class="top">
        <div class="header">
        </div>
        <div class="desc"></div>
      </div>
      <component class="main-content" :is="componentName" @register="handleRegister"></component>
    </div>-->
    <component class="main-content" :is="componentName" @register="handleRegister"></component>
  </div>
</template>

<script>
  import Login from './Login'
  import Register from './Register'

  export default {
    name: 'common',
    data() {
      return {
        componentName: 'Login'
      }
    },
    components: {
      Login,
      Register
    },
    methods: {
      handleRegister(value) {
        this.componentName = value;
      }
    }
  }
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    background-image: url('../../assets/gif/login_star.gif');
    background-size: 100%;
    .content {
      padding: 32px 0;
      flex: 1;
      @media (min-width: 768px) {
        padding: 116px 0 10px;
      }
      .top {
        text-align: center;
        .header {
          height: 50px;
          line-height: 50px;
          a {
            text-decoration: none;
          }
          .logo {
            width: 40px;
            height: 19px;
            vertical-align: center;
            margin-right: 16px;
          }
          .title {
            font-size: 28px;
            color: rgba(0, 0, 0, .85);
            font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 6px;
          }
        }
        .desc {
          font-size: 14px;
          color: rgba(0, 0, 0, .45);
          margin-top: 12px;
          margin-bottom: 40px;
        }
      }
      .main-content {
        width: 368px;
        margin: 0 auto;
        @media screen and (max-width: 576px) {
          width: 95%;
        }
        @media screen and (max-width: 320px) {
          .captcha-button {
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
