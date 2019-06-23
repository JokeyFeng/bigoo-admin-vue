<template>
  <div class="login">
    <el-form :model="LoginForm" :rules="loginRules" ref="LoginForm" @keyup.enter.native="signIn()" status-icon>
      <el-tabs v-model="activeKey" @tab-click="handleTabsChange">
        <el-tab-pane label="账号密码登录" name="1" :key="1">
          <el-form-item prop="username">
            <el-input v-model="LoginForm.username" placeholder="请输入帐号" autoComplete="on">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="LoginForm.password" type="password" placeholder="请输入密码" autoComplete="on" show-password="true">
            </el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="手机号登录" name="2" :key="2">
          <el-form-item prop="mobile">
            <el-input v-model="LoginForm.mobile" placeholder="请输入手机号" autoComplete="on">
            </el-input>
          </el-form-item>
          <el-form-item prop="verifyCode">
            <el-input v-model="LoginForm.verifyCode" placeholder="请输入验证码" autoComplete="on">
            </el-input>
            <el-button @click="getCaptcha">获取验证码</el-button>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
      <div>
        <a style="float: right" @click="register">注册账户</a>
      </div>
      <el-form-item>
        <el-button style="width: 25%" :loading="loading" type="primary" @click="signIn()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import {isLegalUsername, isLegalPassword} from "../../utils/validate";

  export default {
    name: "login",
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
        activeKey: '1',
        loading: false,
        LoginForm: {
          username: '',
          password: '',
          mobile: '',
          verifyCode: ''
        },
        loginRules: {
          username: [{required: true, trigger: 'blur', validator: legalUsername}],
          password: [{required: true, trigger: 'blur', validator: legalPassword}]
        }
      }
    },
    methods: {
      signIn() {
        //账号密码登录
        console.log(this.activeKey);
        if (this.activeKey === '1') {
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
        }
        //手机号登录
        if (this.activeKey === '2') {
          alert("暂未开发")
        }
      },
      /*  saveLoginData(data) {
          this.setToken(data.token);
          this.setExpireTime(data.expireTime);
          this.setUser(data.user);
          this.setPermissions(data.permissions);
          this.setRoles(data.roles);
        },*/
      handleTabsChange(val,event) {
        console.log(val,event);
        this.activeKey = val;
      },
      getCaptcha() {
        alert('暂未开发')
      },
      register() {
        this.$emit('register', 'Register')
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1em;
    width: 300px;
  }
</style>
