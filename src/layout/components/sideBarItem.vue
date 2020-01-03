<template>
  <div v-if="!item.hidden">
    <!-- eslint-disable-next-line prettier/prettier -->
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyChild.children || onlyChild.noShowingChildren) && !item.alwaysShow">
      <el-menu-item :index="resolvePath(onlyChild.path)">
        <i :class="onlyChild.meta.icon"></i>
        <span slot="title">{{ onlyChild.meta.sideTitle }}</span>
        <!-- <span slot="title">{{ resolvePath(onlyChild.path) }}</span> -->
      </el-menu-item>
    </template>

    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.sideTitle }}</span>
      </template>
      <sidebarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :basePath="resolvePath(child.path)"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
export default {
  name: "sidebarItem",
  props: ["item", "basePath"],
  data() {
    return {
      onlyChild: null
    };
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const needShowingChild = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyChild = item;
          return true;
        }
      });
      if (needShowingChild.length === 1) {
        return true;
      }
      if (needShowingChild.length === 0) {
        this.onlyChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    },
    resolvePath(route) {
      return path.resolve(this.basePath, route);
    }
  }
};
</script>

<style scoped></style>
