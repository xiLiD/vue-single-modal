<template>
  <div class="control-wrapper">
    <div class="wrapper-left">
      <div class="wrapper-left-tp shadow-bk">
        <div class="wrapper-title">指挥中心/工作台</div>
        <div class="wrapper-user">
          <div class="user-desc">
            <el-avatar
              shape="circle"
              size="medium"
              fit="cover"
              :src="circleUrl"
            ></el-avatar>
            <label>早安，李雷！</label>
          </div>
          <div class="notice-desc">
            <div class="notice-title">
              <label
                class="label-title"
                @click="toPage"
                data-route="announceList"
                >公告栏</label
              >
              <label class="label-num">(3)</label>
            </div>
            <div class="dynamic-desc">
              <el-carousel height="20px" direction="vertical" :autoplay="true">
                <el-carousel-item
                  v-for="(item, index) in noticeList"
                  :key="index"
                >
                  <p>{{ item }}</p>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="line-tag">
            <p><label @click="topMore(0)">待办</label><label>(3)</label></p>
            <p>
              <label @click="topMore(1)">我的申请</label><label>(10)</label>
            </p>
          </div>
        </div>
      </div>
      <div class="wrapper-left-ct shadow-bk">
        <div class="ct-tab">
          <ul>
            <li
              v-for="(item, index) in topMenu"
              :key="index"
              :class="topIndex == index ? 'active-line' : ''"
              @click="checkTopMenu"
              :data-menuindex="index"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
        <div class="ct-table">
          <div class="table-title">
            <div>
              {{ getTopTitle }} <label>({{ getTopNum }})</label>
            </div>
            <div class="more" @click="getTopMore">
              更多
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </div>
          <div class="table-content">
            <el-table
              :data="tableData"
              style="width: 100%"
              row-key="codeKey"
              border
            >
              <el-table-column label="活动编码" prop="city" align="center" />
              <el-table-column label="活动名称" prop="cnty" align="center" />
              <el-table-column label="当前审批人" prop="grid" align="center" />
              <el-table-column label="申请人" prop="order" align="center" />
              <el-table-column
                label="申请时间"
                prop="population"
                align="center"
              />
              <el-table-column
                label="当前节点"
                prop="popuNum1"
                align="center"
              />
            </el-table>
          </div>
        </div>
      </div>
      <div class="wrapper-left-ct shadow-bk left-bt">
        <div class="ct-tab">
          <ul>
            <li
              v-for="(item, index) in bottomMenu"
              :key="index"
              :class="bottomIndex == index ? 'active-line' : ''"
              @click="checkBottomMenu"
              :data-menuindex="index"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
        <div class="ct-table">
          <div class="table-title">
            <ul>
              <li
                @click="checkMenu(index)"
                v-for="(item, index) in bottomMenu[bottomIndex].menu"
                :key="index"
                :class="bottomActive == index ? 'active-line' : ''"
              >
                {{ item["value"] }} <label>{{ item["num"] }}</label>
              </li>
            </ul>
            <div
              class="more"
              @click="toFrame"
              :data-url="bottomMenu[bottomIndex].link"
              :data-title="bottomMenu[bottomIndex].title"
            >
              更多
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </div>
          <div class="table-content">
            <el-table
              :data="tableData"
              style="width: 100%"
              row-key="codeKey"
              border
            >
              <el-table-column label="活动编码" prop="city" align="center" />
              <el-table-column label="活动名称" prop="cnty" align="center" />
              <el-table-column label="当前审批人" prop="grid" align="center" />
              <el-table-column label="申请人" prop="order" align="center" />
              <el-table-column
                label="申请时间"
                prop="population"
                align="center"
              />
              <el-table-column
                label="当前节点"
                prop="popuNum1"
                align="center"
              />
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-right">
      <div class="speedy-nav shadow-bk">
        <div class="nav-top">
          <div class="nav-title">快捷功能导航</div>
          <div class="nav-settle" @click="toPage" data-route="navagation">
            设置
          </div>
        </div>
        <div class="nav-desc">
          <ul>
            <li
              v-for="(item, index) in navMenu"
              :key="index"
              @click="toFrame"
              :data-url="item.url"
              :data-title="item.title"
            >
              {{ item["title"] }}
              <!-- <el-button type="primary" size="mini" plain></el-button> -->
            </li>
          </ul>
        </div>
      </div>
      <div class="wrapper-right-ct shadow-bk">
        <div class="helper">
          <div class="nav-top">
            <div class="nav-title">帮助中心</div>
            <div
              class="nav-settle"
              @click="toFrame"
              data-url="/iop2/monitoring/interaction/interaction.html#/"
              data-title="帮助中心"
            >
              进入
            </div>
          </div>
          <div class="help-desc">
            <ul>
              <li v-for="(item, index) in helperList" :key="index">
                <label>{{ index + 1 }}、{{ item }}</label>
              </li>
            </ul>
          </div>
        </div>
        <div class="writer-area">
          <div class="nav-top">
            <div class="nav-title">我要留言</div>
            <!-- <div class="nav-settle" @click="toPage" data-route="comment">
              评论中心
            </div> -->
          </div>
          <div class="writer-desc">
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请输入内容"
              v-model="suggestion"
            >
            </el-input>
            <el-button type="primary" size="mini">提交</el-button>
          </div>
        </div>
      </div>

      <div class="tag-rank shadow-bk">
        <div class="nav-top">
          <div class="nav-title">标签使用排行TOP10</div>
        </div>
        <div class="tag-rank-desc">
          <el-table
            :data="rankList"
            style="width: 100%"
            row-key="codeKey"
            border
          >
            <el-table-column label="标签名称" prop="label" align="center" />
            <el-table-column label="引用次数" prop="count" align="center" />
            <el-table-column
              label="创建时间"
              prop="creat_time"
              align="center"
            />
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import routesTarget from "../resource/json/routes.json";
import {createNamespacedHelpers } from "vuex";
const { mapMutations} = createNamespacedHelpers("worker");
const {setRoutes,setTabs} = mapMutations(["setRoutes","setTabs"]);
console.log(setRoutes)
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      topMenu: [
        {
          title: "我的待办",
          name: "auditList",
          desc: "待审批活动列表",
          num: 10,
        },
        {
          title: "我的申请",
          name: "activity",
          desc: "我的活动申请列表",
          num: 12,
        },
        {
          title: "我的预警",
          name: "warnList",
          desc: "我的监控指标预警列表",
          num: 13,
        },
      ],
      bottomMenu: [
        {
          title: "我的活动",
          link: "/pcm/manage/index.html#/activitvs/main-layouti",
          // link: "https://www.baidu.com/",
          num: 15,
          menu: [
            {
              key: "all",
              value: "活动总数",
              num: 300,
            },
            {
              key: "excute",
              value: "执行中",
              num: 150,
            },
            {
              key: "stop",
              value: "暂停",
              num: 50,
            },
            {
              key: "finish",
              value: "完成",
              num: 100,
            },
          ],
        },
        {
          title: "我的客群",
          link: "/ckm/ckm-index.html#/segment/",
          menu: [
            {
              key: "all",
              value: "活动总数",
              num: 120,
            },
            {
              key: "excute",
              value: "执行中",
              num: 30,
            },
            {
              key: "stop",
              value: "暂停",
              num: 0,
            },
            {
              key: "finish",
              value: "完成",
              num: 90,
            },
          ],
        },
        {
          title: "我的画像",
          link: "/ckm/ckm-index.html#/profileconfig/",
          menu: [
            {
              key: "all",
              value: "活动总数",
              num: 200,
            },
            {
              key: "excute",
              value: "执行中",
              num: 15,
            },
            {
              key: "stop",
              value: "暂停",
              num: 10,
            },
            {
              key: "finish",
              value: "完成",
              num: 175,
            },
          ],
        },
      ],
      topIndex: 0,
      bottomIndex: 0,
      bottomList: [
        {
          key: "all",
          value: "活动总数",
          num: 20,
        },
        {
          key: "excute",
          value: "执行中",
          num: 20,
        },
        {
          key: "stop",
          value: "暂停",
          num: 20,
        },
        {
          key: "finish",
          value: "完成",
          num: 20,
        },
      ],
      bottomActive: 0,
      navMenu: [
        {
          key: 1,
          title: "创建活动",
          url: "/pcm/manage/index.html#/activitvs/main-layouti",
        },
        {
          key: 2,
          title: "创建客群",
          url: "/ckm/ckm-index.html#/segment/",
        },
        {
          key: 3,
          title: "创建画像",
          url: "/ckm/ckm-index.html#/profileconfig/",
        },
        {
          key: 6,
          title: "投诉用户导入",
          url: "/iop2/IOPComplain.html",
        },
      ],
      helperList: [
        "网格自上而下（IOP+网格）场景解说",
        "批量短信场景解说",
        "标签创建客户群场景解说",
        "交互式查询导入客户群场景解说",
        "一级手厅文字类触点活动配置手册",
        "IOP平台操作手册",
      ],
      suggestion: "",
      rankList: [],
      tableData: [],
      noticeList: [
        "即时滚动的公告通知",
        "即时滚动的公告通知",
        "即时滚动的公告通知",
      ],
    };
  },
  computed: {
    getHeight() {
      return (
        (window.innerHeight -
          115 -
          30 -
          30 -
          10 -
          33 -
          30 -
          30 -
          20 -
          5 -
          41 -
          30 -
          30) /
          2 +
        "px"
      );
    },
    getRankHeight() {
      return (
        window.innerHeight - 137 - 306 - 30 - 10 - 12 - 41 - 30 - 30 + "px"
      );
    },
    getTopTitle() {
      return this.topMenu[this.topIndex].desc;
    },
    getTopNum() {
      return this.topMenu[this.topIndex].num;
    },
        editableTabs() {
       return this.$store.state.worker.workRoutes;
      },
      tabs_value(){
     return this.$store.state.worker.tabs;
  }
  },
  mounted() {
    this.getTable();
    this.getRank();
  },
  methods: {
    checkMenu(index) {
      this.bottomActive = index;
    },
    topMore(index) {
      let route = this.topMenu[index].name;
      this.updateRoutes(route, {
        t: "strict",
      });
    },
    getTopMore() {
      let route;
      route = this.topMenu[this.topIndex].name;
      this.updateRoutes(route);
    },
    toFrame(e) {
      let frame = e.target.getAttribute("data-url");
      let title = e.target.getAttribute("data-title");
      frame =
        window.location.host.indexOf("localhost") != -1
          ? "https://10.154.144.169:9008" + frame
          : window.location.origin + frame;
      console.log(frame);
      if (this.editableTabs.some((item) => item.title == title)) {
        let tabs = this.editableTabs.filter(
          (item) => item.title == title
        )[0].name;
        setTabs.call(this,tabs)
        // this.$store.commit("worker/setTabs", tabs);
        // this.$router.push({
        //   path: "/moreMenu/iframe",
        //   query: {
        //     src: frame,
        //   },
        // });
        return;
      }
      let oldRoutes = this.editableTabs;
      let max = oldRoutes[0].name;
      oldRoutes.forEach(
        (item) => (max = item.name > Number(max) ? item.name : max)
      );
      max = max < 30 ? "99" : max;
      max++; // max++;
      let newRoutes = oldRoutes.concat([
        {
          title: title,
          name: max.toString(),
          route: "iframe",
          redirect: frame,
        },
      ]);
      setRoutes.call(this,newRoutes);
      setTabs.call(this,max.toString())
      // this.$store.commit("worker/setRoutes", newRoutes);
      // this.$store.commit("worker/setTabs", max.toString());
      // this.$router.push({
      //   path: "/moreMenu/iframe",
      //   query: {
      //     src: frame,
      //   },
      // });
    },
    toPage(e) {
      let route = e.currentTarget.getAttribute("data-route");
      this.updateRoutes(route);
    },
    updateRoutes(route, params = {}) {
      let currentRoute = routesTarget.routes.filter(
        (item) => item.route == route
      );
      let repObj = {
        path: "/moreMenu/" + route,
      };
      if (params.t) {
        repObj["query"] = {
          t: params.t,
        };
      }
      // console.log(currentRoute[0].name);
      if (this.editableTabs.some((item) => item.route == route)) {
        // this.$store.commit("worker/setTabs", currentRoute[0].name);
        setTabs.call(this,currentRoute[0].name)
        // this.$router.replace(repObj);
        return;
      }
      let arr = this.editableTabs.concat(currentRoute);
      let newRoutes = Array.from(new Set(arr));
      setTabs.call(this,currentRoute[0].name)
      setRoutes.call(this,newRoutes)
      // this.$store.commit("worker/setTabs", currentRoute[0].name);
      // this.$store.commit("worker/setRoutes", newRoutes);
      // this.$router.replace({
      //   path: "/moreMenu/" + route,
      // });
      this.$router.replace(repObj);
    },
    checkBottomMenu(e) {
      let currentIndex = e.currentTarget.getAttribute("data-menuindex");
      if (this.bottomIndex == currentIndex) return;
      this.bottomIndex = currentIndex;
    },
    checkTopMenu(e) {
      let currentIndex = e.currentTarget.getAttribute("data-menuindex");
      if (this.topIndex == currentIndex) return;
      this.topIndex = currentIndex;
    },
    getRank() {
      let data = [
        {
          label: "主套餐档次",
          count: "300",
          creat_time: "2021/3/20",
        },
        {
          label: "主套餐档次",
          count: "300",
          creat_time: "2021/3/20",
        },
        {
          label: "主套餐档次",
          count: "300",
          creat_time: "2021/3/20",
        },
        {
          label: "主套餐档次",
          count: "300",
          creat_time: "2021/3/20",
        },
        {
          label: "主套餐档次",
          count: "300",
          creat_time: "2021/3/20",
        },
        {
          label: "主套餐档次",
          count: "300",
          creat_time: "2021/3/20",
        },
      ];

      this.rankList = data;
      // console.log(this.tableData);
    },
    getTable() {
      let data = [
        {
          city: "活动编码1",
          cnty: "活动名称1",
          grid: "李雷",
          order: "王XX",
          population: "2021/3/20",
          popuNum1: "集运审批",
        },
        {
          city: "活动编码1",
          cnty: "活动名称1",
          grid: "李雷",
          order: "王XX",
          population: "2021/3/20",
          popuNum1: "集运审批",
        },
        {
          city: "活动编码1",
          cnty: "活动名称1",
          grid: "李雷",
          order: "王XX",
          population: "2021/3/20",
          popuNum1: "集运审批",
        },
        {
          city: "活动编码1",
          cnty: "活动名称1",
          grid: "李雷",
          order: "王XX",
          population: "2021/3/20",
          popuNum1: "集运审批",
        },
        {
          city: "活动编码1",
          cnty: "活动名称1",
          grid: "李雷",
          order: "王XX",
          population: "2021/3/20",
          popuNum1: "集运审批",
        },
      ];

      this.tableData = data;
      // console.log(this.tableData);
    },
  },
};
</script>
<style lang="less" scoped>
@import "../resource/style/common.less";
.control-wrapper {
  background-color: rgb(242, 242, 242);
  width: 100%;
  display: flex;
  justify-content: space-between;

  .wrapper-left {
    width: 65%;
    .wrapper-title {
      font-size: 18px;
      //   font-weight: bold;
      color: #409eff;
      letter-spacing: 1px;
      font-family: "Microsoft YaHei";
    }
    .wrapper-user {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .user-desc {
        display: flex;
        align-items: center;
        font-size: 18px;
        label {
          margin-left: 45px;
          letter-spacing: 2px;
        }
      }
      .notice-desc {
        .notice-title {
          font-size: 14px;

          .label-title {
            // text-decoration: underline;
            padding-bottom: 1px;
            cursor: pointer;
            border-bottom: 1px solid #333;
          }
          .label-num {
            padding-left: 5px;
          }
        }
        .dynamic-desc {
          margin-top: 10px;
          font-size: 12px;
          width: 200px;
          padding: 5px 10px;
          border-radius: 2px;
          background-color: rgb(250, 236, 216);
          line-height: 20px;
          letter-spacing: 0.5px;
        }
      }
    }
    .line-tag {
      font-size: 14px;
      p {
        &:nth-child(2) {
          margin-top: 10px;
        }
        label:nth-child(1) {
          text-decoration: underline;
          cursor: pointer;
        }
        label:nth-child(2) {
          margin-left: 5px;
        }
      }
    }
    .wrapper-left-ct {
      margin-top: 5px;
      font-size: 14px;
      .ct-tab {
        ul {
          display: flex;
          //   font-size: 14px;

          li {
            margin-left: 10px;
            color: #aaa;
            letter-spacing: 0.5px;
            cursor: pointer;
            &:nth-child(1) {
              margin-left: 0;
            }
          }
          li.active-line {
            font-weight: bold;
            color: #409eff;
          }
        }
      }
      .ct-table {
        margin-top: 10px;
        border-top: 1px solid #ddd;

        .table-title {
          padding: 0 10px;
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .more {
            font-size: 12px;
            cursor: pointer;
          }
        }
      }
    }
    .left-bt {
      .table-title {
        font-size: 12px;
        ul {
          display: flex;
          //   font-size: 14px;

          li {
            margin-left: 10px;
            color: #333;
            letter-spacing: 0.5px;
            cursor: pointer;
            &:nth-child(1) {
              margin-left: 0;
            }
          }
          li.active-line {
            font-weight: bold;
            color: #409eff;
          }
        }
      }
    }
  }
  .wrapper-right {
    width: 34%;
    margin-left: 1%;
    > div {
      padding-left: 10px;
      padding-right: 10px;
    }
    .nav-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nav-title {
        font-size: 15px;
        font-weight: bold;
        letter-spacing: 0.5px;
        color: #409eff;
      }
      .nav-settle {
        font-size: 12px;
        cursor: pointer;
      }
    }
    .speedy-nav {
      .nav-desc {
        padding-top: 10px;
        border-top: 1px solid #ddd;
        margin-top: 10px;
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            margin-left: 20px;
            padding: 5px 10px;
            border: 1px solid #b3d8ff;
            font-size: 12px;
            border-radius: 3px;
            max-width: 100px;
            // border: 1px solid #ddd;
            border-radius: 5px;
            cursor: pointer;
            color: #409eff;
            background: #ecf5ff;
            // margin-top: 10px;
            // &:nth-child(1),
            // &:nth-child(2),
            // &:nth-child(3) {
            //   margin-top: 0;
            // }
            &:nth-child(5n + 1) {
              margin-left: 0;
            }
            &:nth-child(n + 6) {
              margin-top: 10px;
            }
          }
          li:hover {
            color: #fff;
            background-color: #409eff;
            border-color: #409eff;
          }
        }
      }
    }
    .wrapper-right-ct {
      margin-top: 5px;
      .helper {
        .help-desc {
          margin-top: 15px;
          ul {
            display: flex;
            flex-direction: column;
            li {
              line-height: 1.5;
              font-size: 12px;
            }
          }
        }
      }
      .writer-area {
        border-top: 1px solid #ddd;
        margin-top: 15px;
        padding: 10px 0;

        .writer-desc {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: 15px;
          /deep/ .el-textarea {
            width: 80%;
          }
          .el-button {
            margin-left: 20px;
          }
        }
      }
    }
    .tag-rank {
      margin-top: 5px;
    }
  }
  .shadow-bk {
    background-color: #fff;
    border-radius: 3px;
    padding: 10px 0;
  }
  // .wrapper-left-tp {
  //   padding-top: 0;
  // }
}
</style>