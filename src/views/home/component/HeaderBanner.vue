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
 * @LastEditTime: 2022-12-23 08:47:16
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\component\HeaderBanner.vue
 *  带Banner通用头
 "orgType":4,  //机构类型，必填，养老院：1，日间照料中心：2，老年人食堂：3，养老服务综合体：4 养老活动：5
 -->

 <template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <span class="header-text">{{ headerTitle }}</span>
      </div>
    </div>

    <van-swipe class="headerImg"
               v-if="headerBannerData.length"
               :autoplay="intervalTime"
               indicator-color="white"
               initial-swipe="0"
               v-on:change="handleChangeSwipeItem">
      <van-swipe-item v-for="(item, index) in headerBannerData"
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

    <template v-if="orgType == 1">
      <!-- 电话地址 -->
      <div class="content-basic">
        <div class="both-ends">
          <span class="left-span">电话:{{ contentData.contactTel }}</span>
          <van-button @click="show = true"
                      color="#0B93F5"
                      size="mini"
                      icon="phone-o"
                      type="primary">打电话</van-button>
        </div>

        <div class="both-ends">
          <span class="left-span">地址:{{
                contentData.district +
                contentData.street +
                contentData.community +
                contentData.address
              }}</span>
          <van-button color="#0B93F5"
                      size="mini"
                      icon="guide-o"
                      type="primary">去导航</van-button>
        </div>
      </div>
    </template>
    <!-- 床位电话地址 -->
    <template v-else-if="orgType == 4">
      <div class="content-basic">
        <div class="left-qi">
          <span class="title">床位数：</span>
          <span class="title">{{ contentData.bedNum || "" }}张</span>
        </div>

        <div class="left-qi">
          <span class="title">收费区间：</span>
          <span class="money">{{
                contentData.chargesMin + "-" + contentData.chargesMax || ""
              }}元</span>
        </div>

        <div class="both-ends">
          <span class="left-span">电话:{{ contentData.contactTel }}</span>
          <van-button @click="show = true"
                      color="#0B93F5"
                      size="mini"
                      icon="phone-o"
                      type="primary">打电话</van-button>
        </div>

        <div class="both-ends">
          <span class="left-span">地址:{{
                contentData.district +
                contentData.street +
                contentData.community +
                contentData.address
              }}</span>
          <van-button color="#0B93F5"
                      size="mini"
                      icon="guide-o"
                      type="primary">去导航</van-button>
        </div>
      </div>
    </template>

    <template v-else-if="orgType == 5">
      <div>
        <div class="content-tiem">
          <span class="title">{{ contentData.orgName }}</span>
          <!-- <span class="time">活动时间：{{ contentData.time }}</span> -->
        </div>
        <div class="content-basic">
          <div class="left-qi">
            <span class="title">活动人数：</span>
            <span class="title">{{ contentData.peopleNum || "" }}人</span>
          </div>
        </div>
        <div class="content-basic">
          <div class="left-qi">
            <span class="title">活动地址：</span>
            <span class="title">{{ contentData.place || "" }}</span>
          </div>
        </div>
        <div class="content-basic">
          <div class="left-qi">
            <span class="title">活动时间：</span>
            <span class="title">{{ contentData.time || "" }}</span>
          </div>
        </div>
      </div>
    </template>

    <!-- 标题时间 -->
    <template v-else>
      <div class="content-tiem">
        <span class="title">{{contentData.scope}}</span>
        <span class="time">{{contentData.createTime}}发布于天津</span>
      </div>
    </template>

    <van-dialog v-model="show"
                title="拨打电话"
                :message="`确认拨打` + contentData.contactTel + '?'"
                show-cancel-button
                @cancel="cancel"
                @confirm="contact">
    </van-dialog>
  </div>
</template>
  
  <script>
export default {
  props: {
    headerBannerData: {
      Type: Array,
      default: () => {
        return []
      },
    },
    headerTitle: {
      Type: String,
      default: () => {
        return ''
      },
    },
    orgType: {
      Type: String,
      default: () => {
        return ''
      },
    },
    contentData: {
      Type: Object,
      default: () => {
        return {}
      },
    },
  },

  data() {
    return {
      intervalTime: 1,
      show: false,
    }
  },

  methods: {
    handleChangeSwipeItem() {},

    contact() {
      let a = document.createElement('a')
      a.href = 'tel:' + this.contentData.contactTel
      a.click()
      this.show = false
    },
    cancel() {
      this.show = false
    },
  },
}
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
      margin: 0 auto;
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