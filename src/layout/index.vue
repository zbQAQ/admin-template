<template>
  <div class="layout">
    <div class="navbarBox">
      <navbar />
    </div>
    <div class="container">
      <div class="sideBarBox">
        <sideBar />
      </div>
      <div class="appMain">
        <transition name="fade-left-transform" mode="out-in">
          <!-- <keep-alive :exclude="['components-name']"> -->
          <router-view :key="key"></router-view>
          <!-- </keep-alive> -->
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "./components/navbar";
import sideBar from "./components/sideBar";
export default {
  name: "layoutCnt",
  components: {
    navbar,
    sideBar
  },
  computed: {
    key() {
      return this.$route.fullPath;
    }
  }
};
</script>
<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.navbarBox {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  z-index: 10;
}

.container {
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: #f2f2f2;
  overflow: auto;
  z-index: 9;
}
.sideBarBox {
  width: 230px;
  border-right: 1px solid #e6e6e6;
  background: #fff;
}
.appMain {
  padding: 20px;
  flex: 1;
  overflow: auto;
}
</style>
