<template>
  <div class="page-wrapper">
    <el-row>
      <el-button class="buttona" type="primary" size="mini"
        >快捷键管理</el-button
      >
    </el-row>
    <el-table
      :header-cell-style="headClass"
      border
      class="tablestyle"
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="date" label="快捷图标" width="180" align="center">
        <template slot-scope="scope">
          <div @click.prevent="getDate(scope.row)" ref="button">
            <el-button size="mini" type="primary" plain>
              <!-- @click.native 组件中点击事件用@click.native -->
              {{ scope.row.date }}
            </el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="快捷键名称"
        width="180"
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
      <el-table-column prop="ok" label="可用" align="center">
        <template slot-scope="scope">
          <el-switch
            @change="anniu(scope.row)"
            v-model="scope.row.switch"
            active-color="#13ce66"
          >
          </el-switch>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    headClass() {
      //表头居中显示
      return "text-align:center";
    },
    anniu(scope) {
      //   console.log(params);
      //   params.row.switch = false;
      //   console.log(params.row.switch);
      console.log(scope.switch);
      console.log(this.tableData);
    },
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    getDate(row) {},
    initData() {
      this.tableData.forEach((item, index) => {
        item.id = index + 1;
      });
    },
  },
  mounted() {
    this.initData();
  },
  data() {
    return {
      tableData: [
        {
          date: "创建活动",
          name: "创建活动",
          address: "快捷键创建活动，跳转到营销活动创建界面",
          switch: true,
        },
        {
          date: "创建客群",
          name: "创建客群",
          address: "快捷键创建客群，跳转到营销客群创建界面",
          switch: true,
        },
        {
          date: "创建画像",
          name: "创建画像",
          address: "快捷键创建画像，跳转到营销画像创建界面",
          switch: true,
        },
        {
          date: "创建标签",
          name: "创建标签",
          address: "快捷键创建标签，跳转到营销标签创建界面",
          switch: true,
        },
        {
          date: "创建场景",
          name: "创建场景",
          address: "快捷键创建场景，跳转到营销场景创建界面",
          switch: true,
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
@import "../resource/style/common.less";
body {
  .buttona {
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid darkturquoise;
    // width: 150px;
    // height: 10px;
    // background: rgb(229, 250, 253);
    // color: black;
    // font-size: 300;
    // font-weight: 600;
    margin-top: 15px;
    margin-bottom: 35px;
  }
}
.page-wrapper {
  /deep/.el-table {
    thead {
      th {
        color: #333;
        background-color: rgb(242, 245, 252);
        text-align: center;
        // line-height: 10px;
        // padding-bottom: 10px;
        // font-weight: 500;
      }
    }
  }
  /deep/ .el-table__body-wrapper {
    th {
      text-align: center;
    }
  }
}
/deep/ .el-table__body-wrapper {
  tr {
    th {
      color: red;
    }
  }
}
.el-table {
  background: oldlace;
}
.el-table .success-row {
  background: oldlace;
}
.tablestyle {
  //   border-collapse: separate;
}
</style>