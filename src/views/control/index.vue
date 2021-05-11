<template>
  <div class="page-content">
    <div class="page-wrapper">
      <el-col :span="4" class="el-col-left">
        <div class="control-left">
          <div class="control-left-header">
            <div class="header-title">操作说明</div>
            <div class="header-contain">
              <el-checkbox-group v-model="filterData.operate">
                <el-checkbox
                  icon="el-icon-date"
                  v-for="item in operateList"
                  :label="item.value"
                  :key="item.key"
                ></el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <div class="control-left-center">
            <div class="center-title">选择区域</div>
            <div class="center-contain">
              <el-checkbox-group v-model="filterData.area">
                <el-checkbox
                  icon="el-icon-date"
                  v-for="item in areaList"
                  :label="item.value"
                  :key="item.key"
                >
                </el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="search-type">
              <el-form>
                <el-form-item>
                  <el-input
                    placeholder="请输入内容"
                    v-model="filterData.search"
                    class="input-with-select"
                    size="mini"
                    clearable
                  >
                    <el-button slot="append" icon="el-icon-search"></el-button>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-radio-group v-model="filterData.searchType">
                    <el-radio
                      :label="item"
                      v-for="item in searchTypeList"
                      :key="item"
                      >{{ item }}</el-radio
                    >
                  </el-radio-group>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="control-right">
          <div class="control-search">
            <el-form
              :inline="true"
              :model="formInline"
              class="demo-form-inline"
              ref="addruleFormref"
            >
              <div class="menu-left">
                <el-form-item label="统计日期" label-width="80px">
                  <el-date-picker
                    v-model="formInline.date"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    size="mini"
                    :editable="false"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="" label-width="80px">
                  <el-button type="primary" @click="getTable" size="mini"
                    >查询</el-button
                  >
                </el-form-item>
              </div>
            </el-form>
          </div>
          <div class="control-table">
            <el-table
              :data="tableData"
              style="width: 100%"
              row-key="codeKey"
              :height="getHeight"
              :row-class-name="tableRowClassName"
              border
            >
              <el-table-column label="地区" prop="city" align="center" />
              <el-table-column label="区县" prop="cnty" align="center" />
              <el-table-column label="网格" prop="grid" align="center" />
              <el-table-column label="工单类型" prop="order" align="center" />
              <el-table-column
                label="投诉人数"
                prop="population"
                align="center"
              />
              <el-table-column label="投诉量1" prop="popuNum1" align="center" />
              <el-table-column label="投诉量2" prop="popuNum2" align="center" />
              <el-table-column label="投诉量3" prop="popuNum3" align="center" />
              <el-table-column label="投诉量4" prop="popuNum4" align="center" />
            </el-table>
          </div>
        </div>
      </el-col>
    </div>
  </div>
</template>
<script>
import apiSend from "@/api/iop/crm/httpRequest";
import SearchComplete from "./components/search-complete";
export default {
  components: {
    SearchComplete,
  },
  data() {
    return {
      tableData: [],
      menuList: [],
      menuClassId: "",
      productId: "",
      productData: [],
      expands: [],
      formInline: {
        date: "",
      },
      filterData: {
        operate: [],
        area: [],
        search: "",
        searchType: "",
      },
      searchTypeList: ["10086短信", "10086人工", "10086热线"],
      areaList: [
        {
          key: 1,
          value: "日期",
        },
        {
          key: 2,
          value: "地市",
        },
        {
          key: 3,
          value: "区县",
        },
        {
          key: 4,
          value: "网格",
        },
        {
          key: 5,
          value: "工单类型",
        },
        {
          key: 6,
          value: "投诉渠道",
        },
      ],
      operateList: [
        {
          key: 10,
          value: "报表展示字段",
        },
        {
          key: 11,
          value: "筛选制定维值",
        },
      ],
    };
  },
  computed: {
    getHeight() {
      return window.innerHeight - 40 - 50 - 15 + "px";
    },
  },
  mounted() {},
  methods: {
    tableRowClassName({ row, rowIndex }) {
      console.log(rowIndex % 2 == 0);
      if (rowIndex % 2 != 0) {
        return "warning-row";
      }
      return "";
    },
    getTable() {
      let data = [
        {
          city: "长沙市",
          cnty: "天心区",
          grid: "网格",
          order: "类型1",
          population: 1000,
          popuNum1: 100,
          popuNum2: 100,
          popuNum3: 100,
          popuNum4: 100,
        },
        {
          city: "长沙市",
          cnty: "天心区",
          grid: "网格",
          order: "类型1",
          population: 1000,
          popuNum1: 100,
          popuNum2: 100,
          popuNum3: 100,
          popuNum4: 100,
        },
        {
          city: "长沙市",
          cnty: "天心区",
          grid: "网格",
          order: "类型1",
          population: 1000,
          popuNum1: 100,
          popuNum2: 100,
          popuNum3: 100,
          popuNum4: 100,
        },
        {
          city: "长沙市",
          cnty: "天心区",
          grid: "网格",
          order: "类型1",
          population: 1000,
          popuNum1: 100,
          popuNum2: 100,
          popuNum3: 100,
          popuNum4: 100,
        },
        {
          city: "长沙市",
          cnty: "天心区",
          grid: "网格",
          order: "类型1",
          population: 1000,
          popuNum1: 100,
          popuNum2: 100,
          popuNum3: 100,
          popuNum4: 100,
        },
      ];

      this.tableData = data;
      console.log(this.tableData);
    },
  },
};
</script>
<style lang="less" scoped>
.app-main {
  padding: 10vh 20px;
}
.page-content {
  width: 100%;
  padding: 20px 15px;
  box-sizing: border-box;
  font-size: 12px;
  .page-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    box-shadow: 0 0 3px #ddd;
    background-color: #fff;
    box-sizing: border-box;
  }

  /deep/ .control-right {
    .el-range-editor--small .el-range-input {
      cursor: pointer;
    }
    .el-form-item__label {
      font-size: 12px;
      letter-spacing: 1px;
    }
    .control-search {
      padding: 15px 15px 0px;
      label {
        font-size: 12px;
      }
    }
    .el-button {
      letter-spacing: 1px;
    }
  }

  /deep/ .el-table {
    .warning-row {
      background-color: rgb(242, 245, 252);
    }
    thead {
      th {
        background-color: rgb(242, 245, 252);
        color: #999;
        font-weight: 500;
        padding: 5px 0;
        font-size: 12px;
        // letter-spacing: 1px;
      }
    }
    tbody {
      td {
        font-size: 12px;
        padding: 5px 0;
      }
      tr:hover > td {
        background-color: rgb(140, 197, 255) !important;
      }
    }
  }

  /deep/ .el-col-left {
    //   box-shadow: 0 0 5px #ddd;
    //   margin-right: 1px;
    box-shadow: 0 0 5px #ddd;
    display: flex;
    font-size: 18px;
    .center-contain,
    .header-contain {
      padding: 10px 20px;
      box-sizing: border-box;
    }
    .header-title,
    .center-title {
      text-align: center;
      line-height: 36px;
      background: #66b1ff;
      color: #fff;
      letter-spacing: 3px;
      font-size: 12px;
    }
    .el-checkbox-group {
      display: flex;
      flex-direction: column;
      label {
        //   display: flex;
        //   flex-direction: column;
        margin: 5px 0;
        letter-spacing: 1px;
      }
    }
    .search-type {
      padding: 0 10px;
      box-sizing: border-box;

      .el-input__inner,
      .el-input-group__append {
        border-radius: 0;
      }
      .el-radio-group {
        display: flex;
        flex-direction: column;
        justify-content: center;

        label {
          color: #aaa;
          letter-spacing: 0.5px;
        }
        //   align-items: center;
        .el-radio {
          margin-top: 15px;
          margin-right: 0;
        }
      }
    }

    .el-checkbox__label {
      font-size: 12px;
      letter-spacing: 1px;
    }
    .el-radio__label {
      font-size: 12px;
      letter-spacing: 1px;
    }
    .el-input__inner {
      font-size: 12px;
    }
    .el-form-item {
      margin-bottom: 0;
    }
  }
}
</style>