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
              <div class="message-box">
                <div class="message-header">
                  <div class="header-container">
                    <h1>10086</h1>
                    <div class="header-right position position-right">
                      <i class="el-icon-phone-outline"></i>
                      <i class="el-icon-more"></i>
                    </div>
                  </div>
                </div>
                <div class="message-center">
                  <div class="message-title">短信/彩信</div>
                  <div
                    class="message-list"
                    v-for="(item, index) in noticeList"
                    :key="index"
                  >
                    <div class="message-date">{{ item.date }}</div>
                    <div class="message-desc">
                      {{ item.desc }}
                    </div>
                    <div class="message-time">{{ item.time }}</div>
                  </div>
                </div>

                <div class="message-footer">
                  <div class="footer-container">
                    <div class="footer-left position position-left">
                      <i class="el-icon-circle-plus-outline"></i>
                    </div>
                    <div class="footer-center">
                      <el-input></el-input>
                    </div>
                    <div class="footer-right position position-right">
                      <i class="el-icon-position"></i>
                    </div>
                  </div>
                </div>
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
      noticeList: [
        {
          date: "2020-09-14",
          desc:
            "呼和浩特市城环环卫集团公司副总经理 金瑞：我们最好的时候投放的自行车应该是10140辆，累计建设的公共自行车服务站点是391个，累计办的用户卡应该是12.43万人次。公共自行车在最高峰的使用情况实际是2014年到2016年期间，公共自行车的日均租还量是4万次，单车的周转次数应该是3.8，将近4次",
          time: "晚上7:39",
        },
        {
          date: "2020-09-15",
          desc:
            "呼和浩特市城环环卫集团公司副总经理 金瑞：我们最好的时候投放的自行车应该是10140辆，累计建设的公共自行车服务站点是391个，累计办的用户卡应该是12.43万人次。公共自行车在最高峰的使用情况实际是2014年到2016年期间，公共自行车的日均租还量是4万次，单车的周转次数应该是3.8，将近4次",
          time: "晚上7:39",
        },
        {
          date: "2020-09-16",
          desc:
            "呼和浩特市城环环卫集团公司副总经理 金瑞：我们最好的时候投放的自行车应该是10140辆，累计建设的公共自行车服务站点是391个，累计办的用户卡应该是12.43万人次。公共自行车在最高峰的使用情况实际是2014年到2016年期间，公共自行车的日均租还量是4万次，单车的周转次数应该是3.8，将近4次",
          time: "晚上7:39",
        },
        {
          date: "2020-09-17",
          desc:
            "呼和浩特市城环环卫集团公司副总经理 金瑞：我们最好的时候投放的自行车应该是10140辆，累计建设的公共自行车服务站点是391个，累计办的用户卡应该是12.43万人次。公共自行车在最高峰的使用情况实际是2014年到2016年期间，公共自行车的日均租还量是4万次，单车的周转次数应该是3.8，将近4次",
          time: "晚上7:39",
        },
        {
          date: "2020-09-18",
          desc:
            "呼和浩特市城环环卫集团公司副总经理 金瑞：我们最好的时候投放的自行车应该是10140辆，累计建设的公共自行车服务站点是391个，累计办的用户卡应该是12.43万人次。公共自行车在最高峰的使用情况实际是2014年到2016年期间，公共自行车的日均租还量是4万次，单车的周转次数应该是3.8，将近4次",
          time: "晚上7:39",
        },
      ],
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
.message-box {
  width: 100%;
}

.message-header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  position: sticky;
  top: 0;
  background: #fff;
  width: 100%;
  text-align: center;
  padding: 0 15px;
  box-shadow: 0 0 5px #eee;
  z-index: 99;
  h1 {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 1px;
  }
  i {
    font-size: 24px;
  }
  .header-container {
    position: relative;
  }
  .el-icon-phone-outline {
    margin-right: 10px;
  }
}
.net-center {
  box-shadow: 0 0 0;
}
.message-center {
  padding: 15px 40px 15px 20px;
  box-sizing: border-box;
  .message-title,
  .message-date {
    text-align: center;
    color: #999;
    font-size: 14px;
  }
  .message-list {
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0 !important;
    }
    .message-desc {
      background-color: #eee;
      padding: 8px 15px;
      border-radius: 5px;
      color: #222;
      margin-top: 20px;
      font-size: 16px;
      letter-spacing: 0.5px;
    }
    .message-time {
      font-size: 12px;
      color: #999;
      margin-top: 8px;
    }
  }
}
.position {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.position-right {
  right: 0;
}
.position-left {
  left: 0;
}

.message-footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  // line-height: 50px;
  background-color: #fff;
  padding: 0 20px;
  z-index: 99;
  .footer-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  /deep/ .el-input__inner {
    width: 200px;
  }
  i {
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
