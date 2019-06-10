<template>
  <!--背景图-->
  <div class="note" :style="note">
    <el-form :inline="true" :model="loginForm" class="demo-form-inline">

    </el-form>
  </div>
</template>

<script>
  import elementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  import user from "./user"

  export default {
    name: "login",
    data() {
      return {
        activeName: "ABC",
        loginForm: {
          username: 'fisher',
          password: 'abc123'
        },
        loginRules: {
          username: [{
            required: true,
            trigger: 'blur',
            validator: ''
          }],
          password: [{
            required: true,
            trigger: 'blur',
            validator: ''
          }]
        },
        loading: false,
        pwdType: 'password',
        /*背景图设置*/
        note: {
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
          backgroundImage: 'url(' + require('../../assets/bg.png') + ')',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat'
        }
      }
    },
    components: [elementUI, user]
  }
</script>

<style>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 15px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 0 auto;
    width: 100%;
    padding: 35px 35px 15px 35px;
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    position: absolute;
    top: 120px;
    right: 50px;
    left: 100px;
  }

  label {
    width: 70px;
    text-align: left;
  }

  .form-control {
    width: 270px;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
  }

  .remember {
    width: 250px;
    text-align: left;
  }

  .forget {
    width: 500px;
    text-align: right;
    font-size: 14px;
    font-family: PingFang SC;
  }

  .remFor {
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .tabsUser {
    display: inline-block;
    margin-left: 0px;
    margin-right: 0px;
    text-align: center;
    font-size: 25px;
  }
</style>
