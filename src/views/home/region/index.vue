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
 * @Date: 2022-11-14 10:38:47
 * @LastEditTime: 2022-11-16 14:28:36
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\region\index.vue
 * 
 -->
<template>
  <div class="home-container">

    <div class="header">
      <div class="header-left">
        <!-- <span> 您所在的区域: </span> -->
        <span class="header-text">请选择您的所在区</span>
        <!-- <img src="../../../assets/images/xia_bai_icon.png" alt="" /> -->
        <!-- <van-icon class="location" name="arrow-down" /> -->
        <!-- <van-icon class="location" name="../../assets/images/xia_bai_icon.png" /> -->
      </div>
    </div>


    <div class="home-nav">
      <el-card class="nav-item"
               v-for="i in menuList"
               :key="i.name">
        <div class="el-card__body"
             @click="toService(i.name)">
          <!-- <img :src="i.src"
               alt="" /> -->
          <span> {{ i.name }}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/common/footer'
export default {
  name: 'home',
  data() {
    return {
      menuList: [
        {
          name: '和平区',
          src: require('@/assets/images/shanshi.png'),
          router: '',
        },
        {
          name: '河西区',
          src: require('@/assets/images/shenghuo.png'),
          router: '',
        },
        {
          name: '南开区',
          src: require('@/assets/images/yiliao.png'),
          router: '',
        },
        {
          name: '河东区',
          src: require('@/assets/images/rijian.png'),
          router: '',
        },
        {
          name: '河北区',
          src: require('@/assets/images/qita.png'),
          router: '',
        },
        {
          name: '红桥区',
          src: require('@/assets/images/zuzhi.png'),
          router: '',
        },

        {
          name: '西青区',
          src: require('@/assets/images/zuzhi.png'),
          router: '',
        },
        {
          name: '津南区',
          src: require('@/assets/images/zuzhi.png'),
          router: '',
        },
        {
          name: '北辰区',
          src: require('@/assets/images/zuzhi.png'),
          router: '',
        },
        {
          name: '东丽区',
          src: require('@/assets/images/zuzhi.png'),
          router: '',
        },
        {
          name: '滨海新区',
          src: require('@/assets/images/zuzhi.png'),
          router: '',
        },
        {
          name: '静海区',
          src: require('@/assets/images/zuzhi.png'),
          router: '',
        },
        {
          name: '宁河区',
          src: require('@/assets/images/zuzhi.png'),
          router: '',
        },
        {
          name: '宝坻区',
          src: require('@/assets/images/zuzhi.png'),
          router: '',
        },
        {
          name: '武清区',
          src: require('@/assets/images/zuzhi.png'),
          router: '',
        },
        {
          name: '蓟州区',
          src: require('@/assets/images/zuzhi.png'),
          router: '',
        },
      ],
    }
  },

  components: {

  },
}
</script>

<style lang="less" scoped>
.home-container {
   background-color: #fff;
  padding-bottom: 70px;

  .header {
    height: 1rem;
    display: flex;
    font-size: 17px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #fff;
    text-align: center;
    line-height: 24px;
    padding: 0px 25px;
    background-color: #fff;
    justify-content: space-between;
    .header-left {
      margin: 0 auto;
      display: flex;
      align-items: center;
      .header-text {
        color: #fff;
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
    padding: 10px;
    font-family: 'YouSheBiao';
    /deep/.nav-item {
      // background-color: #fff;
      // width: 1.96rem;
      // height:1.08rem;
      text-align: center;
      margin-bottom: 10px;
      background-image: url('~@/assets/images/region_bj.png');
      background-size: 110%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
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
  .home-container {
    .header {
      height: 2rem;
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

    .home-nav {
      margin-top: -0.8rem;
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
}
//-------------------------------- pc端适配 --------------------------
@media screen and (min-width: 1200px) {
  .home-container {
    width: 40vw;
    margin: 0 auto;

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
