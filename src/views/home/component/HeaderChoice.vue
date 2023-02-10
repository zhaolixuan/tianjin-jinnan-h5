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
 * @Date: 2022-11-16 14:44:19
 * @LastEditTime: 2022-11-17 14:48:59
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\component\HeaderChoice.vue
 *  带选择通用头
 -->

<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <span class="header-text" @click="clickArea"
          >{{ selectAreaTitle }} ⏷</span
        >
        <span
          style="padding-left: 15px"
          @click="clickStreet"
          class="header-text"
          >{{ selectStreetTitle }} ⏷</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerBannerData: {
      Type: Array,
      default: () => {
        return [];
      },
    },
    selectAreaTitle: {
      Type: String,
      default: () => {
        return "选择区";
      },
    },
    selectStreetTitle: {
      Type: String,
      default: () => {
        return "选择区对应街道";
      },
    },
  },

  data() {
    return {
      intervalTime: 1,
    };
  },

  methods: {
    clickArea() {
      //区点击事件
      this.$emit("handelTitleActivity", 'area');
    },
    clickStreet() {
      //街道点击事件
      this.$emit("handelTitleActivity", 'street');
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  background-color: #fff;
  margin-bottom: 20px;
  .header {
    height: 1rem;
    //  border-bottom: 1px solid green;
    // background-image: url("../../assets/images/home_bj.png");
    //background-size: 100%;
    display: flex;
    font-size: 17px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000;
    line-height: 24px;
    padding: 0px 25px;
    background-color: #fff;
    justify-content: space-between;
    .header-left {
      display: flex;
      align-items: center;
      .header-text {
        color: #0b93f5;
        font-size: 17px;
        margin-left: 5px;
        margin-right: 5px;
      }
      // .location {
      //   width: 18px;
      //   height: 24px;
      //   color: #fff;

      //   margin-right: 10px;
      // }
    }
  }

  .headerImg {
    margin-top: 0.1rem;
    height: 4rem;
    // border-bottom: 1px solid red;
    padding: 0px 10px;
    padding-left: 10px;
    padding-right: 10px;
    .banner_href {
      display: block;
      img {
        border-radius: 0.2rem;
        height: 4rem;
        width: 93%;
      }
    }
  }

  .content-tiem {
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;
    // border-bottom: 1px solid red;
    justify-content: space-between;
    .title {
      color: #000;
      font-size: 16px;
    }
    .time {
      color: rgba(0, 0, 0, 0.4);
      font-size: 14px;
    }
  }

  .content-basic {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    .left-qi {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: row;

      .title {
        color: #000;
        font-size: 16px;
      }
      .money {
        color: #ff4d25;
        font-size: 16px;
      }
    }
    .both-ends {
      margin-top: 5px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      .left-span {
        color: #000;
        font-size: 16px;
      }
    }
  }
}

//-------------------------------- 移动端适配 --------------------------
@media screen and (max-width: 1200px) {
  .container {
    .header {
      height: 1.5rem;
      background-image: url("~@/assets/images/home_bj.png");
      background-size: 100%;
      color: #fff;

      .header-left {
        .header-text {
          color: #fff;
        }
        img {
          margin-top: 3px;
          // width: 25px;
          // height: 25px;
          // src:  url('../../assets/images/xia_icon.png');

          // background-size: 100%;
        }
      }
    }
    .headerImg {
      margin-top: -0.3rem;
      .banner_href {
        display: block;
        img {
        }
      }
    }
  }
}
//-------------------------------- pc端适配 --------------------------
@media screen and (min-width: 1200px) {
  .container {
    width: 40vw;
    margin: 0 auto;
    margin-bottom: 20px;
    .header {
      height: 0.4rem;
      padding-left: 20px;
      color: #000;
      .header-left {
        .header-text {
          color: #000;
        }
        img {
          margin-top: 3px;
          // width: 25px;
          // height: 25px;
          // src:  url('../../assets/images/xia_icon.png');

          // background-size: 100%;
        }
      }
    }

    .headerImg {
      height: 2rem;
      .banner_href {
        display: block;
        img {
          border-radius: 0.1rem;
          height: 2rem;
          width: 93%;
        }
      }
    }
  }
}
</style>