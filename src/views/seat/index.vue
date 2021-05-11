<template>
  <div class="seat-box">
    <div class="seat-container" v-if="seatList.length > 0">
      <div class="seat-headers">
        <div class="seat-desc">已选座位</div>
        <div class="seat-show-list">
          <div
            class="seat-show-info"
            v-for="(item, index) in lists"
            :key="index"
          >
            <div class="seat-num">
              <span>{{ item.seat }}</span> 座
            </div>
            <div class="seat-num">
              <span>{{ item.count }}</span> 号
            </div>
          </div>
        </div>
      </div>
      <div class="seat-wrapper">
        <div class="seat-desc">可选座位</div>
        <div class="seat-show-list">
          <div
            :class="{ 'seat-show-info': true, active: item.hasChecked }"
            @click="setActive(index)"
            v-for="(item, index) in seatList"
            :key="index"
          >
            <div class="seat-num">
              <span>{{ item.seat }} </span> 座
            </div>
            <div class="seat-num">
              <span>{{ item.count }}</span> 号
            </div>
          </div>
        </div>
      </div>
      <div class="submit-form">
        <div class="submit-user">用户信息:</div>
        <div class="submit-list" v-if="seatList.length > 0">
          <div
            class="submit-list-info"
            v-for="(item, index) in lists"
            :key="index"
          >
            <div for="">
              <span>{{ item.seat }}</span
              >座 <span>{{ item.count }}</span
              >号
            </div>
            <div class="input-box">
              <input
                type="text"
                placeholder="请输入姓名"
                v-model="item.userInfo.name"
              />
              <input
                type="text"
                placeholder="请输入手机号码"
                v-model="item.userInfo.mobile"
              />
            </div>
          </div>
        </div>
        <div class="submit-box">
          <div class="submit-btn" @click="submit()">提交</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seatList: [],
      set: "",
    };
  },
  computed: {
    lists() {
      // return this.seatList.filter((item) => item.hasChecked);
      let arr = this.seatList;
      let nullArr = [];
      for (var i in arr) {
        if (arr[i].hasChecked) {
          nullArr.push(arr[i]);
        }
      }
      return nullArr;
    },
  },
  mounted() {
    let data = [
      {
        seat: 11,
        count: 11,
        hasChecked: false,
      },
      {
        seat: 12,
        count: 11,
        hasChecked: false,
      },
      {
        seat: 13,
        count: 11,
        hasChecked: false,
      },
      {
        seat: 14,
        count: 11,
        hasChecked: false,
      },
    ];
    let seatList = data.map((item) => {
      let obj = Object.assign({}, item);
      obj["userInfo"] = {
        name: "",
        mobile: "",
      };
      return obj;
    });
    this.seatList = seatList;
    console.log(this.seatList);
  },
  methods: {
    setActive(activeIndex) {
      // this.seatList.forEach((item, index) => {
      //   if (index == activeIndex) {
      //     item["hasChecked"] = !item["hasChecked"];
      //   }
      // });
      this.$set(
        this.seatList[activeIndex],
        "hasChecked",
        !this.seatList[activeIndex]["hasChecked"]
      );
    },
    submit() {
      let seatList = this.seatList.filter((item) => item.hasChecked);
      for (var i in seatList) {
        let pass = this.validator(seatList[i]);
        if (!pass) return;
      }
      alert("提交成功!");
    },
    validator(params) {
      console.log(params);
      let position = params.seat + "座" + params.count + "号",
        name = params.userInfo.name,
        mobile = params.userInfo.mobile;
      if (!name) {
        alert(position + ":用户名不能为空！");
        return false;
      }
      if (!mobile) {
        alert(position + ":手机号码不能为空！");
        return false;
      }
      if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(mobile)) {
        alert("手机号码有误，请重填");
        return false;
      }
      return true;
    },
    click(e) {},
  },
};
</script>
<style lang="less" scoped>
.seat-box {
  padding: 20px 30px;
  box-sizing: border-box;
  height: 100vh;
  .seat-container {
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 0 5px #333;
    height: 100%;
    position: relative;
  }
  .seat-select-list,
  .seat-show-list {
    display: flex;
    margin: 10px 0;
    .seat-select-info {
    }
  }
  .seat-select-info,
  .seat-show-info {
    display: flex;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-left: 15px;
    cursor: pointer;
    &:nth-child(1) {
      margin-left: 0;
    }
    .seat-num {
      color: #aaa;
      font-size: 12px;
      span:nth-child(1) {
        font-size: 16px;
        color: #333;
      }
    }
  }
  .active {
    box-shadow: 0 0 5px #000;
  }

  .submit-list-info {
    margin-top: 10px;
    .input-box {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
    input {
      padding: 5px 10px;
      font-size: 14px;
    }
    input:nth-child(2) {
      margin-left: 10px;
    }
  }
  .submit-box {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 20px;
    bottom: 20px;
    .submit-btn {
      padding: 5px 20px;
      display: inline-block;
      //   background-color: #aaa;
      //   box-shadow: 0 0 1px #333;
      cursor: pointer;

      background-color: #333;
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>
