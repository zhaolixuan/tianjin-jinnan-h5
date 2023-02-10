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
 * @Date: 2022-11-16 10:09:43
 * @LastEditTime: 2023-01-30 10:08:54
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\component\policyActivity.vue
 * 
 -->
 <template>
  <div class="container">
    <div class="policy-item"
         v-for="(item, index) in policyList"
         @click="handelDetail(item)"
         :key="index">
      <img src="../../../assets/images/home-news2.jpg"
           alt="" />

      <div class="content">
        <span class="title">{{item.policyName}}</span>
        <span class="time">{{item.scope}}政策</span>
        <span class="time">发布时间：{{item.createTime}}</span>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: ['policyList'],
  data() {
    return {}
  },

  methods: {
    handelDetail(item) {
      this.$router.push({
        path: '/policyInfo-details',
        query: { id: item.id, title: item.policyName },
      })
    },
  },
  watch: {},
  mounted() {},
}
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
    align-items: center;

    img {
      border-radius: 3px;
      width: 150px;
      height: 90px;
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