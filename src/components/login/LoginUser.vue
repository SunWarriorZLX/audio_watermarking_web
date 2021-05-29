<template>
  <div id="loginUser" class="login_div" style="width: 480px">
    <span class="login_span">用户登录</span>
    <el-divider></el-divider>
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="120px">
      <el-form-item prop="user" label="用户名：">
        <el-input v-model="loginForm.user"></el-input>
      </el-form-item>

      <el-form-item prop="pass" label="密码：">
        <el-input v-model="loginForm.pass" show-password></el-input>
      </el-form-item>

      <el-form-item label="验证码：">
        <el-col :span="10">
          <el-input v-model="loginForm.vcode" maxlength="4" style="width: 160px"></el-input>
        </el-col>
        <el-col :span="12">
          <img id="code_img" src="http://localhost:8080/login/yzm" @click="changeCode()"
               style="height:40px; width: 100px; margin-left:25px; cursor: pointer;" title="点击更换">
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button v-on:keyup.enter.native="submitForm('loginForm')" type="primary" @click="submitForm('loginForm')"
                   style="width: 250px;margin-right:110px">登录
        </el-button>
      </el-form-item>
    </el-form>
    <el-link type="primary" style="cursor: pointer;margin-right: -10px" @click="toForgot">忘记密码?</el-link>
  </div>
</template>

<script>
import sha1 from 'js-sha1';

export default {
  data() {
    var valDataUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空'));
      } else {
        callback();
      }
    };
    var valDataPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'));
      } else {
        callback();
      }
    }
    return {
      loginForm: {
        user: '',
        pass: '',
        vcode: ''
      },
      rules: {
        user: [{validator: valDataUser, trigger: 'blur'}],
        pass: [{validator: valDataPass, trigger: 'blur'}]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //提交表单
          this.$axios
              .post('login/user', {
                user: this.loginForm.user,
                pass: sha1(this.loginForm.pass),
                vcode: this.loginForm.vcode
              })
              .then((result) => {
                if (result.data.code === 1) {
                  this.$message({
                    showClose: true,
                    message: '登陆成功',
                    type: "success"
                  });
                  this.token = 'Bearer ' + result.date.data.body.token;
                  this.setToken({Authorization: this.token});
                  this.$router.replace('/');
                } else {
                  this.$message({
                    showClose: true,
                    message: result.data.msg,
                    type: "error"
                  })
                  return false;
                }
              })
              .catch((error) => {
                alert(error);
              })
        } else {
          alert("用户名和密码不能为空");
          return false;
        }
      })
    },
    changeCode() {
      document.getElementById("code_img").src = "http://localhost:8080/login/yzm?" + Math.random()
    },
  },
}
</script>

<style scoped>

</style>