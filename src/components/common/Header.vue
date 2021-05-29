<template>
  <div style="height: 60px">
    <div id="header">
      <img id="markpng" src="../../assets/mark.png" width="60px" height="60px" alt="failed to load mark.png">
      <p id="header_p"><span id="header_span">{{ systemName }}</span></p>
      <div id="topicon">
        <el-tooltip class="item" effect="dack" content="Questions" placement="bottom">
          <el-button type="text" class="el-icon-question"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dack" content="About us" placement="bottom">
          <el-button type="text" class="el-icon-info"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dack" content="Log out" placement="bottom">
          <el-button type="text" class="el-icon-switch-button"></el-button>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      systemName: "标题"
    }
  },
  //name: "Header"
}
</script>

<style scoped>
#header {
  height: 60px;
  background-color: aliceblue;
}

#markpng {
  position: absolute;
  left: 65px;
  top: 0;
}

#header_p {
  position: relative;
  left: 135px;
  top: 8px;
  font-size: 25px;
  font-weight: bold;
  color: black;
  font-family: "Kaiti SC";
}
#header_span{
  font-size: 40px;
  font-weight: bold
}

#topicon {
  position: relative;
  text-align: right;
  top: -45px;
  right: 30px;
}

.el-icon-question {
  font-size: 16px;
  color: #3c4850;
}

.el-icon-question:hover {
  color: #a1c4db;
}

.el-icon-switch-button {
  font-size: 16px;
  color: #3c4850;
}

.el-icon-switch-button:hover {
  color: #a1c4db;
}

.el-icon-info {
  font-size: 16px;
  color: #3c4850;
}

.el-icon-info:hover {
  color: #a1c4db;
}

</style>