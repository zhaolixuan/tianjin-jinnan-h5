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
 * @LastEditTime: 2022-11-21 11:21:52
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\component\BoxContect.vue
 * 
 -->

<template>
  <div class="service_content">
    <!-- v-show="i.serviceStatue == activeHeader" -->

    <span class="header-title">基本信息</span>

    <nav
      class="service_content_item"
      v-for="i in serviceContentData"
      :key="i.id"
    >
      <nav class="content">
        <van-cell-group>
          <van-field
            v-for="j in contentLabel"
            :key="j.label"
            :label="j.label"
            :value="i[j.value]"
            :border="false"
            readonly
          />
        </van-cell-group>
      </nav>
      <!-- <nav class="btn" @click="checkDetail(i)">{{ checkStatus(i.status) }}</nav> -->
    </nav>
    <van-empty v-if="!serviceContentData.length" description="暂无数据" />
  </div>
</template>

<script>
export default {
  props: {
    contentLabel: {
      Type: Array,
      default: () => {
        return [];
      },
    },

    serviceContentData: {
      Type: Array,
      default: () => {
        return [];
      },
    },


    activeHeader: {
      Type: String,
    },
  },
  data() {
    return {
      // contentLabel: [
      //   {
      //     label: "所在地区",
      //     value: "name",
      //   },
      //   {
      //     label: "机构性质",
      //     value: "sex",
      //   },
      //   {
      //     label: "年龄",
      //     value: "age",
      //   },

      //   {
      //     label: "联系方式",
      //     value: "phoneNumber",
      //   },
      //   {
      //     label: "所属街道社区",
      //     value: "community",
      //   },
      //   {
      //     label: "详细地址",
      //     value: "adress",
      //   },
      //   {
      //     label: "改造状态",
      //     value: "status",
      //   },
      // ],
    };
  },
  created() {},
  mounted() {
    // console.log(this.activeHeader);
  },
  methods: {
    checkDetail(i) {
      this.$router.push({
        path: "/slhgz-details",
        query: { id: i.id },
      });
    },
    checkStatus(status) {
      let str = "";
      if (status == "待改造") {
        str = "开始改造";
      } else if (status == "改造中") {
        str = "完成改造";
      } else if (status == "改造完成") {
        str = "申请验收";
      } else {
        str = "查看详情";
      }
      return str;
    },
  },
};
</script>

<style scoped lang="less">
.service_content {
  margin-bottom: 20px;
  border-top: 10px solid #F6F6FB ;
  padding-left: 20px;
  padding-right: 20px;

  background: #fff;
  text-align: left;
  .header-title{
    
    color: #000;
    font-size: 17px;
    font-weight: 400;
  }

  .service_content_item {
    background: #fff;
  //  padding: 10px 14px;
    display: flex;
    flex-direction: column;
    // border-bottom: 1px solid #ccc;
    margin-bottom: 11px;
    .van-field {
      padding: 6px 0;
    }
    .btn {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #4495F9;
    //  padding: 10px 0 0px;
    }
  }
}

//-------------------------------- 移动端适配 --------------------------
@media screen and (max-width: 1200px) {}
//-------------------------------- pc端适配 --------------------------
@media screen and (min-width: 1200px) {
  // .service_content{
  //   width: 40vw;
  //   margin: 0 auto;
  // }
}
</style>
