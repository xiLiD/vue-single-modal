<template>
  <div class="page-container common-css">
    <div class="page-main">
      <div class="page-menu">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          size="small"
          ref="addruleFormref"
        >
          <div class="menu-left">
            <el-form-item label="查询类别">
              <el-select v-model="formInline.region" placeholder="查询类别">
                <el-option
                  :label="item.name"
                  :value="item.value"
                  v-for="(item, index) in menuOptions"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="formInline.mobile"
                placeholder="请输入号码"
                type="tel"
                maxlength="11"
                @keyup="onKeyUp"
                clearable
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="getSearch" size="small"
                >查询</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
      <el-table
        class="expand-box"
        :data="tableData"
        border
        :header-cell-style="{
          background: 'rgb(102, 177, 255)',
          color: '#fff',
        }"
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          prop="pgId"
          label="活动ID"
          width="200px"
          align="center"
        />
        <el-table-column label="活动名称" align="center">
          <template slot-scope="scope">
            <el-tooltip placement="top">
              <div slot="content">点击复制</div>

              <span
                :class="[
                  'tag-read-' + scope.$index,
                  'p-name',
                  { 'get-hidden': scope.row.pgId != momentId },
                ]"
                :data-clipboard-text="scope.row.pgId"
                @click="copyTitle('tag-read-' + scope.$index)"
                >{{ scope.row.pgName }}</span
              >
            </el-tooltip>
          </template>
        </el-table-column>

        <el-table-column
          prop="startDate"
          width="150px"
          label="开始时间"
          align="center"
        />
        <el-table-column
          prop="endDate"
          width="150px"
          label="结束时间"
          align="center"
        />
        <el-table-column label="产品列表" align="center">
          <template slot-scope="props">
            <div class="list-wrap">
              <div class="list-title">
                <span
                  style="display: inline-block; width: 250px"
                  v-if="props.row.pgId != momentId"
                >
                  {{ props.row.listTitle }}</span
                >
                <div
                  :class="[
                    'lists-data',
                    { 'get-list': getFlex(props.row.lists) },
                  ]"
                  v-else
                >
                  <p
                    class="list-title"
                    v-for="(item, index) in props.row.lists"
                    style="margin: 0 5px"
                    :key="index"
                  >
                    {{ item.offerId }}:{{ item.offerName }}
                  </p>
                </div>
              </div>
            </div>
            <div class="list-wrap"></div>
          </template>
        </el-table-column>
        <el-table-column width="40px">
          <template slot-scope="props">
            <div
              class="spread-box"
              v-show="getShow(props.row.lists)"
              style="cursor: pointer"
              @click="clickMoment(props)"
            >
              <i
                :class="[
                  'el-icon-arrow-right spread-btn',
                  { 'spread-item': props.row.pgId == momentId },
                ]"
              ></i>
            </div>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="listTitle" label="产品列表" align="center" /> -->

        <!-- <el-table-column type="expand">
          <template slot-scope="props">
            <div class="hidden-wrap">
              <div
                class="show-title"
                v-for="(item, index) in props.row.lists"
                :key="index"
              >
                {{ item.offerId }} ：{{ item.offerName }}
              </div>
            </div>
          </template>
        </el-table-column> -->

        <!-- <el-table-column type="expand">
          <template slot-scope="props">
            <div class="hidden-box">
              <div
                class="show-title"
                v-for="(item, index) in props.row.lists"
                :key="index"
              >
                {{ item.offerId }} ：{{ item.offerName }}
              </div>
            </div>
          </template>
        </el-table-column> -->
      </el-table>
      <el-pagination
        background
        :current-page.sync="queryData.pageNo"
        :page-size="queryData.pageSize"
        :total="queryData.pageTotal"
        @size-change="getChange"
        @current-change="getSearch"
        style="margin-top: 20px; text-align: center"
        :page-sizes="[10, 20, 30, 50, 70, 100]"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
  </div>
</template>

<script>
import apiSend from "@/api/iop/crm/httpRequest";
import Clipboard from "clipboard";
export default {
  data() {
    return {
      formInline: {
        mobile: "",
        region: "Y001000099",
      },
      menuOptions: [
        { name: "crm弹窗", value: "Y001000099" },
        { name: "目标客户校验", value: "CRM_targetCust" },
      ],
      tableData: [],
      activeNames: ["1"],
      queryData: {
        pageNo: 1,
        pageSize: 10,
        pageTotal: 0,
      },
      detailInfo: {
        id: "",
        data: {},
      },
      expands: [],
      momentId: "",
    };
  },
  computed: {},
  created() {},
  mounted() {
    // this.getSearch();
  },
  methods: {
    copyTitle(refs) {
      var clipboard = new Clipboard("." + refs);
      clipboard.on("success", (e) => {
        this.$message.success("复制成功!"); //这里你如果引入了elementui的提示就可以用，没有就注释即可
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", (e) => {
        // 不支持复制
        this.$message.warning("该浏览器不支持自动复制!");
        // 释放内存
        clipboard.destroy();
      });
    },
    getFlex(lists) {
      console.log(lists);
      return lists.length < 3;
    },
    getShow(lists) {
      let str = lists.reduce((prev, cur, currentIndex) => {
        let strings = currentIndex == lists.length - 1 ? "" : "、";
        return prev + cur.offerId + ":" + cur.offerName + strings;
      }, "");
      return str.length > 18;
    },
    clickMoment(params) {
      if (this.momentId === params.row.pgId) {
        this.momentId = "";
      } else {
        this.momentId = params.row.pgId;
      }
    },
    onKeyUp: function () {
      var self = this;
      self.formInline.mobile = self.formInline.mobile.replace(/[^\d]/g, "");
    },
    validatorData() {},
    getTitle(list) {
      let str = "";
      let arrLen = list.length;
      list.forEach((item, index) => {
        let strings = index == arrLen - 1 ? "" : "、";
        str += item.offerId + ":" + item.offerName + strings;
      });
      str = str.length > 18 ? str.substr(0, 18) + "..." : str;
      return str;
    },
    getChange(e) {
      this.queryData.pageSize = e;
      this.getSearch();
    },
    getSearch() {
      if (!this.formInline.mobile) {
        this.$message.warning("请输入号码！");
        return;
      }
      let params = {
        eventCode: this.formInline.region,
        msisdn: this.formInline.mobile,
        pageNo: this.queryData.pageNo,
        pageSize: this.queryData.pageSize,
      };
      apiSend
        .findActiveOfferOffInfo({ data: params })
        .then((res) => {
          // this.tableData = res.data.data;
          let data = res.data.data.records;
          this.tableData = data;
          this.tableData.map((item) => {
            let obj = item;
            item["startDate"] = item["startDate"].split(" ")[0];
            item["endDate"] = item["endDate"].split(" ")[0];
            item["listTitle"] = this.getTitle(item.lists);
            item["nameTitle"] =
              item.pgName.length > 10
                ? item.pgName.substr(0, 10) + "..."
                : item.pageName;
          });
          this.queryData.pageNo = res.data.data.current;
          this.queryData.pageSize = res.data.data.size;
          this.queryData.pageTotal = res.data.data.total;
        })
        .catch((err) => {
          this.$message.error(err.data.msg);
        });
    },
  },
};
</script>
<style lang="less">
.app-main {
  padding: 15px 20px;
}
.menu-right .menu-btn {
  display: flex !important;
}
.page-container {
  box-sizing: border-box;
  width: 100%;
  padding: 30px 20px;
  box-shadow: 0 0 5px #999;
  border-radius: 5px;
  background-color: #fff;
  .menu-right .upload-demo {
    display: inline-block;
    margin: 10px;
  }
}
.export-dialog {
  .dialog-top {
    display: flex;
    justify-content: space-between;
    .dialog-left {
      display: flex;
      .upload-demo {
        margin-right: 10px;
        position: relative;
        .el-upload-list {
          position: absolute;
          top: 30px;
          left: 0;
        }
      }
    }
  }
  .dialog-info {
    margin-top: 50px;
    min-height: 300px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    line-height: 1.5;
  }
  .btn-group {
    text-align: right;
  }
}
.el-message .el-message-box__wrapper {
  z-index: 99999;
}

.expand-box {
  .hidden-box {
    // width: 18.3%;
    // float: right;
    // text-align: left;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .show-title {
    font-size: 13px;
    color: #999;
    line-height: 2;
    box-shadow: 0 0 5px #999;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 8px 5px;
    // margin-top: 5px;
    // &:nth-child(1) {
    //   margin-top: 0;
    // }
  }
  .el-table__expanded-cell {
    padding: 10px 50px;
  }
  .list-wrap {
    position: relative;
    padding-right: 15px;
    box-sizing: border-box;
  }
  .lists-data {
    display: flex;
    flex-wrap: wrap;
  }
}
.hidden-wrap {
  float: right;
  width: 18%;
}
.spread-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.spread-btn {
  // position: absolute;
  // right: 0px;
  // top: 5px;
  transition: 0.3s;
  display: inline-block;
}
.spread-item {
  transform: rotate(90deg);
}
.table-input {
  width: 100%;
  border: none;
  background: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.table-input[type="text"]:focus {
  border: none;
}
.get-list {
  justify-content: center;
}
.p-name {
  display: block;
  cursor: pointer;
  width: 100%;
}
.get-hidden {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>