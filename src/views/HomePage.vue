<template>
  <div class="HomePage">
    <h1>{{ msg }}</h1>
    <div>
      <ul v-for="user in userList">{{user.username}}</ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'HomePage',
    data: function () {
      return {
        msg: 'Welcome to Bigoo Shopping Station',
        userList: [],
      }
    },
    methods: {
      getUserList() {
        this.$axios.get('/v1/user/list').then((response) => {
          this.userList = response.data.list;
        });
      }
    },
    created() {
      this.getUserList();
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
</style>
