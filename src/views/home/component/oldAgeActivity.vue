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
 * @LastEditTime: 2022-12-07 17:23:49
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\component\oldAgeActivity.vue
 * 
 -->
 <template>
  <div class="container">
    <div
      class="policy-item"
      v-for="(item, index) in policyList"
      :key="index"
      @click="activityClick(item)"
    >
      <div class="activity">
        <img :src="item.logoUrl" alt="" />

        <div class="content">
          <span class="title">{{ item.name }}</span>
          <span class="time">发布时间：{{ item.createTime }}</span>
        </div>
      </div>

      <span class="activity-title">活动时间：{{ item.time }}</span>
      <span class="activity-title">活动地点：{{ item.place }}</span>
    </div>
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
      // policyList: [],
    };
  },

  methods: {},
  watch: {},
  methods: {
    activityClick(item) {
     // console.log(item);
      this.$emit("activityItemClick", item);
    },
  },

  mounted() {},
};
</script>
  
  <style lang="less" scoped>
.container {
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

    img {
      border-radius: 3px;
      width: 200px;
      height: 120px;
    }
    .content {
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
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
        color: rgba(0, 0, 0, 0.4);
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