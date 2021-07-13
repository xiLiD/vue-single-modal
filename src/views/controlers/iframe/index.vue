<template>
  <div>
    <div>
      <iframe
        :src="item.redirect"
        ref="iframe"
        frameborder="0"
        :width="getWidth"
        :height="getHeight"
        v-for="item in routes"
        :key="item.id"
        v-show="tabs == item.name"
      ></iframe>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      urlPath: "",
      loading: true,
    };
  },
  computed: mapState({
    tabs(state) {
      return state.tabs;
    },
    routes(state) {
      return state.workRoutes.filter((item) => item.route == "iframe");
    },
    getWidth() {
      return window.innerWidth - 20 - 20 + "px";
    },
    getHeight() {
      return window.innerHeight - 61 + "px";
    },
  }),
  mounted() {
    this.urlPath = this.$route.query.src;
    const { iframe } = this.$refs;
    // IE和非IE浏览器，监听iframe加载事件不一样，需要兼容
    const that = this;
    if (iframe.attachEvent) {
      // IE
      iframe.attachEvent("onload", () => {
        that.stateChange();
      });
    } else {
      // 非IE
      iframe.onload = function () {
        that.stateChange();
      };
    }
  },
  methods: {
    stateChange() {
      this.loading = false;
    },
  },
};
</script>