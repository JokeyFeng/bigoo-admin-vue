<template>
  <div class="container">
    <div class="content">
      <component :is="componentName" @register="handleRegister"></component>
    </div>
<!--    <global-footer></global-footer>-->
  </div>
</template>

<script>
  import Login from './Login'
  import Register from './Register'
  import GlobalFooter from '../../components/GlobalFooter'

  export default {
    name: 'common',
    data() {
      return {
        componentName: 'Login'
      }
    },
    components: {
      Login,
      Register,
      GlobalFooter
    },
    methods: {
      handleRegister(value) {
        console.log(value);
        this.componentName = value;
      }
    }
  }
</script>

<style lang="less" scoped>
/*    .container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: auto;
      background-image: url('../../assets/gif/login_fish.png');
      background-size: 100%;
      .content {
        padding: 32px 0;
        flex: 1
      }
    }*/
  .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(38, 50, 56, .6);
    overflow: hidden;
    &:before {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      content: "";
      background-image: url('../../assets/gif/login_fish.png');
      background-size: cover;
    }
    .content {
      padding: 32px 0;
      flex: 1
    }
  }
</style>
