<template>
  <div class="btn-spread">
    <template>
      <slot class="spread" name="spread"
        ><i class="el-icon-top-left top left"></i>
        <i class="el-icon-bottom-right bottom right"></i>
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
  zoom: 0.8;
  cursor: pointer;
  margin-right: 5px;
  display: block;
}
i {
  position: absolute;
}

.top {
  top: 0;
}
.bottom {
  bottom: 0;
}
.right {
  right: 0;
}
.left {
  left: 0;
}
</style>