<template>
  <el-footer class="footer">
    <p>{{ copyRight }}</p>
    <p>{{ mail }}</p>
  </el-footer>
</template>

<script>
export default {
  data() {
    return {
      copyRight: "Copyright © www.xxx.xxx.cn, All Rights Reserved.",
      mail: "Email : sunknightzlx@outlook.com"
    }
  }
}
</script>

<style>
.footer {
  height: 40px;
  background-color: white;
  text-align: center;
  font-size: small;
}
</style>