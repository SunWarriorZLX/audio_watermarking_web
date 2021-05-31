<template>
  <el-container>
    <el-aside width="200px">
      <v-leftMenu>
      </v-leftMenu>
    </el-aside>
    <el-main class="shadow_in_img" style="margon-top:10px;height:1000px"
             :style="{backgroundImage: 'url(' + backImg + ')' }">
      <el-row type="flex" justify="center">
        <el-col :span="21">
          <router-view></router-view>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import leftMenu from './LeftMenu.vue';
import backImg from '@/assets/back.jpg'

export default {
  // name: "OverallInterface",
  data() {
    return{
      backImg
    }
  },
  components: {
    'v-leftMenu': leftMenu,
  },
  methods: {},
  created() {
  }
}
</script>

<style scoped>

</style>