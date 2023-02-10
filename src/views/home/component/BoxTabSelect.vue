<!--

 * @Author: ZhangFengYuan
 * @Date: 2022-11-17 15:07:54
 * @LastEditTime: 2022-11-18 15:52:01
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\component\BoxTabSelect.vue
 * 
 -->
<template>
  <div class="service_content">
    <span class="header-title">{{ headerTitle }}</span>

    <div class="content">
      <nav
        :class="index == currentIndex ? 'active' : ''"
        v-for="(item, index) in headerTabData"
        :key="index"
        @click="handelActive(index, item)"
      >
        {{ item.typeName }}
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerTabData: {
      Type: Array,
      default: () => {
        return [];
      },
    },

    // currentIndex: {
    //   Type: Number,
    //   default: () => {
    //     return 0;
    //   },
    // },
    headerTitle: {
      Type: String,
      default: () => {
        return '';
      },
    },
  },

  data() {
    return {
      //   headerData: [
      //     { typeName: "1111" },
      //     { typeName: "11111" },
      //     { typeName: "11113" },
      //     { typeName: "5000-7000" },
      //     { typeName: "11115" },
      //     { typeName: "7000以上" },
      //   ],
         currentIndex: 0,
    };
  },
  methods: {
    handelActive(index, item) {
      //console.log(e);
      this.currentIndex = index;
      this.$emit("handelTabActivity", item);
    },
  },
};
</script>

<style scoped lang="less">
.service_content {
  margin-bottom: 10px;
//   border-bottom: 10px solid #f6f6fb;
  padding-left: 20px;
  padding-right: 20px;

  background: #fff;
  text-align: left;
  .header-title {
    color: #000;
    font-size: 17px;
    font-weight: 600;
  }

  .content {
    display: flex;

    flex-direction: row;
    flex-wrap: wrap;
    // justify-content: space-between;
    // align-content: space-between;
  }

  nav {
    margin-left: 10px;
    margin-top: 10px;
    // display: flex;
    // width: 210px;
    // flex-direction: row;
    // flex-wrap: wrap;
    //  justify-content: space-between;
    background-color: #fff;
    // height: 53px;
    // width: 90px;
    padding: 0 10px;
    // line-height: 53px;
    box-sizing: border-box;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #0b93f5;
    text-align: center;
    margin-right: 3px;
    border: 1px solid #0b93f5;
    border-radius: 3px;
  }
  .active {
    color: #fff;
    background-color: #0b93f5;
  }
}

//-------------------------------- 移动端适配 --------------------------
@media screen and (max-width: 1200px) {
}
//-------------------------------- pc端适配 --------------------------
@media screen and (min-width: 1200px) {
  .service_content {
    width: 40vw;
    margin: 0 auto;

    nav {
     // width: 50px;
      // height: 23px;
    }
  }
}
</style>

