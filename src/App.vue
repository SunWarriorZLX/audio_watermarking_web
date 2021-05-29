<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <el-container direction="vertical">
      <el-header class="shadow_out">
      </el-header>
      <!--      <el-main>-->
      <!--      </el-main>-->
      <!--      <el-footer>-->
      <!--      </el-footer>-->
        <router-view>
        </router-view>
      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import header from './components/common/Header.vue'
import footer from './components/common/Footer'
// import loginUser from './components/login/LoginUser'

export default {
  name: 'App',
  components: {
    // HelloWorld
    'el-header': header,
    'el-footer': footer,
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
