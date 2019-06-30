<template>
  <div class="login">
    <el-form :model="LoginForm" :rules="loginRules" ref="LoginForm" @keyup.enter.native="signIn()">
      <h1 class="system-title">Bigoo管理系统</h1>
      <el-tabs v-model="activeKey" @tab-click="handleTabsChange(activeKey,$event)">
        <el-tab-pane label="账号密码登录" name="1">
          <el-form-item prop="username">
            <el-input v-model="LoginForm.username"
                      placeholder="请输入帐号"
                      autoComplete="on">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="LoginForm.password"
                      type="password"
                      placeholder="请输入密码"
                      autoComplete="on"
                      show-password>
            </el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="手机号登录" name="2">
          <el-form-item prop="mobile">
            <el-input style="width: 100%"
                      v-model="LoginForm.mobile"
                      placeholder="请输入手机号码"
                      autoComplete="on">
            </el-input>
          </el-form-item>
          <el-form-item prop="verifyCode">
            <el-input style="width: 65.5%"
                      v-model="LoginForm.verifyCode"
                      placeholder="请输入验证码"
                      autoComplete="on">
            </el-input>
            <el-button style="width: 33%" @click="getCaptcha">获取验证码</el-button>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button style="width: 100%;font-size: larger"
                   :loading="loading"
                   type="primary"
                   @click="signIn()">登录
        </el-button>
      </el-form-item>
      <div>
        <el-link type="primary"
                 style="float: right;color: cornflowerblue"
                 @click="register">注册账户
        </el-link>
      </div>
    </el-form>
  </div>
</template>
<script>
  import {isLegalUsername, isLegalPassword} from '../../utils/validate'

  export default {
    name: 'login',
    data() {
      const legalUsername = (rule, value, callback) => {
        if (!isLegalUsername(value)) {
          callback(new Error('请输入正确的账号'))
        } else {
          callback()
        }
      };
      const legalPassword = (rule, value, callback) => {
        if (!isLegalPassword(value)) {
          callback(new Error('密码长度至少6位'))
        } else {
          callback()
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
        //表单没输入内容，无法发起请求
        this.$refs.LoginForm.validate(valid => {
          if (valid) {
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
              alert('暂未开发')
            }
          }
        });
      },
      /*  saveLoginData(data) {
          this.setToken(data.token);
          this.setExpireTime(data.expireTime);
          this.setUser(data.user);
          this.setPermissions(data.permissions);
          this.setRoles(data.roles);
        },*/
      handleTabsChange(val, event) {
        console.log(val, event);
        this.activeKey = val;
      },
      getCaptcha() {
        alert('暂未开发');
        /*this.$axios.get('/verifyCode').then((response) => {

        })*/
      },
      register() {
        this.$emit('register', 'Register');
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
    box-shadow: 1px 0 15px #696969;
    background-color: rgba(38, 50, 56, 0.6);
  }

  .system-title {
    font-size: 20px;
    color: antiquewhite;
  }

  .el-tab-pane.is-active {
    color: #e64545 !important;
  }
</style>
