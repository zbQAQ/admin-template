<template>
  <div class="navbar">
    <div class="logoCnt">
      标题 / 首页 / logo
    </div>
    <div class="headerInfo">
      headerInfo
    </div>
  </div>
</template>

<script>
export default {};
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

  background-image: linear-gradient(90deg, #4eb2ff 0%, #0b69cb 100%),
    linear-gradient(#1e87f0, #1e87f0);
  background-blend-mode: normal, normal;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  color: #fff;
}
.logoCnt {
  font-size: 20px;
  padding: 0 12px;
}
.headerInfo {
  margin-left: auto;
  padding-right: 12px;
}
</style>
