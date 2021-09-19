<template>
  <div>
    <el-nav-bar></el-nav-bar>

    <div id="main">
      <router-view></router-view>

      <el-divider></el-divider>

      <el-footer></el-footer>
    </div>
  </div>
</template>

<script>
import ElFooter from "./views/layouts/ElFooter";
import ElNavBar from "./views/layouts/ElNavBar"

export default {
  components: {
    ElFooter,
    ElNavBar
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {},
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'Omar Educación Financiera!';
      }
    },
  }
}
</script>
<style>
#main {
  padding: 80px;
}

@media (max-width: 1220px) {
  #main {
    padding: 0;
  }
}
</style>


