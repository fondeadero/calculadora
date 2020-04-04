<template>
  <el-container>
    <el-main>
      <el-header>
        <el-nav-bar></el-nav-bar>
      </el-header>
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
      <el-divider></el-divider>
      <el-main-footer></el-main-footer>
    </el-main>
  </el-container>
</template>

<script>
  import ElNavBar from "./views/layouts/ElNavBar";
  import ElMainFooter from "./views/layouts/ElMainFooter";

  export default {
    components: {
      ElNavBar,
      ElMainFooter

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
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css";
</style>


