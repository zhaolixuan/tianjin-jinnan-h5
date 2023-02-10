<!--
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑     永不宕机     永无BUG
 * 
 * @Author: ZhangFengYuan
 * @Date: 2022-11-16 15:56:45
 * @LastEditTime: 2022-11-21 15:28:54
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\component\BoxImgList.vue
 * 
 -->

<template>
  <div class="service_content" v-if="imgListData.length > 0">
    <span class="header-title">{{ headerTitle }}</span>

    <div class="home-nav">
      <!-- <el-card class="nav-item"
               v-for="i in imgListData"
               :key="i.name">
        <div class="el-card__body"
             @click="toService(i.name)">
         
          <span> {{ i.name }}</span>
        </div>
      </el-card> -->

      <img
        class="nav-item"
        v-for="(item, index) in imgListData" :key="index"
        :src="item.url"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerTitle: {
      Type: String,
      default: () => {
        return "";
      },
    },

    imgListData: {
      Type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  created() {
    console.log(this.imgListData);
  },
  mounted() {
    // console.log(this.activeHeader);
  },
  methods: {},
};
</script>

<style scoped lang="less">
.service_content {
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 10px solid #f6f6fb;
  // padding-left: 20px;
  // padding-right: 20px;

  background: #fff;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  .header-title {
    padding-left: 20px;
    color: #000;
    font-size: 17px;
    font-weight: 400;
  }

  .home-nav {
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    line-height: 25px;
    display: flex;
    flex-wrap: wrap;
    // border-bottom: 1px solid red;
    justify-content: space-between;
    padding: 20px;

    font-family: "YouSheBiao";
    /deep/.nav-item {
      // background-color: #fff;
      // width: 1.96rem;
      // height:1.08rem;
      border-radius: 0.2rem;
      text-align: center;
      margin-bottom: 10px;
      // background-image: url("~@/assets/images/region_bj.png");
      //background-size: 110%;
      display: flex;
      align-items: center;
      justify-content: center;
      // box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
      .el-card__body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        padding: 0;
      }
      img {
        width: 50%;
        margin-bottom: 6px;
      }
    }
  }
}

//-------------------------------- 移动端适配 --------------------------
@media screen and (max-width: 1200px) {
  .home-nav {
    // margin-top: -0.8rem;
    width: 100vw;
    padding: 40px;
    /deep/.nav-item {
      width: 300px;
      height: 170px;
      .el-card__body {
      }
      img {
        width: 72px;
        height: 72px;
        margin-bottom: 6px;
      }
    }
  }
}
//-------------------------------- pc端适配 --------------------------
@media screen and (min-width: 1200px) {
  // .service_content{
  //   width: 40vw;
  //   margin: 0 auto;
  // }
  .home-nav {
    width: 40vw;
    margin: 0 auto;
    padding: 20px;
    .nav-item {
      width: 1.69rem;
      height: 1.08rem;

      img {
        width: 0.4rem;
        height: 0.4rem;
        margin-bottom: 6px;
      }
    }
  }
}
</style>
