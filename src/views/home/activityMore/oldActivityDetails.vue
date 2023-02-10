<!--
 * @Author: ZhangFengYuan
 * @Date: 2022-11-16 14:40:51
 * @LastEditTime: 2022-12-07 17:25:55
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\activityMore\oldActivityDetails.vue
 * 
 -->
<template>
  <div class="content">
    <HeaderBanner
      :headerBannerData="bannerSettingFiles"
      :headerTitle="title"
      :orgType="orgType"
      :contentData="contentData"
    ></HeaderBanner>

    <box-text-content
      :headerTitle="'活动介绍'"
      :contentData="contentData.intro || ''"
    ></box-text-content>
  </div>
</template>

<script>
import HeaderBanner from "@/views/home/component/HeaderBanner.vue";
import BoxContect from "@/views/home/component/BoxContect.vue";
import { getActivityDetail } from "@/api/home";
import BoxTextContent from "@/views/home/component/BoxTextContent.vue";
import BoxImgList from "@/views/home/component/BoxImgList.vue";
export default {
  data() {
    return {
      title: this.$route.query.title || "",
      // 轮播图
      bannerSettingFiles: [
        // {
        //   url: "https://s3.cn-east-2.jdcloud-oss.com/tianjinyanglao/d3cf27bc-7996-402d-85af-612e49e89f0b.jpg",
        // },
      ],

      serviceContentData: [],

      contentData: {},
      orgType: "5",
    };
  },
  components: {
    HeaderBanner,

    BoxTextContent,
  },
  mounted() {
    // console.log(this.$route.query.title);
    this.getData();
  },
  methods: {
    getData() {
      let data = {
        id: this.$route.query.id,
      };
      getActivityDetail(data).then((res) => {
        console.log(res);
        this.contentData = res.data;
        this.bannerSettingFiles = [{url:res.data.logoUrl}]
      });
    },
  },
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
