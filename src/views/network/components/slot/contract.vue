<template>
  <div class="btn-spread">
    <template>
      <slot class="spread" name="spread"
        ><i class="el-icon-top-left bottom right"></i>
        <i class="el-icon-bottom-right top left"></i>
      </slot>
    </template>
  </div>
</template>
<style scoped>
.btn-spread {
  display: inline-block;
  position: relative;
  height: 26px;
  width: 26px;
  /* zoom: 0.8; */
  cursor: pointer;
  margin-right: 5px;
  display: block;
  margin-bottom: 5px;
  zoom: 0.9;
}
i {
  position: absolute;
}

.top {
  top: 0;
}
.bottom {
  bottom: -1px;
}
.right {
  right: -1px;
}
.left {
  left: 0;
}
</style>