<template>
    <div :class="['tree-box',dialogVisible ? 'show-tree': '']" @click="dialogVisible= false">

    <div :class="['tree-unit']" >
          <div class="tree-title">地域与目录树选择</div>
      <div class="close-icon">
        <i class="el-icon-close"></i>
      </div>
      <!-- <div class="tree-menu">
        <el-select v-model="currentItem" placeholder="请选择" size="mini">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
            size="mini"
          >
          </el-option>
        </el-select>
      </div> -->

      <div class="unit-center">
        <el-tree
        class="other-tree"
          :data="areaList"
          node-key="id"
          ref="more-tree"
          lazy
          show-checkbox
          :load="loadNode"
          highlight-current
          :props="defaultProps"
          @node-click="treeClick"
        >
        </el-tree>
        <!-- <el-form>
          <el-form-item>
            <el-input
              placeholder="请输入内容"
              size="mini"
              v-model="searchInput"
            >
              <i
                slot="suffix"
                class="el-input__icon el-icon-search"
                @click="searchTable"
              ></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              size="mini"
              @change="handleCheckAllChange"
              >全选</el-checkbox
            >
            <el-checkbox-group v-model="checkList" @change="handleCheckChange">
              <el-checkbox
                :label="item"
                v-for="(item, index) in searchLists"
                :key="index"
                >{{ item }}</el-checkbox
              >
            </el-checkbox-group>
          </el-form-item>
        </el-form> -->
      </div>

      <div class="unit-footer">
        <el-button type="primary" size="mini">确定</el-button>
      </div>
    </div>
    </div>
</template>
<script>
import apiSend from "@/api/iop/control/httpRequest";
export default {
  data() {
    var data = [
      {
        label: "地域",
        keyPath: "findCntyVo",
        keyTarget: {
          id: "upChnlType",
          name: "upChnlTypeName",
        },
        params: {
          cityCode: "",
          cityName: "",
          cntyCode: "",
          cntyName: "",
          gridCode: "",
          gridName: "",
        },
        id: 1,
        foreFather: null,
        children: [
          {
            label: "长沙市",
            value: "731",
          },
          {
            label: "岳阳市",
            value: "730",
          },
          {
            label: "益阳市",
            value: "737",
          },
          {
            label: "常德市",
            value: "736",
          },
          {
            label: "张家界市",
            value: "744",
          },
          {
            label: "湘西土家族苗族自治区",
            value: "743",
          },
          {
            label: "怀化市",
            value: "745",
          },
          {
            label: "娄底市",
            value: "738",
          },
          {
            label: "湘潭市",
            value: "732",
          },
          {
            label: "株洲市",
            value: "733",
          },
          {
            label: "邵阳市",
            value: "739",
          },
          {
            label: "衡阳市",
            value: "734",
          },
          {
            label: "永州市",
            value: "746",
          },
          {
            label: "郴州市",
            value: "735",
          },
        ],
      },
      {
        label: "七级目录树",
        keyPath: "findSevenCatalogInfo",
        foreFather: null,
        keyTarget: {
          id: "upChnlType",
          name: "upChnlTypeName",
        },
        id: 6,
        children: [],
        params: {
          busiType1Code: "",
          busiType1Name: "",
          busiType2Code: "",
          busiType2Name: "",
          busiType3Code: "",
          busiType3Name: "",
          busiType4Code: "",
          busiType4Name: "",
          busiType5Code: "",
          busiType5Name: "",
          busiType6Code: "",
          busiType6Name: "",
          dataSrc: "",
          secondConfirmCode: "",
          secondConfirmName: "",
        },
      },
    ];
    return {
      defaultProps: {
        children: "children",
        label: "label",
        foreFather: "foreFather",
        keyPath: "keyPath",
      },
      dialogVisible: false,
      currentItem: "",
      options: ["展开一级目录", "展开二级目录", "展开三级目录"],
      areaList: data,
      checkList: [],
      searchInput: "",
      isIndeterminate: false,
      checkAll: false,
      searchLists: ["10086热线", "10086服务监督"],
    };
  },
  mounted() {
    this.setId(this.areaList);
    this.setCity();
  },
  methods: {
    setCity() {
      this.areaList.forEach((item) => {
        if (item.label == "地域") {
          item.children.forEach((childrenItem) => {
            childrenItem["keyPath"] = item.keyPath;
            childrenItem["foreFather"] = item.label;
            childrenItem["params"] = item.params;
            childrenItem["children"] = [];
          });
        }
      });
    },
    // 将list中的数据填充到 children 中
    setList(arr) {
      for (var i in arr) {
        for (var prop in arr[i]) {
          if (arr[i][prop] != null) {
            let obj = {};
            obj[prop] = arr[i][prop];
            if (prop.indexOf("Name") != -1) {
              arr[i]["label"] = arr[i][prop];
            }
            if (prop.indexOf("Code") != -1) {
              arr[i]["currentId"] = arr[i][prop];
            }
          }
        }
        let newArr = [];
        if (Object.prototype.hasOwnProperty.call(arr[i], "list")) {
          if (
            Object.prototype.toString.call(arr[i].list) == "[object Object]"
          ) {
            newArr = arr[i].list.data || [];
          } else {
            newArr = arr[i].list || [];
          }
        }
        arr[i].children = newArr;
        this.setList(newArr);
      }
      return arr;
    },
    treeClick(target, node, current) {
      if (target.label == "地域") {
        return;
      }
      if (target.children.length > 0) {
        return;
      }
      if (target.label == "地域" && target.foreFather == "null") {
        return;
      }
      if (target.foreFather == "地域") {
        target.params["cityCode"] = target.value;
      }
      if (!target.keyPath) {
        return;
      }

      apiSend[target.keyPath]({ data: target.params, showLoading: false })
        .then((res) => {
          let arr = this.setList(res.data.data);
          let newArr = this.setChildren(this.areaList, target, arr);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setChildren(arr, target, requestArr) {
      arr.forEach((item) => {
        if (item.label == target.label) {
          item.children = requestArr;
          item.foreFather = target.foreFather;
        } else {
          if (Object.prototype.hasOwnProperty.call(item, "children")) {
            this.setChildren(item.children, target, requestArr);
          }
        }
      });
      return arr;
    },
    handleCheckChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.searchLists.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.searchLists.length;
    },
    handleCheckAllChange(value) {
      let newArr = this.searchLists.map((item) => {
        return item;
      });
      let arr = value ? newArr : [];
      this.checkList = arr;
      this.isIndeterminate = false;
    },
    getSearch() {
        var currentKeys = this.$refs["more-tree"].getCheckedNodes();
        return currentKeys;
    },
    setId(arr) {
      arr.forEach((item, index) => {
        if (Object.prototype.hasOwnProperty.call(item, "children")) {
          item.children.forEach((childItem, childIndex) => {
            childItem.id = Number(item.id + "" + index + "" + (childIndex + 1));
          });
          this.setId(item.children);
        }
      });
      return arr;
    },
    loadNode(node, resolve) {
      // console.log(node);
      if (node.level === 0) {
        return resolve(this.areaList);
      }
      setTimeout(() => {
        resolve(node.data.children);
      }, 500);
    },
    setShow(bool) {
      this.dialogVisible = bool;
    },
    searchTable() {
      console.log("查询数据！");
    },
  },
};
</script>
<style lang="less" scoped>
.tree-box {
  background-color:rgba(0,0,0,0.5);
  width: 100%;
  height:100vh;
  position: fixed;
  top:0;
  left:0; 
  overflow-y: scroll;
  z-index:1000;
  display: none;
  // display: flex;
  // justify-content: center;
  // align-items:center;
}
.tree-unit {
  box-sizing:border-box;
  width:70%;
  margin: 15vh auto 50px;
  border-radius: 5px;
  background-color:#fff;
  padding: 15px 20px;
  position:relative;
  min-height: 400px;
  max-height: 90vh;
  // opacity: 0;
}
/deep/ .el-select-dropdown__item {
  font-size: 12px !important;
}
.unit-center {
  display: flex;
  box-sizing: border-box;
  margin-top: 20px;
  justify-content: space-between;

  .el-form {
    width: 30%;
    // font-size: 12px;
    .el-checkbox {
      /deep/ .el-checkbox__label {
        font-size: 12px;
      }
    }
    .el-icon-search {
      cursor: pointer;
    }
  }
  .el-form-item {
    margin-bottom: 10px;
  }
  /deep/ .el-checkbox-group {
    display: flex;
    flex-direction: column;
    line-height: 2 !important;
  }
  
}
.unit-footer {
  position:absolute;
  right : 20px;
  bottom:15px;
}
.close-icon {
  position:absolute;
  right : 20px;
  top:15px;
  font-size:20px;
  cursor: pointer;
}
.show-tree {
  display: block;
}
.show-tree .tree-unit {
  // opacity: 1;
  // transition: 3s;
  z-index:9999;
  animation: showFrame .3s ease-in-out;
  // margin-top: 40px;
}
.tree-title {
  line-height: 24px;
    font-size: 18px;
    color: #303133;
}
@keyframes showFrame {
  0%{
    opacity: 0;
    margin-top: 14vh;
  }
  100% {
    margin-top: 15vh;
    opacity: 1;
  }
}
</style>