<template>
  <div id="forgot" class="forgot_div">
    <span class="login_span">忘记密码</span>
    <el-divider></el-divider>
    <el-form :model="userForm" :rules="rules" ref="userForm" label-width="70px">
      <el-form-item prop="user" label="用户名">
        <el-input v-model="userForm.user"></el-input>
      </el-form-item>

      <el-form-item prop="tel" label="手机号">
        <el-input v-model="userForm.tel"></el-input>
      </el-form-item>

      <el-form-item>
        <el-col :span="10">
          <el-input v-model="userForm.vcode" maxlength="6" placeholder="验证码" style="width: 125px"></el-input>
        </el-col>
        <el-col :span="12">
          <el-button type="primary" round style="margin-left:10px;width:145px" @click="getCode"
                     :disabled="getCodeBtnDisable">{{ codeBtnWord }}
          </el-button>
        </el-col>
      </el-form-item>

      <el-form-item label="新密码" prop="pass">
        <el-input type="password" v-model="userForm.pass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="userForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-col :span="16">
          <el-button type="primary" @click="submitForm('userForm')" style="width: 170px">确认</el-button>
        </el-col>
        <el-col :span="6">
          <el-button plain @click="$router.back(-1)" style="width: 100px">返回登录</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: "Forgot",
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空'));
      } else {
        callback();
      }
    };
    var validateTel = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空'));
      } else {
        callback();
      }
    };
    var validateVcode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('验证码不能为空'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.userForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      userForm: {
        user: '',
        tel: '',
        vcode: '',
        pass: '',
        checkPass: '',
      },
      codeBtnWord: '获取验证码',
    }
  }
}
</script>

<style scoped>

</style>