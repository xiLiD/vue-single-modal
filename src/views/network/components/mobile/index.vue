<template>
  <iphone class="wow fadeInLeft2" data-wow-delay="0.5s">
    <div class="btn01 wow fadeInLeft2" data-wow-delay="1.5s"></div>
    <div class="btn02 wow fadeInLeft2" data-wow-delay="1.7s"></div>
    <div class="btn03 wow fadeInLeft2" data-wow-delay="1.9s"></div>
    <div class="btn04 wow fadeInRight2" data-wow-delay="1.5s"></div>
    <div class="skin wow fadeInRight2" data-wow-delay="1s">
      <div class="screen wow fadeInUp2" data-wow-delay="1.5s">
        <div class="peak wow fadeInDown2" data-wow-delay="2s">
          <div class="sound"></div>
          <div class="lens"></div>
          <div class="piece-l">
            <div class="circular-l"></div>
          </div>
          <div class="piece-r">
            <div class="circular-r"></div>
          </div>
        </div>
        <div class="area-l">
          <span id="time"></span>
        </div>
        <div class="area-r">
          <div class="signal">
            <span class="ico01"></span>
            <span class="ico02"></span>
            <span class="ico03"></span>
            <span class="ico04"></span>
          </div>
          <i class="fa fa-feed" aria-hidden="true"></i>
          <i class="fa fa-battery-full" aria-hidden="true"></i>
        </div>
        <!-- contact code begin -->
        <div :class="['net-container', 'net-mobile']">
          <div class="net-content">
            <div class="net-content-box">
              <div class="net-header">
                <h1>问卷标题</h1>
                <p>
                  感谢您能抽出几分钟时间来参加本次答题,现在我们就马上开始吧!
                </p>
              </div>
              <div class="net-center">
                <el-form ref="submitForm" class="submit-form">
                  <el-form-item v-for="(item, index) in naireList" :key="index">
                    <div class="net-question-title">
                      {{ index + 1 + "." + item.title + "？" }}
                    </div>
                    <el-radio-group v-model="item.selects">
                      <el-radio
                        :label="qItem.key"
                        v-for="qItem in item.questions"
                        :key="qItem.key"
                        >{{ qItem.value }}</el-radio
                      >
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item class="btn-submit">
                    <el-button type="primary" size="mini">提交</el-button>
                  </el-form-item>
                </el-form>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <!-- contact code end -->
      </div>
    </div>
  </iphone>
</template>
<script>
export default {
  data() {
    return {
      naireList: [
        {
          title: "选项标题1",
          questions: [
            {
              key: 1,
              value: "10086短信",
            },
            {
              key: 2,
              value: "10086人工",
            },
            {
              key: 3,
              value: "10086热线",
            },
          ],
        },
        {
          title: "选项标题2",
          questions: [
            {
              key: 1,
              value: "10086短信",
            },
            {
              key: 2,
              value: "10086人工",
            },
            {
              key: 3,
              value: "10086热线",
            },
          ],
        },
        {
          title: "选项标题2",
          questions: [
            {
              key: 1,
              value: "10086短信",
            },
            {
              key: 2,
              value: "10086人工",
            },
            {
              key: 3,
              value: "10086热线",
            },
          ],
        },
        {
          title: "选项标题2",
          questions: [
            {
              key: 1,
              value: "10086短信",
            },
            {
              key: 2,
              value: "10086人工",
            },
            {
              key: 3,
              value: "10086热线",
            },
          ],
        },
        {
          title: "选项标题2",
          questions: [
            {
              key: 1,
              value: "10086短信",
            },
            {
              key: 2,
              value: "10086人工",
            },
            {
              key: 3,
              value: "10086热线",
            },
          ],
        },
      ],
      submits: [],
      showMobile: false,
    };
  },
  created() {
    console.log(this.lists);
  },
  mounted() {
    console.log(this.naireList);
    this.naireList.map((item) => {
      let obj = item;
      obj["select"] = "";
      return obj;
    });
    // console.log(this.naireList);
    this.setTime();
  },
  methods: {
    setTime() {
      // JavaScript Document
      function showLocale(objD) {
        "use strict";
        var str;
        var hh = objD.getHours();
        if (hh < 10) hh = "0" + hh;
        var mm = objD.getMinutes();
        if (mm < 10) mm = "0" + mm;
        var ss = objD.getSeconds();
        if (ss < 10) ss = "0" + ss;
        str = hh + ":" + mm /* + ":" + ss */;
        return str;
      }
      function tick() {
        "use strict";
        var today;
        today = new Date();
        document.getElementById("time").innerHTML = showLocale(today);
        window.setTimeout(() => {
          tick();
        }, 1000);
      }
      tick();
    },
  },
};
</script>
<style lang="less" scoped>
@import "../resource/css/style.css";
@import "../resource/css/common.less";
</style>