<template>
    <nav class="nav has-shadow">
        <div class="container">
            <div class="nav-left">
                <router-link class="nav-item is-tab is-hidden-mobile is-active" to="/" >Interés compuesto</router-link>
                <router-link class="nav-item is-tab is-hidden-mobile undefined" to="/home" >Volver a Omar</router-link>
            </div>
            <!--
            Using the v-on: directive to listen for the click event and toggle the data property showNav.
            -->
            <span class="nav-toggle" @click="showNav = !showNav" :class="showNav ? 'is-active' : 'undefined'">
      <span></span>
      <span></span>
      <span></span>
    </span>
            <!--
            Using the v-bind: directive to reactively update the class attribute with the result of the showNav ternary expression.
            -->
            <div class="nav-right nav-menu" :class="showNav ? 'is-active' : 'undefined'">
                <router-link class="nav-item is-tab is-hidden-tablet is-active " to="/" >Interés Compuesto</router-link>
                <router-link class="nav-item is-tab is-hidden-tablet undefined" to="/home" >Volver a Omar</router-link>
            </div>
        </div>
    </nav>


</template>

<script>
    export default {
        name: "ElNavBar",
        data() {
            return {
                showNav: false
            }
        }
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