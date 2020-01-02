<template>
  <div class="navbar">
    <div class="logoCnt">
      标题 / 首页 / logo
    </div>
    <div class="rightMenu">
      <headerBell class="rightMenuItem" />

      <headerEmail class="rightMenuItem" />

      <el-dropdown
        class="rightMenuItem pointer hoverGray"
        size="small"
        trigger="click"
      >
        <div class="avatarWrapper">
          <img src="/img/avatar.jpg" class="avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="dropdownMenu">
          <a target="_blank" href="https://github.com/zbQAQ/admin-template/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出账号</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import headerBell from "./headerBell.vue";
import headerEmail from "./headerEmail.vue";
export default {
  name: "navbar",
  components: {
    headerBell,
    headerEmail
  },
  methods: {
    logout() {
      let $store = this.$store;
      this.$confirm(`确定退出当前账号吗？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        $store.dispatch("user/resetUserInfo");
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  line-height: inherit;

  display: flex;
  flex-direction: row;

  /* background-image: linear-gradient(90deg, #4eb2ff 0%, #0b69cb 100%),
    linear-gradient(#1e87f0, #1e87f0);
  background-blend-mode: normal, normal; */
  background-color: #545c64;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  color: #fff;
}
.logoCnt {
  font-size: 20px;
  padding: 0 12px;
}
.rightMenu {
  margin-left: auto;
  padding-right: 12px;
}
.rightMenuItem {
  display: inline-block;
  height: 100%;
  line-height: 50px;
  padding: 0 8px;
  margin: 0 6px;
  font-size: 18px;
  vertical-align: text-bottom;
}
.avatarWrapper {
  position: relative;
  margin-top: 7px;
  color: #fff;
}
.avatarWrapper .avatar {
  border-radius: 10px;
  width: 36px;
  height: 36px;
}
.avatarWrapper .el-icon-caret-bottom {
  position: absolute;
  right: -20px;
  top: 25px;
  font-size: 12px;
}
.hoverGray {
  transition: background-color 0.3s;
}
.hoverGray:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
