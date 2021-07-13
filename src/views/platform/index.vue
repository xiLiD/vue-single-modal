<template>
  <div class="platform-unit">
    <div class="search-unit">
      <el-form :inline="true">
        <el-form-item label="统计月份:">
          <el-date-picker
            v-model="searchInline.date"
            type="month"
            placeholder="选择日期"
            size="mini"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地域:">
          <el-select
            v-model="searchInline.cityTarget.cities"
            placeholder="地市"
            size="mini"
          >
            <el-option
              v-for="item in cityResource.cities"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select
            v-model="searchInline.cityTarget.county"
            placeholder="区县"
            size="mini"
          >
            <el-option
              v-for="item in cityResource.county"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select
            v-model="searchInline.cityTarget.grid"
            placeholder="网格"
            size="mini"
          >
            <el-option
              v-for="item in cityResource.gird"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="unit-matter">
      <div class="unit-left pd-20">
        <div class="overview-unit">
          <h2>概览</h2>
          <div class="overview-center">
            <div class="overview-item">
              <div class="iconfont icon-shouji"></div>
              <div class="item-matter">
                <p>
                  <span>手机客户数</span>
                </p>
                <p><span>2050</span><label>万户</label></p>
                <p>
                  <i class="iconfont icon-shangsheng get-up"></i>
                  <span class="get-up">4.4%</span>
                  <span>较上月增加</span>
                </p>
              </div>
            </div>
            <div class="overview-item">
              <div class="iconfont icon-bumanyi"></div>
              <div class="item-matter">
                <p>
                  <span>手机不满意客户数</span>
                </p>
                <p><span>2050</span><label>万户</label></p>
                <p>
                  <i class="iconfont icon-xiajiang get-down"></i>
                  <span class="get-down">4.4%</span>
                  <span>较上月减少</span>
                </p>
              </div>
            </div>
            <div class="overview-item">
              <div class="iconfont icon-gaishuai"></div>
              <div class="item-matter">
                <p>
                  <span>手机不满意比率</span>
                </p>
                <p><span>30.5</span><label>%</label></p>
                <p>
                  <i class="iconfont icon-xiajiang get-down"></i>
                  <span class="get-down">10.8%</span>
                  <span>较上月减少</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="trend-unit">
          <div
            class="canvas-matter"
            id="canvas-trend"
            :style="{ height: '300px' }"
          ></div>
        </div>
        <div class="spread-unit">
          <div
            class="canvas-matter"
            id="canvas-spread"
            :style="{ height: '300px' }"
          ></div>
        </div>
        <div class="unsatisfy-unit">
          <div
            class="canvas-matter"
            id="canvas-unsatisfy"
            :style="{ height: '400px' }"
          ></div>
        </div>
        <div class="reason-unit">
          <el-table
            :data="tableTarget.data"
            style="width: 100%"
            row-key="codeKey"
            border
          >
            <el-table-column label="不满类型" prop="type" align="center" />
            <el-table-column label="不满原因" prop="reason" align="center" />
            <el-table-column label="不满客户数" prop="count" align="center" />
            <el-table-column
              label="不满客户占比"
              prop="account"
              align="center"
            />
          </el-table>

          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="tableTarget.currentPage"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableTarget.total"
          >
          </el-pagination>
        </div>
      </div>
      <div class="unit-right">
        <div class="portrait pd-10">
          <div class="search-protrait">
            <el-form>
              <el-form-item label="不满意类型:">
                <el-select
                  v-model="satisfy.value"
                  placeholder="请选择"
                  size="mini"
                >
                  <el-option
                    v-for="item in satisfy.lists"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div class="protrait-matter">
            <div
              class="canvas-matter"
              id="canvas-protrait"
              :style="{ height: '240px' }"
            ></div>
          </div>
          <div class="feature">
            <div
              class="canvas-matter"
              id="canvas-age"
              :style="{ height: getHeight }"
            ></div>
            <div
              class="canvas-matter"
              id="canvas-sex"
              :style="{ height: getHeight }"
            ></div>
            <div
              class="canvas-matter"
              id="canvas-type"
              :style="{ height: getHeight }"
            ></div>
            <div
              class="canvas-matter"
              id="canvas-appu"
              :style="{ height: getHeight }"
            ></div>
            <div
              class="canvas-matter"
              id="canvas-dou"
              :style="{ height: getHeight }"
            ></div>
            <div
              class="canvas-matter"
              id="canvas-mou"
              :style="{ height: getHeight }"
            ></div>
            <div
              class="canvas-matter"
              id="canvas-change"
              :style="{ height: getHeight }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>                     
<script>
import options from "./assets/json/options.js";
import echarts from "echarts";
export default {
  data() {
    const data = [
      {
        type: "其他",
        reason: "其他原因",
        count: 10,
        account: "10%",
      },
      {
        type: "其他",
        reason: "其他原因",
        count: 10,
        account: "10%",
      },
      {
        type: "其他",
        reason: "其他原因",
        count: 10,
        account: "10%",
      },
      {
        type: "其他",
        reason: "其他原因",
        count: 10,
        account: "10%",
      },
      {
        type: "其他",
        reason: "其他原因",
        count: 10,
        account: "10%",
      },
      {
        type: "其他",
        reason: "其他原因",
        count: 10,
        account: "10%",
      },
      {
        type: "其他",
        reason: "其他原因",
        count: 10,
        account: "10%",
      },
      {
        type: "其他",
        reason: "其他原因",
        count: 10,
        account: "10%",
      },
      {
        type: "其他",
        reason: "其他原因",
        count: 10,
        account: "10%",
      },
      {
        type: "其他",
        reason: "其他原因",
        count: 10,
        account: "10%",
      },
      {
        type: "其他",
        reason: "其他原因",
        count: 10,
        account: "10%",
      },
      {
        type: "其他",
        reason: "其他原因",
        count: 10,
        account: "10%",
      },
    ];
    return {
      searchInline: {
        cityTarget: {
          cities: "",
          county: "",
          gird: "",
        },
      },
      cityResource: {
        cities: [],
        county: [],
        gird: [],
      },
      satisfy: {
        lists: [
          {
            label: "全部",
            value: "",
          },
          {
            label: "网络",
            value: "1",
          },
          {
            label: "服务",
            value: "2",
          },
          {
            label: "其他",
            value: "3",
          },
        ],
        value: "",
      },
      tableTarget: {
        currentPage: 1,
        total: 0,
        data: [],
      },
      requestData: data,
    };
  },
  computed: {
    getHeight() {
      console.log(200);
      return 240 + "px";
    },
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.tableTarget.data = this.requestData.filter(
        (item, index) => index % 10 == val
      );
      this.tableTarget.currentPage = val;
    },
    getPortrait() {
      let charts_1 = echarts.init(document.getElementById("canvas-protrait"));
      charts_1.setOption(options.portrait);
      let charts_2 = echarts.init(document.getElementById("canvas-age"));
      charts_2.setOption(options.age);
      let charts_3 = echarts.init(document.getElementById("canvas-sex"));
      charts_3.setOption(options.sex);
      let charts_4 = echarts.init(document.getElementById("canvas-type"));
      charts_4.setOption(options.type);
      let charts_5 = echarts.init(document.getElementById("canvas-appu"));
      charts_5.setOption(options.appu);
      let charts_6 = echarts.init(document.getElementById("canvas-dou"));
      charts_6.setOption(options.dou);
      let charts_7 = echarts.init(document.getElementById("canvas-mou"));
      charts_7.setOption(options.mou);
      let charts_8 = echarts.init(document.getElementById("canvas-change"));
      charts_8.setOption(options.change);
    },
    getLeft() {
      let charts_1 = echarts.init(document.getElementById("canvas-trend"));
      charts_1.setOption(options.trend);
      let charts_2 = echarts.init(document.getElementById("canvas-spread"));
      charts_2.setOption(options.spread);
      let charts_3 = echarts.init(document.getElementById("canvas-unsatisfy"));
      charts_3.setOption(options.unsatisfyUnit);
    },
    getTable() {
      this.tableTarget.total = Number(this.tableTarget.data.length);
      this.tableTarget.data = this.requestData.filter(
        (item, index) =>
          parseInt(index / 10) == this.tableTarget.currentPage - 1
      );
    },
  },
  mounted() {
    this.getPortrait();
    this.getLeft();
    this.getTable();
  },
};
</script>
<style lang="less" scoped>
@import "./assets/fonts/iconfont.css";
.platform-unit {
  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  .el-form-item {
    margin-bottom: 10px;
  }
  .search-unit {
    /deep/ .el-form-item__label {
      letter-spacing: 1px;
    }
    .el-select {
      margin-left: 10px;
      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }
  .trend-unit {
    margin-top: 15px;
  }
  .unit-matter {
    display: flex;
    justify-content: space-between;
    position: relative;
    border: 1px solid #ddd;
    border-radius: 5px;
    // box-shadow: 0 0 1px 3px #ddd;
    // padding-top: 20px;
    .unit-left {
      width: 60%;
      .overview-unit {
        font-size: 18px;

        .overview-center {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          h2 {
            font-size: 18px;
          }
          .overview-item {
            display: flex;
            .item-matter {
              margin-left: 10px;
              p {
                font-size: 14px;
                line-height: 1.2;
                &:nth-child(2) {
                  margin-top: 5px;
                  font-family: "Microsoft YaHei";
                  span {
                    &:nth-child(1) {
                      font-size: 24px;
                      font-weight: bold;
                    }
                  }
                }
                > span {
                  &:nth-child(3) {
                    margin-left: 10px;
                    color: #aaa;
                    font-size: 13px;
                  }
                }
                label {
                  margin-left: 5px;
                  font-size: 16px;
                }
              }
            }
          }
          li {
            p {
              &:nth-child(1) {
                padding-left: 50px;
                position: relative;
              }
            }
          }
        }
      }
      .reason-unit {
        margin-top: 15px;
      }
    }
    .unit-right {
      width: 40%;
      border-left: 1px solid #ddd;
    }
    .pd-20 {
      padding: 15px 10px;
      box-sizing: border-box;
    }
    .pd-10 {
      padding: 10px 0 10px 10px;
      box-sizing: border-box;
    }
  }
  // .unit-matter::before {
  //   content: "";
  //   width: 100%;
  //   height: 1px;
  //   background-color: #ddd;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   zoom: 0.8;
  // }
  .feature .canvas-matter {
    zoom: 0.75;
    margin: 0 auto;
  }
  .get-up {
    color: #67c23a;
  }
  .get-down {
    color: #f56c6c;
  }
  .icon-gaishuai {
    font-size: 58px;
    color: #409eff;
  }
  .icon-bumanyi {
    font-size: 50px;
    color: #f56c6c;
  }
  .icon-shouji {
    font-size: 46px;
  }
  .el-pagination {
    text-align: center;
    margin-top: 10px;
  }
  /deep/ .el-table {
    margin-top: 10px;
    width: 100%;
    table {
      width: 100% !important;
    }
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
        background-color: rgb(217, 236, 255) !important;
      }
    }
  }

  .page-title {
    padding: 10px 10px 10px 0;
    margin-bottom: 10px;
    color: #409eff;
    font-size: 18px;
    color: #409eff;
    letter-spacing: 1px;
    font-family: "Microsoft YaHei";
    position: relative;
  }
  .page-title::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #ddd;
    // padding:0;
    position: absolute;
    bottom: 0;
    left: 0;
    // padding-bottom: 10px;
  }
}
</style>