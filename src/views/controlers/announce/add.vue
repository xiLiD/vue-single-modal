<template>
  <el-dialog title="提示" :visible.sync="dialogVisible" width="80%">
    <div class="announce-form">
      <el-form class="form">
        <el-form-item label="公告名称">
          <el-input
            v-model="announceInfo.title"
            placeholder="请输入名称"
            size="mini"
          ></el-input>
        </el-form-item>
        <el-form-item label="公告内容">
          <el-input
            v-model="announceInfo.desc"
            type="textarea"
            placeholder="请输入公告内容"
            size="mini"
            :rows="5"
          ></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="announceInfo.time"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="mini"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      announceInfo: {
        title: "",
        desc: "",
        time: "",
      },
    };
  },
  methods: {
    setVisible(bool) {
      this.dialogVisible = bool;
    },
  },
};
</script>
<style lang="less" scoped>
.announce-form {
  width: 100%;
  box-sizing: border-box;
  // padding: 10px 15px;
  // background: #fff;
  .form {
    // padding: 10 15px;
    box-sizing: border-box;
    padding: 10px 15px;
    // box-shadow: 0 0 5px #aaa;
    /deep/ .el-form-item {
      display: flex;
      .el-form-item__content {
        width: 320px;
      }
    }

    // position: sticky;
    // top: 50%;
    // transform: translateY(-50%);
  }
}
/deep/ .el-dialog__body {
  padding: 0 20px 0;
}
</style>