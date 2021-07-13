<template>
  <el-dialog
    title="请选择报表需要展现的字段"
    :visible.sync="dialogVisible"
    width="70%"
  >
    <!-- <span>这是一段信息</span> -->
    <div class="check-box">
      <el-checkbox-group v-model="checkList">
        <el-checkbox
          v-for="(checkItem, checkIndex) in getMenu"
          :label="checkItem"
          :key="checkIndex"
          >{{ checkItem }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="getSearch" size="mini">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import fields from "../json/config.js";
export default {
  data() {
    return {
      dialogVisible: false,
      checkList: [
        "日期",
        "月份",
        "地市",
        "区县",
        "网格",
        "客户等级",
        "受理渠道类型",
        "一级目录",
        "二级目录",
        "三级目录",
        "四级目录",
        "五级目录",
        "六级目录",
        "七级目录",
      ],
      checkMenu: [
        {
          name: "日期",
          key: "date",
        },
        {
          name: "月份",
          key: "month",
        },
        {
          name: "地市",
          key: "city",
        },
        {
          name: "区县",
          key: "area",
        },
        {
          name: "网格",
          key: "grid",
        },
        {
          name: "客户等级",
          key: "level",
        },
        {
          name: "受理渠道类型",
          key: "cannal",
        },
        {
          name: "一级目录",
          key: "c-1",
        },
        {
          name: "二级目录",
          key: "c-2",
        },
        {
          name: "三级目录",
          key: "c-3",
        },
        {
          name: "四级目录",
          key: "c-4",
        },
        {
          name: "五级目录",
          key: "c-5",
        },
        {
          name: "六级目录",
          key: "c-6",
        },
        {
          name: "七级目录",
          key: "c-7",
        },
      ],
    };
  },
  computed: {
    getMenu() {
      return this.checkMenu.map((item) => item.name);
    },
  },
  mounted() {
    console.log(this.checkMenu);
  },
  methods: {
    setShow(bool) {
      this.dialogVisible = bool;
    },
    getSearch() {
      let checkList = this.checkList;
      let arr = [];
      for (var i in fields) {
        if (checkList.includes(fields[i])) {
          arr.push({
            key: i,
            value: fields[i],
          });
        }
      }
      // arr = arr.concat([
      //   {
      //     key: "count",
      //     value: "工单量",
      //   },
      //   {
      //     key: "num",
      //     value: "平均处理时长",
      //   },
      // ]);
      this.$emit("getSearch", arr);
      this.setShow(false);
    },
  },
};
</script>
<style lang="less" scoped>
.el-checkbox {
  margin-top: 10px;
}
</style>