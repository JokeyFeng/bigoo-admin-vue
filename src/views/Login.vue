<template>
  <div class="login-wrap login-page">
    <div class="login-main">
      <h3 class="login-title">Bingo后台管理系统</h3>
      <el-form :model="ruleForm" :rules="formRule" ref="ruleForm" @keyup.enter.native="submitForm()" status-icon>
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="帐号" autoComplete="on"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" placeholder="密码" autoComplete="on"
                    showPassword></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn-submit" type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    name: "login",
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        formRule: {
          username: [
            {required: true, message: '帐号必填', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码必填', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm() {
        console.log(this.ruleForm.username);
        console.log(this.ruleForm.password);
        if ('admin' === this.ruleForm.username && '123456' === this.ruleForm.password) {
          this.$router.push({path: '/homePage'})
        } else {
          alert('账户或密码错误');
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .login-wrap.login-page {
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
      background-image: url('../assets/gif/login_star.gif');
      background-size: cover;
    }
    .login-main {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 1em;
      width: 300px;
      box-shadow: 1px 0 15px #696969;
      background-color: rgba(38, 50, 56, 0.6);
    }

    .login-title {
      font-size: 18px;
      color: antiquewhite;
    }
  }
</style>
