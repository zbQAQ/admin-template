<template>
  <div class="loginCnt">
    <div class="container" v-loading="loading">
      <p class="loginTit">系统登录</p>
      <el-form :model="form" :rules="rules" ref="form" size="medium">
        <el-form-item label="" prop="account">
          <el-input v-model="form.account" placeholder="请输入用户名">
            <template slot="prefix">
              <i class="el-icon-user"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
          >
            <template slot="prefix">
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" size="medium" class="loginBtn" @click="login">
        登录
      </el-button>
    </div>
  </div>
</template>

<script>
import posts from "@/api/mock_index.js";
import storage from "@/utils/localStorage";
export default {
  data() {
    return {
      loading: false,
      form: {
        account: "admin",
        password: "admin"
      },
      rules: {
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.$refs["form"].validate(async valid => {
        if (valid) {
          this.loading = true;
          const res = await posts.login();
          storage.set("token", res.token);
          this.$router.push("/");
          // this.loading = false;
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.loginCnt {
  position: relative;
  /* overflow: hidden; */
  height: 100%;
  color: #666;
}
.container {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  padding: 20px;
  border: 1px solid #eee;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.loginTit {
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: bold;
}
.loginBtn {
  width: 100%;
}
</style>
<style>
.container .el-input__prefix {
  padding: 0 4px;
}
</style>
