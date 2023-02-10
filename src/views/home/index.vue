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
 -->
<template>
  <div class="home-container">
    <div class="header">
      <div class="header-left"
           @click="regionClick">
        <span> 您所在的区域: </span>
        <span class="header-text">河西区</span>
        <img src="../../assets/images/xia_bai_icon.png"
             alt="" />
        <!-- <van-icon class="location" name="arrow-down" /> -->
        <!-- <van-icon class="location" name="../../assets/images/xia_bai_icon.png" /> -->
      </div>
    </div>

    <van-swipe class="headerImg"
               :autoplay="intervalTime"
               indicator-color="white"
               initial-swipe="0"
               v-on:change="handleChangeSwipeItem">
      <van-swipe-item v-for="(item, index) in bannerSettingFiles"
                      :key="index">
        <div class="banner_href">
          <img :src="item.url"
               alt=""
               class="img" />
        </div>
        <!-- <a :href="item.srcUrl"  target="_blank">
          <img :src="item.url" alt="" class="img" />
        </a> -->
      </van-swipe-item>
    </van-swipe>

    <div class="home-nav">
      <el-card class="nav-item"
               :style="{ background: ' #' + i.color }"
               v-for="i in menuList"
               :key="i.name">
        <div class="el-card__body"
             s
             @click="toService(i.url,i.query)">
          <img :src="i.src"
               alt="" />
          <span> {{ i.name }}</span>
        </div>
      </el-card>
    </div>
    <!-- 养老政策 -->
    <box-header :headerData="policyHeaderData"
                @handelActive="handelRecommendActive"
                @handelSeemore="handelSeemore"></box-header>
    <policy-activity :policyList="policyData"></policy-activity>

    <!-- 老年活动 -->

    <box-header :headerData="oldAgeHeaderData"
                @handelActive="handelRecommendActive"
                @handelSeemore="handelSeemore"></box-header>
    <old-age-activity @activityItemClick="activityClick"
                      :policyList="policyList"></old-age-activity>

    <!-- <Footer /> -->
  </div>
</template>

<script>
import Footer from '@/components/common/footer'
import BoxHeader from './component/BoxHeader.vue'
import PolicyActivity from './component/policyActivity.vue'
import OldAgeActivity from './component/oldAgeActivity.vue'
import { setCookie } from '@/utils/storage'
import { getActivityInfoList, getpolicyData } from '@/api/home'
export default {
  name: 'home',
  data() {
    return {
      menuList: [
        {
          name: '养老政策',
          src: require('@/assets/images/shanshi.png'),
          router: '',
          url: '/activity-more',
          query: { name: '养老政策' },
          color: 'EAFDFF',
        },
        {
          name: '养老院',
          src: require('@/assets/images/shenghuo.png'),
          router: '',
          color: 'EAFFF6',
          url: '/beadhouse',
        },
        {
          name: '老人食堂',
          src: require('@/assets/images/yiliao.png'),
          router: '',
          color: 'FFFDF3',
          url: '/canteen',
        },
        {
          name: '日间照料中心',
          src: require('@/assets/images/rijian.png'),
          router: '',
          color: 'E2F3FF',
          url: '/day-care',
        },
        {
          name: '养老综合服务体',
          src: require('@/assets/images/qita.png'),
          router: '',
          color: 'FCEAFF',
          url: '/service-body',
        },
        {
          name: '养老服务',
          src: require('@/assets/images/zuzhi.png'),
          router: '',
          // url: '/activity-more',
          // query: { name: '老年活动' },
          color: 'E2F3FF',
        },
      ],

      // 轮播图
      bannerSettingFiles: [
        {
          url: 'https://s3.cn-east-2.jdcloud-oss.com/tianjinyanglao/d3cf27bc-7996-402d-85af-612e49e89f0b.jpg',
        },
      ],
      intervalTime: 1,
      policyHeaderData: ['养老政策'],
      oldAgeHeaderData: ['老年活动'],
      policyList: [],
      policyData: [],
    }
  },

  components: {
    // Footer,
    BoxHeader,
    PolicyActivity,
    OldAgeActivity,
  },
  mounted() {
    this.getpolicyData()
    this.activityListData()

    // setCookie("Authorization",'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjEzMzk1NTA0Njc5Mzk2MzkyOTksImFjY291bnQiOiJhZG1pbiIsInV1aWQiOiI3MDgzNGNlOC0yNWY4LTQ5MzEtOGM5Yi02NGJmMWM3NmQ2MDIiLCJyZW1lbWJlck1lIjp0cnVlLCJleHBpcmF0aW9uRGF0ZSI6MTY2OTYwMTgzNzQwMCwiY2FUb2tlbiI6bnVsbCwib3RoZXJzIjpudWxsLCJzdWIiOiIxMzM5NTUwNDY3OTM5NjM5Mjk5IiwiaWF0IjoxNjY4OTk3MDM3LCJleHAiOjE2Njk2MDE4Mzd9.Lsjfg3CUrpiwatOEuogAFibiXGhwPyUs9cZ8mvFYvYNtkC3igMoV9XjLQr39qC5n95i5smz6bCRjKkUnhiFZmA')
  },
  methods: {
    handleChangeSwipeItem() {},

    handelRecommendActive(name) {
      console.log(name)
    },
    handelSeemore(name) {
      this.$router.push({ path: '/activity-more', query: { name } })
    },
    getpolicyData() {
      let data = {
        pageNo: 1,
        pageSize: 10,
      }
      getpolicyData(data).then((res) => {
        console.log(res)
        this.policyData = res.data.rows
      })
    },
    activityListData() {
      let data = {
        pageNo: 1,
        pageSize: 10,
      }
      getActivityInfoList(data).then((res) => {
        this.policyList = res.data.rows
      })
    },
    regionClick() {
      this.$router.push({ path: '/region' })
    },
    toService(url, query) {
        
      this.$router.push({ path: url, query: query })
    },
    policyHandelSeemore() {
      this.$router.push({ path: '/activity-more' })
    },
    activityClick(item) {
      this.$router.push({
        path: '/old-activity-details',
        query: { id: item.id, title: item.name },
      })
    },
  },
}
</script>

<style lang="less" scoped>
.home-container {
  // padding-bottom: 100%;
  background-color: #fff;

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

  .home-nav {
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    line-height: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    font-family: 'YouSheBiao';
    /deep/.nav-item {
      background-color: #fff;
      text-align: center;
      margin-bottom: 10px;
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
        //  width: 50%;
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
      background-image: url('~@/assets/images/home_bj.png');
      background-size: 100%;
      color: #fff;

      .header-left {
        .header-text {
          color: #fff;
        }
        img {
          margin-top: 3px;
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

