<template id="administration">
  <div class="page-wrapper" style="padding: 10px">
    <el-form :inline="true">
      <el-form-item label="快捷键名称">
        <el-input
          v-model="formInline.user"
          placeholder="请输入名称"
          size="mini"
        ></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.region" placeholder="请选择" size="mini">
          <el-option label="状态一" value="shanghai" size="mini"></el-option>
          <el-option label="状态二" value="beijing" size="mini"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button class="buttons" type="primary" @click="onSubmit" size="mini">
          查询
        </el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table
      border
      class="tablestyle"
      :data="tableData"
      style="width: 100%"
      size="mini"
    >
      <el-table-column prop="date" label="快捷图标" width="150" align="center">
        <template slot-scope="scope">
          <div @click.prevent="getDate(scope.row)" ref="button">
            <el-button size="mini" plain>
              <!-- @click.native 组件中点击事件用@click.native -->
              {{ scope.row.date }}
            </el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="快捷键名称"
        width="150"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="功能描述"
        width="300"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="time" label="创建时间" width="120" align="center">
      </el-table-column>
      <el-table-column
        prop="timeout"
        label="修改时间"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="state" label="状态" width="120" align="center">
      </el-table-column>
      <el-table-column prop="operation" label="操作" width="120" align="center">
        <template>
          <el-button type="primary" size="mini">修改</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
        <!-- <a href="#">修改</a> <a href="#">删除</a> -->
      </el-table-column>
    </el-table>
    <!-- 底部表单信息 -->
    <!-- <el-divider direction="vertical"></el-divider> -->

    <!-- <el-divider content-position="right"></el-divider> -->
    <div class="formbottom">
      <div class="spanfont">新建/修改快捷键导航</div>
      <el-form
        :inline="true"
        :model="formInline"
        class="form-inline-search formbottom"
        size="mini"
      >
        <!-- <el-divider></el-divider> -->
        <el-form-item label="快捷键名称">
          <el-input
            v-model="formbottom.user"
            placeholder="请输入名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="功能描述">
          <el-input
            class="description"
            v-model="formbottom.content"
            placeholder="请输入描述内容"
            type="textarea"
            rows="3"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态" class="state">
          <el-select
            v-model="formbottom.region"
            placeholder="请选择"
            size="mini"
          >
            <el-option label="状态一" value="shanghai"></el-option>
            <el-option label="状态二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button class="buttonb" @click="onSubmit">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formbottom: {
        user: "",
        region: "",
        content: "",
      },
      formInline: {
        user: "",
        region: "",
      },
      tableData: [
        {
          date: "创建活动",
          name: "创建活动",
          address: "快速创建活动，跳转到营销活动创建界面",
          time: "20210301",
          timeout: "",
          state: "可用",
          operation: "",
        },
        {
          date: "创建客群",
          name: "创建客群",
          address: "快捷键创建客群，跳转到营销客群创建界面",
          time: "20210301",
          timeout: "",
          state: "可用",
          operation: "",
        },
        {
          date: "创建画像",
          name: "创建画像",
          address: "快速创建画像，跳转到营销画像创建界面",
          time: "20210301",
          timeout: "20210401",
          state: "可用",
          operation: "",
        },
        {
          date: "创建标签",
          name: "创建标签",
          address: "快速创建标签，跳转到营销标签创建界面",
          time: "20210301",
          timeout: "",
          state: "可用",
          operation: "",
        },
        {
          date: "创建场景",
          name: "创建场景",
          address: "快速创建场景，跳转到营销场景创建界面",
          time: "20210301",
          timeout: "",
          state: "可用",
          operation: "",
        },
        {
          date: "添加素材",
          name: "添加素材",
          address: "快速添加素材，跳转到添加素材界面",
          time: "20210301",
          timeout: "20210401",
          state: "可用",
          operation: "",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    tableRowClassName({ row, rowIndex }) {
      console.log(rowIndex % 2 == 0);
      if (rowIndex % 2 != 0) {
        return "warning-row";
      }
      return "";
    },
  },
};
</script>
<style lang="less" scoped>
@import "../resource/style/common.less";
// /deep/.el-input__inner {
//   width: 140px;
//   &::placeholder {
//     // color: red;
//     // font-size: 16px;
//     // display: flex;
//     text-align: right;
//     margin-right: 5px;
//   }
//   &::label {
//     margin-right: 50px;
//   }
// }
.page-wrapper {
  //   .el-divider--horizontal {
  //     margin: 5px auto;
  //   }
  .spanfont {
    color: #4d4c4c;
    font-size: 14px;
    padding: 10px 15px;
    position: relative;
  }
  .spanfont::after {
    content: "";
    width: 100%;
    height: 1px;
    background: #ddd;
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .form-inline-search {
    // margin-top: 10px;
    padding: 10px 15px;
  }
  /deep/ .el-table {
    thead {
      th {
        color: #333;
        background-color: rgb(242, 245, 252);
        text-align: center;
        width: 1px;
      }
    }
  }
  .el-form-item__label {
    margin: 10px;
  }
  .form-inline-item {
    display: flex;
    flex-wrap: wrap;
    .buttons {
      border: 1px solid darkturquoise;
    }
    .buttonb {
      border: 1px solid darkturquoise;
      margin-left: 20px;
    }
    /deep/ .el-form-item {
      margin-right: 60px;
      display: flex;
      flex-wrap: wrap;
      .el-form-item__label {
        margin-right: 10px;
      }
    }
  }
  /deep/ .cell a {
    margin-left: 6px;
    color: #333;
  }
  ////////问题
  .formbottom {
    /deep/ .el-form-item__content {
      min-width: 280px;
    }
    /deep/ .description {
      background: red;
    }
    background: rgb(242, 245, 252);
    /deep/ .state {
      margin-left: 40px;
      display: block;
    }
  }
}
</style>