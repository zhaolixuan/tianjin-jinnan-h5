<!--
 * @Author: ZhangFengYuan
 * @Date: 2022-11-16 14:40:51
 * @LastEditTime: 2022-12-02 16:02:36
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\service-body\serviceDetails.vue
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
    <box-contect
      :contentLabel="contentLabel"
      :serviceContentData="serviceContentData"
    ></box-contect>

    <box-text-content
      :headerTitle="'服务内容'"
      :contentData="contentData.serviceProject || ''"
    ></box-text-content>

    <box-text-content
      :headerTitle="'机构简介'"
      :contentData="contentData.orgIntros || ''"
    ></box-text-content>
    <BoxImgList
      :headerTitle="'图片'"
      :imgListData="contentData.envPics"
    ></BoxImgList>
  </div>
</template>

<script>
import HeaderBanner from "@/views/home/component/HeaderBanner.vue";
import BoxContect from "@/views/home/component/BoxContect.vue";
import { getServiceOrgDetail } from "@/api/home";
import BoxTextContent from "@/views/home/component/BoxTextContent.vue";
import BoxImgList from "@/views/home/component/BoxImgList.vue";
//import BoxContect from '../component/BoxContect.vue';
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
      contentLabel: [
        {
          label: "所在地区：",
          value: "region",
        },
        {
          label: "占地面积：",
          value: "floorSpace",
        },
        {
          label: "床位数：",
          value: "bedNum",
        },
        {
          label: "区间：",
          value: "charges",
        },
        { label: "提供餐别", value: "mealCategory" },
      ],

      serviceContentData: [],

      contentData: {},
      orgType: "4",
    };
  },
  components: {
    HeaderBanner,
    BoxContect,
    BoxTextContent,
    BoxImgList,
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
      getServiceOrgDetail(data).then((res) => {
        console.log(res);
        this.bannerSettingFiles = [res.data.doorHeadPic];
        this.contentData = res.data;
        this.serviceContentData = [
          {
            region:
              this.contentData.district +
              "-" +
              this.contentData.street +
              "-" +
              this.contentData.community,
            floorSpace: this.contentData.floorSpace + " ㎡",
            bedNum: this.contentData.bedNum + " 张",
            charges:
              this.contentData.chargesMin + "-" + this.contentData.chargesMax,
            mealCategory: this.contentData.mealCategory,
          },
        ];
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
