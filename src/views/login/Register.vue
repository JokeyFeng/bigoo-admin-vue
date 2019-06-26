<template>
  <div class="register">
    <el-form :model="registerForm" :rules="registerRules" ref="registerForm" @keyup.enter.native="register">
      <el-form-item prop="username">
        <el-input v-model="registerForm.username"
                  placeholder="请输入注册帐号"
                  autoComplete="on">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="LoginForm.password"
                  type="password"
                  placeholder="请输入密码"
                  autoComplete="on" show-password>
        </el-input>
      </el-form-item>
      <el-form-item prop="password2">
        <el-input v-model="LoginForm.password2"
                  type="password"
                  placeholder="确认密码"
                  autoComplete="on" show-password>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          style="width: 25%"
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

      },
      returnLogin() {
        this.$emit('register', 'Login')
      }
    }
  }
</script>

<style scoped>

</style>
