<template>
  <div>
    <el-radio-group v-model="embedResultValid" style="margin-top: 10px">
      <el-radio-button v-model="embedResultValid" label="false">嵌入</el-radio-button>
      <el-radio-button v-model="embedResultValid" label="true" disabled>详细结果</el-radio-button>
    </el-radio-group>
    <div class="uploadPage">
      <div class="embedUploadForm" style="width:100%; ;height:100%">
        <el-form class="embedForm" ref="form" :model="form" label-width="auto"
                 style="margin-top: auto;margin-left: auto;width: 100%;height: 100%">
          <el-form-item label="水印图片：">
            <el-upload
                ref="uploadPicture"
                multiple="false"
                action=""
                accept="image/*"
                with-credentials="true"
                :on-success="handlePictureUploadSuccess"
                :on-change="onChangePicture"
                :limit="1"
                :auto-upload="false"
                :file-list="fileList"
                list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传bmp文件</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="待嵌入音频文件：">
            <el-upload
                ref="uploadAudio"
                multiple="false"
                action=""
                accept="audio/*"
                with-credentials="true"
                :on-success="handleAudioUploadSuccess"
                :on-change="onChangeAudio"
                :limit="1"
                :auto-upload="false"
                :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传wav文件</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="embedStart" style="width: 250px;margin-right: 110px">嵌入水印</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div v-show="showResultLink">
      <el-link icon="el-icon-download" href=""><span style="font-size: large">{{ resultLink }}</span></el-link>
    </div>
  </div>

</template>
<script>
// import aplayer from 'vue-aplayer';
let pictureFileList = [];
let audioFileList = [];
export default {
  // name: "Embed",
  data() {
    return {
      embedResultValid: false,
      showResultLink: false
    }
  },
  methods: {
    handlePictureUploadSuccess(response) {
      this.$message({
        message: response.data.message,
        type: "success",
        showClose: true
      });
    },
    handleAudioUploadSuccess(response) {
      this.$message({
        message: response.data.message,
        type: "success",
        showClose: true
      })
    },
    onChangeAudio(file, fileList) {
      this.fileList = fileList;
      audioFileList = fileList;
    },
    onChangePicture(file, fileList) {
      this.fileList = fileList;
      pictureFileList = fileList;
    },
    embedStart() {
      let pictureUploaded = pictureFileList.length > 0;
      let audioUploaded = audioFileList.length > 0;
      if (!pictureUploaded && !audioUploaded) {
        this.$message({
          message: '缺少待嵌入音频和水印图片',
          showClose: true,
          type: "error"
        });
        return false;
      } else if (!pictureUploaded && audioUploaded) {
        this.$message({
          message: '缺少水印图片',
          showClose: true,
          type: "error"
        });
        return false;
      } else if (pictureUploaded && !audioUploaded) {
        this.$message({
          message: '缺少待嵌入音频文件',
          showClose: true,
          type: "error"
        });
        return false;
      } else {
        this.$axios.post('', {
          pictureName: '',
          audioName: ''
        }).then((result) => {
          if (result.data.code === 1) {
            this.$message({
              message: '嵌入成功',
              showClose: true,
              type: "success"
            })

          }
        })
      }
    }
  }
}
</script>

<style scoped>
.embedUploadForm {
  /*border: 1px;*/
  /*border-radius: 2px;*/
  /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
  height: auto;
  width: auto;
  padding: 30px;
  position: relative;

  /*transform: translate(1%,30%);*/
  /*text-align: end;*/
}

</style>