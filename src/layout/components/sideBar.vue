<template>
  <div class="sideBar">
    <el-menu :default-active="$router.path" unique-opened router>
      <sideBarItem
        v-for="route in accessRoutes"
        :key="route.path"
        :item="route"
        :basePath="route.path"
      />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import sideBarItem from "./sideBarItem";
export default {
  name: "sideBar",
  components: {
    sideBarItem
  },
  computed: {
    ...mapGetters({
      accessRoutes: "accessRoutes"
    })
  }
};
</script>

<style scoped>
.sideBar {
  position: fixed;
  top: 0;
  /* height: calc(100vh - 50px); */
  width: 230px;
  height: 100%;
  padding-top: 50px;
}
</style>
