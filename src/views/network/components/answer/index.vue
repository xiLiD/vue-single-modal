<template>
  <div class="net-wrapper">
    <div :class="['net-container']">
      <div class="net-content">
        <div class="net-content-box">
          <div class="net-header">
            <h1>问卷标题</h1>
            <p>感谢您能抽出几分钟时间来参加本次答题,现在我们就马上开始吧!</p>
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
  </div>
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
    console.log(this.naireList);
    // this.setTime();
  },
  methods: {
    setMobile(bool) {
      this.showMobile = bool;
      console.log();
    },
  },
};
</script>
<style lang="less" scoped>
@import "../resource/css/common.less";
.net-content {
  box-sizing: border-box;
  height: 580px;
  overflow: hidden;
  overflow-y: scroll;
}
// .net-header {
//   height: 160px;
//   width: 100%;
//   background: url("./images/bg.jpg") top center no-repeat;
//   text-align: center;
//   color: #fff;
//   letter-spacing: 1px;
//   p {
//     max-width: 80%;
//     margin: 0 auto;
//   }
//   h1 {
//     padding-top: 20px;
//     font-size: 22px;
//   }
//   p {
//     margin-top: 20px;
//     font-size: 16px;
//   }
//   .mob {
//     h1,
//     p {
//       margin-top: 15px;
//     }
//   }
// }
// .net-container {
//   position: relative;
//   height: 615px;
// }

// ::-webkit-scrollbar {
//   width: 0 !important;
// }
// .net-center {
//   width: 80%;
//   // padding-bottom: 30px;
//   margin: 0 auto;
//   margin-top: -5vh;
//   // margin-bottom: 15px;
//   padding: 10px 15px;
//   box-sizing: border-box;
//   background-color: #fff;
//   border-radius: 5px;
//   .el-radio-group {
//     display: flex;
//     flex-direction: column;
//     .el-radio {
//       &:last-child {
//         margin-left: 0;
//       }
//       margin-top: 15px;
//     }
//   }
//   .btn-submit {
//     text-align: right;
//     bottom: 0;
//     right: 30px;
//     padding-bottom: 0px;
//     margin-bottom: 10px;
//   }
// }
</style>