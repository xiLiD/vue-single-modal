<template>
  <div class="net-home">
    <div class="net-tab">
      <div class="tab-menu">
        <div
          :class="['tab-item', watchIndex == index ? 'active' : '']"
          v-for="(item, index) in watchType"
          :key="item.key"
          @click="setWatch"
          :data-index="index"
        >
          <i :class="item.icon"></i>
          <span>{{ item.value }}</span>
        </div>
        <!-- <div class="tab-item">
          <i class="el-icon-mobile"></i>
          <span>手机预览</span>
        </div>
        <div class="tab-item">
          <i class="el-icon-monitor"></i>
          <span>电脑预览</span>
        </div> -->
      </div>
      <div class="tab-right">
        <div class="btn-see">关闭预览</div>
        <div class="btn-answer">测试作答</div>
      </div>
    </div>
    <div class="net-home-center">
      <watch-message v-show="watchIndex == 0" ref="wtMessage"></watch-message>
      <watch-mobile v-show="watchIndex == 1" ref="wtMobile"></watch-mobile>
      <watch-port v-show="watchIndex == 2" ref="wtPort"></watch-port>
    </div>
  </div>
</template>
<script>
import WatchMessage from "./components/message";
import WatchPort from "./components/answer/index";
import WatchMobile from "./components/mobile/index";
export default {
  components: {
    WatchMessage,
    WatchPort,
    WatchMobile,
  },
  data() {
    return {
      watchType: [
        {
          key: 1,
          value: "短信预览",
          icon: "el-icon-chat-dot-square",
        },
        {
          key: 2,
          value: "手机预览",
          icon: "el-icon-mobile",
        },
        {
          key: 3,
          value: "电脑预览",
          icon: "el-icon-monitor",
        },
      ],
      watchIndex: "",
    };
  },
  methods: {
    setWatch(e) {
      let index = e.currentTarget.getAttribute("data-index");
      this.watchIndex = index;
      console.log(this.watchIndex, index);

      if (index == 1 || index == 2) {
        console.log(this.$refs["wtPort"]);
        this.$refs["wtPort"].setMobile(index == 1);
      }
    },
  },
};
</script>
<style lang="less" scoped>
body {
  overflow: hidden i !important;
}
.net-home-center {
  overflow: hidden !important;
}
.net-home {
  padding: 15px 30px;
  box-sizing: border-box;
  width: 100vw;

  .net-home-center {
    margin-top: 30px;
    padding: 15px 20px;
    box-sizing: border-box;
    box-shadow: 0 0 3px #999;
    height: 620px;
    border-radius: 5px;
  }
}
.net-tab {
  //   display: flex;
  width: 100%;
  position: relative;
  //   padding-bottom:30px;
  //   justify-content: center;
}
.net-tab::after {
  content: "";
  position: absolute;
  bottom: -15px;
  width: 100%;
  height: 1px;
  background-color: #ddd;
}
.tab-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  margin: 0 auto;

  .tab-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-around;
  }
  .tab-item.active {
    color: red;
  }
  .tab-item:hover {
    color: red;
  }
  i {
    font-size: 24px;
  }
  span {
    font-size: 14px;
    margin-left: 5px;
  }
}
.tab-right {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  display: flex;
  > div {
    cursor: pointer;
  }
  .btn-answer {
    margin-left: 10px;
  }
}
</style>