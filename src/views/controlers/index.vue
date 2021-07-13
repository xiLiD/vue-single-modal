<template>
  <div class="iframe-home">
    <el-tabs
      v-model="tabs_value"
      type="card"
      @tab-remove="removeTab"
      @tab-click="tabClick"
      class="tabs"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :label="item.title"
        :key="item.name"
        :closable="item.route != 'workTable'"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
    <div class="iframe-wrapper">
      <div class="iframe-container">
        <div>
          <iframe
            :src="item.redirect"
            ref="iframe"
            frameborder="0"
            :width="getWidth"
            :height="getHeight"
            v-for="item in iframes"
            :key="item.id"
            v-show="tabs == item.name"
          ></iframe>
        </div>
        <keep-alive>
          <router-view v-show="current > 0"></router-view
        ></keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import routesTarget from "./resource/json/routes.json";
import iframeTarget from "./iframe/index";
// import { mapState } from "vuex";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("worker");
const { setRoutes, setTabs } = mapMutations(["setRoutes", "setTabs"]);
export default {
  components: {
    iframeTarget,
  },
  data() {
    return {
      editableTabsValue: "",
      // editableTabs: [],
      tabIndex: 1,
      bindUrl: "",
      closeable: true,
    };
  },
  computed: {
    ...mapState({
      tabs(state) {
        return state.tabs;
      },
      iframes(state) {
        return state.workRoutes.filter((item) => item.route == "iframe");
      },
      current(state) {
        console.log(state);
        return state.workRoutes.filter(
          (item) => item.route != "iframe" && state.tabs == item.name
        ).length;
      },
      routes(state) {
        console.log(state);
        return state.workRoutes.filter((item) => item.name == state.tabs);
      },
    }),
    getWidth() {
      return window.innerWidth - 20 - 20 + "px";
    },
    getHeight() {
      return window.innerHeight - 61 + "px";
    },
    editableTabs: {
      get() {
        return this.$store.state.worker.workRoutes;
      },
      set(v) {
        setRoutes.call(this, v);
      },
    },
    tabs_value: {
      get() {
        return this.$store.state.worker.tabs;
      },
      set(v) {
        setTabs.call(this, v);
      },
    },
  },
  methods: {
    tabClick(e) {
      let eArr = this.editableTabs.filter((item) => item.name == e.name);
      // this.$store.commit("worker/setTabs", eArr[0].name);
      setTabs.call(this, eArr[0].name);
      if (eArr[0].route != "iframe") {
        this.$router.push({
          name: eArr[0].route,
          params: {
            src: eArr[0].redirect,
          },
        });
      }
    },
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      this.tabs_value = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.tabs_value || "1";
      let routeTarget = {};
      console.log(activeName, targetName);
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index - 1];
            routeTarget = nextTab;
            if (nextTab) {
              activeName = nextTab.name;
            }
            console.log(nextTab);
          }
        });
      }
      setTabs.call(this, activeName);
      // this.$store.commit("worker/setTabs", activeName);
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
      setRoutes.call(this, this.editableTabs);
      // this.$store.commit("worker/setRoutes", this.editableTabs);
      let target = {
        path: routeTarget.route || "workTable",
      };
      if (routeTarget.route == "iframe") {
        target.query = {
          src: routeTarget.redirect,
        };
      }
      this.$router.push(target);
    },
  },
};
</script>
<style lang="less">
.iframe-home {
  width: 100%;
  .tabs {
    position: sticky;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 99999;
    /deep/ .el-tabs__header {
      margin-bottom: 5px;
    }
  }
}
.el-tabs__header {
  margin-bottom: 0;
}
.iframe-wrapper {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;

  .iframe-container {
    padding: 0px 10px;
    box-sizing: border-box;
    // box-shadow: 0 0 5px #999;
    border: 1px solid #ddd;
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;
    // height: calc(100vh - 61px);
    // overflow-y: scroll;
  }
  iframe {
    width: 100%;
    min-height: calc(100vh - 56px - 40px - 60px);
  }
}
</style>