<template>
  <div class="HomePage">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data: function () {
    return {
      msg: 'Welcome to Bigoo Shopping Station'
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .login-center-layout {
    background: #409EFF;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
  }
</style>
