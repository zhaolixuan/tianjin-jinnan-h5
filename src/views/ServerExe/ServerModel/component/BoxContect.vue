<template>
  <div class="service_content">
    <nav
      class="service_content_item"
      v-for="i in serviceContentData"
      v-show="i.serviceStatue == activeHeader"
      :key="i.id"
    >
      <nav class="content">
        <van-cell-group>
          <van-field
            v-for="j in contentLabel"
            :key="j.label"
            :label="j.label"
            :value="i[j.value]"
            readonly
          />
        </van-cell-group>
      </nav>
      <nav class="btn" @click="checkDetail(i)">查看详情</nav>
    </nav>
    <van-empty v-if="!serviceContentData.length" description="暂无数据" />
  </div>
</template>

<script>
export default {
  props: {
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
      contentLabel: [
        {
          label: "订单编号",
          value: "orderNumber",
        },
        {
          label: "服务项目",
          value: "serviceProject",
        },
        {
          label: "服务地址",
          value: "serviceAddress",
        },
        {
          label: "联系对象",
          value: "servicePersonal",
        },
        {
          label: "联系方式",
          value: "phone",
        },
        {
          label: "上门时间",
          value: "serviceTime",
        },
      ],
    };
  },
  created() {},
  mounted() {
    // console.log(this.activeHeader);
  },
  methods: {
    checkDetail(i) {
      this.$router.push({
        path: "/workorder-details",
        query: { id: i.orderMealsPersonalId },
      });
    },
  },
};
</script>

<style scoped lang="less">
.service_content {
  .service_content_item {
    background: #fff;
    padding: 10px 14px;
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
      padding: 10px 0 0px;
    }
  }
}
</style>
