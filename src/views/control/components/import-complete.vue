<template>
  <div>
    <el-dialog
      title="导入模块"
      :visible.sync="dialogVisible"
      width="70%"
      :before-close="getClose"
    >
      <!-- <span>这是一段信息</span> -->
      <el-form>
        <el-form-item label="是否覆盖">
          <el-select v-model="currentType" placeholder="请选择" size="mini">
            <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              size="mini"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-upload
        ref="upload-import"
        class="upload-demo"
        drag
        action="#"
        :multiple="false"
        :limit="1"
        :http-request="httpRequest"
        accept=".xls,.xlsx"
        :before-upload="emptyFile"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传excel文件</div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" @click="getSearch" size="mini"
          >导入</el-button
        >
      </span>
      <div v-if="requestTarget.code == '1'" class="error-message">
        {{ requestTarget.title }}
      </div>
    </el-dialog>
  </div>
</template>
<script>
import apiSend from "@/api/iop/control/httpRequest";
export default {
  data() {
    return {
      dialogVisible: false,
      types: [
        {
          label: "是",
          value: 1,
        },
        {
          label: "否",
          value: 0,
        },
      ],
      currentType: 0,
      file: "",
      requestTarget: {
        title: "",
        code: "",
      },
      seeDialog: false,
      fileList: [],
    };
  },
  methods: {
    getClose() {
      this.dialogVisible = false;
      this.currentType = "";
      this.$refs["upload-import"].clearFiles();
    },
    setShow(bool) {
      this.dialogVisible = bool;
    },
    checkForm() {
      if (this.currentType === "") {
        this.$message.warning("请选择类型！");
        return false;
      }
      return true;
    },
    getSearch() {
      let that = this;
      if (!that.checkForm()) return;
      let params = {
        file: that.file,
        type: that.currentType,
      };
      console.log(params);
      apiSend
        .checkExcel({ data: params })
        .then((res) => {
          let { code, error, ...errObject } = res.data.data;
          console.log(code);
          console.log(error);
          console.log(errObject);
          that.requestTarget.code = res.data.data.code;
          that.requestTarget.title = res.data.data.msg || res.data.data.error;
          if (res.data.data.code == "0") {
            that.$message({
              type: "success",
              duration: 3000,
              message: res.data.data.msg,
            });
            return;
          }
          if (res.data.data.code == "2") {
            that.$confirm(res.data.data.question, "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning",
              callback: (action) => {
                if (action == "confirm") {
                  that.importExcel();
                }
              },
            });
          }
        })
        .catch((err) => {});
    },
    importExcel() {
      let params = {
        file: this.file,
        type: this.currentType,
      };
      apiSend
        .excelFile({ data: params })
        .then((res) => {
          if (res.data.data.code == "0") {
            this.$message({
              type: "success",
              duration: 3000,
              message: res.data.data.msg,
            });

            return;
          }
        })
        .catch((err) => {});
    },
    httpRequest(e) {
      this.file = e.file;
      console.log(this.file);
    },
    emptyFile(file, list) {
      console.log(file, list);
      if (Object.prototype.hasOwnProperty.call(this.file, "name")) {
        this.$refs["upload-import"].clearFiles();
      }
    },
  },
};
</script>
<style lang="less" scoped>
.error-message {
  color: #f56c6c;
  font-size: 12px;
  margin-top: 15px;
}
</style>
