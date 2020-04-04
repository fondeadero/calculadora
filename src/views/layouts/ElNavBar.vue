<template>
<!--    <el-menu  class="el-menu-demo" mode="horizontal">-->
<!--        <el-menu-item class="align-center" index="1"><router-link to="/">Home</router-link></el-menu-item>-->
<!--        <el-menu-item class="align-center" index="2"><router-link to="/compound-interest">Compound Interest</router-link></el-menu-item>-->
<!--    </el-menu>-->

    <el-menu  class="el-menu-demo" mode="horizontal" style="align-items: center">
<!--      <router-link class="el-menu-item align-center" to="/"><span>Home</span></router-link>-->
      <router-link class="el-menu-item align-center" to="home"><span>Volver a Omar Educación Financiera</span></router-link>
      <router-link class="el-menu-item align-center" to="/"><span>Interés Compuesto</span></router-link>
    </el-menu>
</template>

<script>
    export default {
        name: "ElNavBar"
    }
</script>

<style scoped>
    .align-center {
        left: 40%;
    }
    .el-menu > .el-menu-item {
        text-decoration:none;
        height: 60px;
        line-height: 60px;
        margin: 0;
        border-bottom: 2px solid transparent;
        color: #909399;
    }
</style>