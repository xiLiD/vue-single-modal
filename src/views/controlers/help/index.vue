<template>
  <div class="pcge-wrapper">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="文件名">
        <el-input
          v-model="formInline.user"
          placeholder="请输入关键词搜索"
          size="mini"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="mini">搜索</el-button>
        <el-button type="success" @click="onSubmit" size="mini">导入</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe style="width: 100%" border>
      <el-table-column prop="name" label="文件名称" width="220">
      </el-table-column>
      <el-table-column prop="description" label="文件描述" width="220">
      </el-table-column>
      <el-table-column prop="renew" label="更新人" width="220">
      </el-table-column>
      <el-table-column prop="renewtime" label="更新时间"> </el-table-column>
      <el-table-column prop="operation" label="操作" width="220">
        <i class="el-icon-download" stlye="cursor:pointer"></i>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-size="1"
        layout="total, prev, pager, next, sizes,jumper"
        :total="21"
        :page-sizes="[1, 9, 15, 21]"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [
        {
          name: "文件名称",
          description: "文件描述",
          renew: "更新人 ",
          renewtime: "更新时间",
          operation: "操作",
        },
        {
          name: "文件名称",
          description: "文件描述",
          renew: "更新人 ",
          renewtime: "更新时间",
          operation: "操作",
        },
        {
          name: "文件名称",
          description: "文件描述",
          renew: "更新人 ",
          renewtime: "更新时间",
          operation: "操作",
        },
        {
          name: "文件名称",
          description: "文件描述",
          renew: "更新人 ",
          renewtime: "更新时间",
          operation: "操作",
        },
        {
          name: "文件名称",
          description: "文件描述",
          renew: "更新人 ",
          renewtime: "更新时间",
          operation: "操作",
        },
        {
          name: "文件名称",
          description: "文件描述",
          renew: "更新人 ",
          renewtime: "更新时间",
          operation: "操作",
        },
        {
          name: "文件名称",
          description: "文件描述",
          renew: "更新人 ",
          renewtime: "更新时间",
          operation: "操作",
        },
      ],
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="less" scoped>
@import "../resource/style/common.less";
.pcge-wrapper {
  .demo-form-inline {
    margin: 15px;
  }
}
/deep/ .el-icon-download {
  font-weight: 800;
  //   font: 700;
  font-size: 800;
}
.block {
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>