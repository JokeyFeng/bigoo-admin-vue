<template>
  <div class="register">
    <el-form :model="registerForm" :rules="registerRules" ref="registerForm" @keyup.enter.native="register">
      <h1 class="system-title">Bigoo管理系统</h1>
      <el-form-item prop="username">
        <el-input v-model="registerForm.username"
                  placeholder="请输入注册帐号"
                  autoComplete="on">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="registerForm.password"
                  type="password"
                  placeholder="请输入密码"
                  autoComplete="on" show-password>
        </el-input>
      </el-form-item>
      <el-form-item prop="password2">
        <el-input v-model="registerForm.password2"
                  type="password"
                  placeholder="确认密码"
                  autoComplete="on" show-password>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          style="width: 100%;font-size: larger"
          type="primary"
          :loading="registerBtn"
          :disabled="registerBtn"
          @click.stop.prevent="register">立即注册
        </el-button>
        <a class="login" style="float: right;line-height: 40px" @click="returnLogin">使用已有账户登录</a>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data() {
      return {
        registerForm: {
          username: '',
          password: '',
          password2: ''
        },
        registerRules: {
          username: [{required: true, trigger: 'blur', message: '至少6个字符'}],
          password: [{required: true, trigger: 'blur', message: '至少6个字符'}]
        },
        registerBtn: false
      }
    },
    computed: {},
    components: {},
    watch: {},
    methods: {
      //注册
      register() {
        let _username = this.registerForm.username;
        let _password = this.registerForm.password;
        this.$axios.post('/v1/user/register', {
          username: _username,
          password: _password
        }).then((data) => {
          console.log(data.message);
          this.returnLogin();
        })

      },
      returnLogin() {
        this.$emit('register', 'Login')
      }
    }
  }
</script>

<style scoped lang="less">
  .register {
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
</style>
