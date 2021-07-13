<template>
  <div class="unit-comment">
    <el-dialog title="添加评论" :visible.sync="dialogVisible" width="80%">
      <div class="comment-top">
        <el-form>
          <el-form-item label="我来说两句">
            <el-select
              v-model="formInline.text"
              placeholder="请选择"
              size="mini"
            >
              <el-option
                v-for="(item, index) in types"
                :key="index"
                :label="item.name"
                :value="item.key"
                size="mini"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <div class="form-item">
              <el-input
                type="textarea"
                v-model="formInline.desc"
                maxlength="500"
                rows="4"
                show-word-limit
              ></el-input>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :file-list="fileList"
              >
                <el-button size="mini" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">文件大小不超过20M</div>
              </el-upload>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
    <div class="unit-top">
      <el-button type="primary" size="mini" @click="dialogVisible = true"
        >我要评论</el-button
      >
    </div>
    <div class="comment-list">
      <div class="comment-title">评论列表 （1）</div>
      <div class="comment-center">
        <div class="search-query">
          <el-form :inline="true">
            <el-form-item label="问题类型">
              <el-select
                size="mini"
                v-model="searchline.type"
                placeholder="请选择"
              >
                <el-option
                  v-for="(item, index) in questionTypes"
                  :key="index"
                  :label="item.name"
                  :value="item.key"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="查询时间">
              <el-date-picker
                v-model="searchline.date"
                align="right"
                type="date"
                placeholder="选择日期"
                size="mini"
                :editable="false"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="mini">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <el-table
          :data="commonList"
          style="width: 100%"
          row-key="codeKey"
          border
        >
          <el-table-column
            label="问题类型"
            prop="type"
            width="100px"
            align="center"
          />
          <el-table-column label="内容描述" width="300px" align="center">
            <template slot-scope="scope">
              <div class="desc-content">
                <span :class="scope.row.id != momentId ? 'flow-hide' : ''">{{
                  scope.row.desc
                }}</span>
                <i
                  :class="[
                    'el-icon-arrow-right spread-btn',
                    { 'spread-item': scope.row.id == momentId },
                  ]"
                  v-if="scope.row.desc.length > 57"
                  @click="clickMoment(scope)"
                ></i>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="发表时间"
            prop="time"
            width="100px"
            align="center"
          />
          <el-table-column label="是否上传文件" align="center" width="300px">
            <template slot-scope="scope">
              <a :href="scope.row.file" class="flow-hide" target="_blank">{{
                scope.row.file
              }}</a>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      questionTypes: [
        {
          name: "类型1",
          key: 1,
        },
        {
          name: "类型2",
          key: 2,
        },
        {
          name: "类型3",
          key: 3,
        },
      ],
      types: [
        {
          name: "类型1",
          key: 1,
        },
        {
          name: "类型2",
          key: 2,
        },
        {
          name: "类型3",
          key: 3,
        },
      ],
      formInline: {
        text: "",
        desc: "",
      },
      searchline: {
        type: "",
        date: "",
      },
      fileList: [
        // {
        //   name: "food.jpeg",
        //   url:
        //     "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        // },
        // {
        //   name: "food2.jpeg",
        //   url:
        //     "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        // },
      ],
      commonList: [
        {
          id: 1,
          type: "类型1",
          desc: "测试数据21232131",
          time: "2020-05-27 15:00:09",
          file:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          id: 2,
          type: "类型2",
          desc:
            "测试数据2313231测试数据2313231测试数据2313231测试数据2313231测试数据2313231测试数据2313231",
          time: "2020-05-28 15:00:20",
          file:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          id: 3,
          type: "类型1",
          desc: "测试数据123213",
          time: "2020-05-27 15:00:30",
          file:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          id: 4,
          type: "类型3",
          desc: "测试数据2323",
          time: "2020-05-27 15:00:40",
          file:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      momentId: "",
    };
  },
  methods: {
    clickComment() {},
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },
    clickMoment(params) {
      console.log(this.momentId, params.row.id);
      if (this.momentId === params.row.id) {
        this.momentId = "";
      } else {
        this.momentId = params.row.id;
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "../resource/style/common.less";
.unit-comment {
  padding: 10px 0;
  .comment-list {
    margin-top: 10px;
    font-size: 14px;
    .comment-title {
      font-weight: bold;
    }
  }
}
.el-form-item {
  .upload-demo {
    margin-top: 20px;
  }
}

/deep/ .el-dialog__body {
  padding: 0px 20px 20px;
}
.form-item {
  /deep/ .el-textarea {
    width: 600px;
  }
  /deep/ .el-input__count {
    line-height: 1 !important;
    bottom: -20px !important;
  }
}
.upload-btn {
  width: 600px;
  display: flex;
  justify-content: space-between;
}
/deep/ .el-upload-list {
  width: 300px;
}
.flow-hide {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.spread-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.spread-btn {
  transition: 0.3s;
  display: inline-block;
}
.spread-item {
  transform: rotate(90deg);
}
.desc-content {
  // margin-right: 15px;q
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    width: 100%;
    display: inline-block;
  }
  i {
    cursor: pointer;
    // position: absolute;
    // top: 50%;
    // right: 0;
    // transform: translateY(-50%);
  }
}
</style>