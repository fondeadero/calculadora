<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <router-link class="nav-item is-tab is-hidden-mobile" v-on:click="changeToActive('compound')" v-bind:class="{'is-active' : isActive}" to="/interes-compuesto">Interés compuesto</router-link>
        <router-link class="nav-item is-tab is-hidden-mobile" v-on:click="changeToActive('credit')" to="/amortizacion-para-credito">Amortización para Crédito</router-link>
        <router-link class="nav-item is-tab is-hidden-mobile" to="/home">Volver a Omar</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "ElNavBar",
  data() {
    return {
      isActive: true,
      activeItem: "compound",
    }
  },
  methods: {
    changeToActive: function (menuItem) {
      return this.activeItem === menuItem
    }
  }
}
</script>

<style scoped>

.align-center {
  left: 40%;
}

.el-menu > .el-menu-item {
  text-decoration: none;
  height: 60px;
  line-height: 60px;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: #909399;
}
</style>