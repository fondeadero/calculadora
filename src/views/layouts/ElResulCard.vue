<template>
  <el-card shadow="hover">
    <div slot="header" class="clearfix" style="display: block;">
      <span style="display: block;">
        <h3 class="subtitle-style">
            {{ title }}
        </h3>
      </span>
      <span style="display: block;">
          <el-icon class="icon" :class="iconShape" type="text"></el-icon>
      </span>
    </div>
    <div class="high">
      {{ value }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: "ElResultCard",
  props: {
    'title': String,
    'iconShape': String,
    'value': [String, Number]
  },
  data: function () {
    return {}
  }
}
</script>

<style>
  .icon {
    font-size: 5rem;
    color: gray;
  }

  .high {
    font-weight: bolder;
    font-size: 1.5rem;
  }

  .el-card .el-card__body {
    opacity: 0.8;
  }
</style>