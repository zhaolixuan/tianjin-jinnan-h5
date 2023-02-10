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
 * @Date: 2022-11-16 11:33:57
 * @LastEditTime: 2022-12-02 10:26:09
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\beadhouse\component\ServiceBodyList.vue
 * 
 -->
 <template>
  <div class="container">
    <div class="policy-item" v-for="(item, index) in policyList" :key="index">
      <div class="activity" @click="activityClick(item, 'item')">
        <img :src="item.doorHeadPic.url" alt="" />

        <div class="content">
          <span class="title">{{ item.orgName }}</span>
          <span class="time">床位数量：{{ item.bedNum }}</span>
          <div>
            <span class="time">收费区间：</span>
            <span class="time" style="color: #ff471e">{{
              item.chargesMin + "-" + item.chargesMax + " 元"
            }}</span>
          </div>
        </div>
      </div>

      <!-- <span class="activity-title">提供餐别：{{item.mealCategory}}</span> -->
      <!-- <span class="activity-title">运营企业：{{ item.companyName }}</span> -->

      <div class="both-ends">
        <span class="left-span">电话:{{ item.contactTel }}</span>
        <van-button
          @click="activityClick(item, 'phone')"
          color="#0B93F5"
          size="mini"
          icon="phone-o"
          type="primary"
          >打电话</van-button
        >
      </div>

      <div class="both-ends">
        <span class="left-span">地址:{{ address(item) }}</span>
        <van-button
          @click="activityClick(item, 'navigation')"
          color="#0B93F5"
          size="mini"
          icon="guide-o"
          type="primary"
          >去导航</van-button
        >
      </div>
    </div>

    <van-empty v-if="!policyList.length" description="暂无数据" />
  </div>
</template>
  
  <script>
export default {
  props: {
    policyList: {
      Type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      // policyList: [{}, {}, {}, {}],
    };
  },

  methods: {
    address(item) {
      return item.district + item.street + item.community+item.address;
    },
    activityClick(item, type) {
      // console.log(type);
      switch (type) {
        case "item":
          this.$emit("activityItemClick", item);
          break;
        case "phone":
          this.$emit("activityPhoneItemClick", item);
          break;
        case "navigation":
          this.$emit("activityNavigationItemClick", item);
          break;
      }
    },
    phoneClick(item) {},
    navigationClick(item) {},
  },
  watch: {},
  mounted() {},
};
</script>
  
  <style lang="less" scoped>
.container {
  border-top: 10px solid #f6f6fb;
  background: #ffffff;
  margin-top: 10px;
  width: 100%;
  height: 100%;
  .policy-item {
    padding-bottom: 5px;
    padding-top: 5px;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .activity {
      display: flex;
      align-items: center;
    }

    .activity-title {
      text-align: left;
      font-size: 15px;
      font-family: PingFangSC-Semibold, PingFang SC;
      color: #000000;
    }
    .both-ends {
      margin-top: 5px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      .left-span {
        color: #000;
        font-size: 16px;
      }
    }
    img {
      border-radius: 3px;
      width: 220px;
      height: 160px;
    }
    .content {
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      .title {
        text-align: left;
        font-size: 17px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 500;
        color: #000000;
      }
      .time {
        font-size: 14px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 500;
        color: #000;
      }
    }
  }
}

//-------------------------------- pc端适配 --------------------------
@media screen and (min-width: 1200px) {
  .container {
    .policy-item {
      img {
        width: 100px;
        height: 50px;
      }
    }
  }
}
</style>