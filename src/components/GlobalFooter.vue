<template>
  <div class="footer">
    <div style="color: coral" class="copyright">
      CopyRight@2019~2022 Bigoo Shop Station
    </div>
  </div>
</template>

<script>
  export default {
    name: 'global-footer',
  }
</script>

<style lang="less" scoped>
  .footer {
    padding: 0 16px;
    margin: 24px 0;
    text-align: center;
    .copyright {
      color: rgba(0, 0, 0, .45);
      font-size: 14px;
      i {
        font-size: .8rem !important;
      }
    }
  }
</style>
