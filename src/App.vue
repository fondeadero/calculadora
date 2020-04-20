<template>
  <div>
      <el-nav-bar></el-nav-bar>
      <div  id="main">
          <router-view></router-view>
          <el-divider></el-divider>
          <el-main-footer></el-main-footer>
      </div>

  </div>
</template>

<script>
  import ElMainFooter from "./views/layouts/ElMainFooter";
  import ElNavBar from "./views/layouts/ElNavBar"

  export default {
    components: {
      ElMainFooter,
      ElNavBar
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {

    }
  }
</script>
<style>
  @import "~bulma/css/bulma.css";
  #main {
      padding: 80px;
  }
  @media(max-width: 1220px) {
      #main {
          padding: 0;
      }
  }
</style>


