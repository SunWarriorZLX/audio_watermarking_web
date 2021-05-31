<template>
  <div style="margin:0px;overflow-x:hidden">
<!--    <el-row class="tac">-->
<!--      <el-col :span="12">-->
        <el-menu
            ref="elmenu"
            @open="handleOpen"
            @close="handleClose"
            :default-active="this.$route.path.substring(1)"
            unique-opened
            text-color=black
            router="true">

          <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
            <template slot="title">
              <span style="font-size: large;color: black" v-text="item.name"></span>
            </template>
            <el-menu-item-group v-for="sub in item.sub" :key="sub.componentName">
              <el-menu-item :index="sub.componentName" v-text="sub.name">
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
<!--      </el-col>-->
<!--    </el-row>-->
  </div>
</template>

<script>
import leftMenu from '../globle/leftMenu.config.js';

export default {
  // name: "LeftMenu",
  data() {
    return {
      menu: leftMenu
    }
  }
}
</script>

<style scoped>

</style>