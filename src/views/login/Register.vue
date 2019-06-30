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
      <el-form-item prop="verifiedPassword">
        <el-input v-model="registerForm.verifiedPassword"
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
          @click.stop.prevent="register">注册
        </el-button>
      </el-form-item>
      <div>
        <el-link type="primary"
                 style="float: right;line-height: 40px"
                 @click="returnLogin">已有账户登录
        </el-link>
      </div>
    </el-form>
  </div>
</template>

<script>
  const levelNames = {
    0: '低',
    1: '低',
    2: '中',
    3: '强'
  };
  const levelClass = {
    0: 'error',
    1: 'error',
    2: 'warning',
    3: 'success'
  };
  const levelColor = {
    0: '#ff0000',
    1: '#ff0000',
    2: '#ff7e05',
    3: '#52c41a'
  };

  export default {
    name: 'register',
    data() {
      return {
        registerForm: {
          username: '',
          password: '',
          verifiedPassword: ''
        },
        state: {
          time: 60,
          smsSendBtn: false,
          passwordLevel: 0,
          passwordLevelChecked: false,
          percent: 10,
          progressColor: '#FF0000'
        },
        registerRules: {
          username: [
            {required: true, trigger: 'blur', message: '请输入注册账号'},
            {validator: this.checkUsernameRepeat}
          ],
          password: [
            {required: true, trigger: 'blur', message: '至少6位密码'},
            {validator: this.checkPasswordLevel}
          ],
          verifiedPassword: [
            {required: true, trigger: 'blur', message: '至少6位密码'},
            {validator: this.verifyPassword}
          ]
        },
        registerBtn: false
      }
    },
    computed: {
      passwordLevelClass() {
        return levelClass[this.state.passwordLevel]
      },
      passwordLevelName() {
        return levelNames[this.state.passwordLevel]
      },
      passwordLevelColor() {
        return levelColor[this.state.passwordLevel]
      }
    },
    methods: {
      //检查用户名是否重复
      checkUsernameRepeat(rule, value, callback) {
        let _username = this.registerForm.username.trim();
        if (_username.length) {
          if (_username.length > 12) {
            callback(new Error('用户名不能超过12个字符'));
          } else if (_username.length < 4) {
            callback(new Error('用户名不能少于4个字符'))
          } else {
            this.$axios.get('/v1/user/exist', {
              params: {
                username: _username
              }
            }).then((data) => {
              if (!data.data) {
                callback();
              } else {
                callback(new Error('抱歉，该用户名已存在'));
              }
            })
          }
        } else {
          callback();
        }
      },
      //检查密码强度
      checkPasswordLevel(rule, value, callback) {
        let level = 0;
        // 判断这个字符串中有没有数字
        if (/[0-9]/.test(value)) {
          level++
        }
        // 判断字符串中有没有字母
        if (/[a-zA-Z]/.test(value)) {
          level++
        }
        // 判断字符串中有没有特殊符号
        if (/[^0-9a-zA-Z_]/.test(value)) {
          level++
        }
        this.state.passwordLevel = level;
        this.state.percent = level * 30;
        if (level >= 2) {
          if (level >= 3) {
            this.state.percent = 100
          }
          callback()
        } else {
          if (level === 0) {
            this.state.percent = 10
          }
          callback(new Error('密码强度不够'))
        }
      },
      //确认密码
      verifyPassword(rule, value, callback) {
        let password = this.registerForm.password;
        if (value === undefined) {
          callback(new Error('请输入密码'))
        }
        if (value && password && value.trim() !== password.trim()) {
          callback(new Error('两次输入的密码不一致'))
        }
        callback()
      },
      //注册
      register() {
        this.$refs.registerForm.validate(valid => {
          if (valid){
            this.registerBtn = true;
            let _username = this.registerForm.username;
            let _password = this.registerForm.password;
            this.$axios.post('/v1/user/register', {
              username: _username,
              password: _password
            }).then((data) => {
              console.log(data.message);
              this.$message.success('注册成功，正在跳转到登录页......');
              setTimeout(() => {
                this.registerBtn = false
              });
              this.returnLogin();
            }).catch(() => {
              this.$message.error('抱歉，账号注册失败');
              setTimeout(() => {
                this.registerBtn = false
              })
            })
          }
        });
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
