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
          username: [{required: true, trigger: 'blur', message: ''}],
          password: [{required: true, trigger: 'blur', message: ''}]
        }
      }
    },
    computed: {},
    components: {},
    watch: {},
    methods: {
      //注册
      register() {

      }
    }
  }
</script>

<style scoped>

</style>
