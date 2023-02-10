<!--
 * @Author: ZhangFengYuan
 * @Date: 2022-11-16 14:40:51
 * @LastEditTime: 2022-11-16 17:03:28
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\nursing\index.vue
 * 
 -->
<template>
  <div class="content">
    <HeaderBanner
      :headerBannerData="bannerSettingFiles"
      :headerTitle="title"
    ></HeaderBanner>
    <box-contect
      :contentLabel="contentLabel"
      :serviceContentData="serviceContentData"
    ></box-contect>
  </div>
</template>

<script>
import HeaderBanner from "@/views/home/component/HeaderBanner.vue";
import BoxContect from "@/views/home/component/BoxContect.vue";
//import BoxContect from '../component/BoxContect.vue';
export default {
  data() {
    return {
      title: "越秀路街道养老服务综合体",
      // 轮播图
      bannerSettingFiles: [
        {
          url: "https://s3.cn-east-2.jdcloud-oss.com/tianjinyanglao/d3cf27bc-7996-402d-85af-612e49e89f0b.jpg",
        },
      ],
      contentLabel: [
        {
          label: "所在地区：",
          value: "name",
        },
        {
          label: "机构性质：",
          value: "name",
        },
        {
          label: "占地面积：",
          value: "name",
        },
        {
          label: "床位数：",
          value: "name",
        },
        {
          label: "区间：",
          value: "name",
        },
      ],

      serviceContentData: [{ name: "测试" }],
    };
  },
  components: {
    HeaderBanner,
    BoxContect,
  },
  methods: {},
};
</script>

<style scoped lang="less">
.content {
  background-color: #fff;
}

//-------------------------------- 移动端适配 --------------------------
@media screen and (max-width: 1200px) {
  //
}
//-------------------------------- pc端适配 --------------------------
@media screen and (min-width: 1200px) {
  .content {
    width: 40vw;
    margin: 0 auto;
  }
}
</style>
