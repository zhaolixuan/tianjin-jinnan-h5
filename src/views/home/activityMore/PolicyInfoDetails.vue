<!--
 * @Author: ZhangFengYuan
 * @Date: 2022-11-16 14:40:51
 * @LastEditTime: 2022-12-26 10:39:32
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\activityMore\PolicyInfoDetails.vue
 * 
 -->
<template>
  <div class="content">
    <HeaderBanner
      :headerTitle="title"
      :orgType="orgType"
      :contentData="contentData"
    ></HeaderBanner>
    <div class="fix">
      <div>
        <p>索引号： {{ contentData.indexNo }}</p>
        <p>成文时间：{{ contentData.publishDate }}</p>
      </div>
     
    </div>

    <box-text-content
      :contentData="contentData.content || ''"
    ></box-text-content>
  </div>
</template>

<script>
import HeaderBanner from "@/views/home/component/HeaderBanner.vue";
import BoxContect from "@/views/home/component/BoxContect.vue";
import { getpolicyInfoDetail } from "@/api/home";
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
      orgType: "6",
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
      getpolicyInfoDetail(data).then((res) => {
        console.log(res);
        this.contentData = res.data;
      });
    },
  },
};
</script>

<style scoped lang="less">
.content {
  background-color: #fff;
  .fix {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    p {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: row;
      color: rgba(0, 0, 0, 0.4);
      font-size: 14px;
    }
  }
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
