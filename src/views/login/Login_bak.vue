<template>
  <div class="login-wrap login-page">
    <div class="login-main">
      <h3 class="login-title">Bingo后台管理系统</h3>
      <el-form :model="LoginForm" :rules="loginRules" ref="LoginForm" @keyup.enter.native="signIn()" status-icon>
        <el-form-item prop="username">
          <el-input v-model="LoginForm.username" placeholder="请输入帐号" autoComplete="on"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="LoginForm.password" type="password" placeholder="请输入密码" autoComplete="on" show-password="true">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 25%" :loading="loading" type="primary" @click="signIn()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import {isLegalUsername, isLegalPassword} from "../../utils/validate";

  export default {
    name: "login_bak",
    data() {
      const legalUsername = (rule, value, callback) => {
        if (!isLegalUsername(value)) {
          callback(new Error('请输入正确的用户名'));
        } else {
          callback();
        }
      };
      const legalPassword = (rule, value, callback) => {
        if (!isLegalPassword(value)) {
          callback(new Error('密码长度至少3位'));
        } else {
          callback();
        }
      };
      return {
        loading: false,
        LoginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [{required: true, trigger: 'blur', validator: legalUsername}],
          password: [{required: true, trigger: 'blur', validator: legalPassword}]
        }
      }
    },
    methods: {
      signIn() {
        this.loading = true;
        let username = this.LoginForm.username;
        let password = this.LoginForm.password;
        this.$axios.post('/login', {
          username: username,
          password: password
        }).then((data) => {
          localStorage.setItem('user_token', data.data.token);
          setTimeout(() => {
            this.loading = false
          });
          this.$router.push('/homePage')
        }).catch(() => {
          setTimeout(() => {
            this.loading = false
          })
        })
      },
      saveLoginData(data) {
        this.setToken(data.token);
        this.setExpireTime(data.expireTime);
        this.setUser(data.user);
        this.setPermissions(data.permissions);
        this.setRoles(data.roles);
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
      background-image: url('../../assets/gif/login_star.gif');
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
