<template>
  <div class="extractPage">
    <div class="extractUploadForm" style="width:100%; ;height:100%">
      <el-form class="embedForm" ref="form" :model="form" label-width="auto"
               style="margin-top: auto;margin-left: auto;width: 100%;height: 100%">
        <el-form-item label="待提取音频：">
          <el-upload
              ref="uploadExtractedAudio"
              multiple="false"
              action=""
              accept="image/*"
              with-credentials="true"
              :on-success="handleExtractedAudioUploadSuccess"
              :on-change="onChangeExtractedAudio"
              :limit="1"
              :auto-upload="false"
              :file-list="fileList"
              list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传wav文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="extractStart" style="width: 250px;margin-right: 110px">提取水印</el-button>
        </el-form-item>
        <el-form-item v-show="showExtractResult" label="提取结果：">
          <el-image class="resultImg"
                    :src="imageUrl1"
                    :fit="fill">
            <div slot="error">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
let audioFileList = [];
export default {
  data() {
    return {
      showExtractResult: false,
      imageUrl1: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    }
  },
  methods: {
    handleExtractedAudioUploadSuccess(response) {
      this.$message({
        message: response.data.message,
        type: "success",
        showClose: true
      });
    },
    onChangeExtractedAudio(file, fileList) {
      this.fileList = fileList;
      audioFileList = fileList;
    },
    extractStart() {
      let audioUploaded = audioFileList.length > 0;
      if (!audioUploaded) {
        this.$message({
          message: '缺少音频文件',
          showClose: true,
          type: "error"
        });
        return false;
      } else {
        this.$axios.post('', {
          audioName: '',
        }).then((result) => {
          if (result.data.code === 1) {
            this.$message({
              message: '提取成功',
              showClose: true,
              type: "success"
            });
          }
        })
      }
    }
  }

}
</script>

<style scoped>
.extractUploadForm {
  /*border: 1px;*/
  /*border-radius: 2px;*/
  /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
  height: auto;
  width: auto;
  padding: 30px;
  position: relative;
}

.resultImg {
  width: 200px;
  height: 200px;
}
</style>