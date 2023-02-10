<!--
 * @Author: ZhangFengYuan
 * @Date: 2022-11-17 14:23:21
 * @LastEditTime: 2022-12-02 15:53:07
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\service-body\index.vue
 * 
 -->
<template>
  <div class="container">
    <header-choice
      @handelTitleActivity="handelTitleActivity"
      :selectAreaTitle="selectAreaTitle"
      :selectStreetTitle="selectStreetTitle"
    ></header-choice>

    <box-tab-select
      :headerTabData="headerData"
      @handelTabActivity="handelBedNumTabActivity"
      :headerTitle="'床位数量: '"
    ></box-tab-select>

    <box-tab-select
      :headerTabData="headerMoneyData"
      @handelTabActivity="handelChargesTabActivity"
      :headerTitle="'床位收费标准: '"
    ></box-tab-select>

    <box-tab-select
      :headerTabData="headerCategoryData"
      @handelTabActivity="handelMealTabActivity"
      :headerTitle="'提供餐别: '"
    ></box-tab-select>
    <van-list v-model="loading" :finished="finished" @load="onLoad">
      <service-body-list
        @activityItemClick="activityItemClick"
        @activityPhoneItemClick="activityPhoneItemClick"
        @activityNavigationItemClick="activityNavigationItemClick"
        :policyList="policyList"
      ></service-body-list>
    </van-list>
    <van-popup class="popup" v-model="showPicker" round position="bottom">
      <van-picker
        :columns="pickerList"
        show-toolbar
        value-key="name"
        @cancel="showPicker = false"
        @confirm="onConfirm"
    /></van-popup>
  </div>
</template>

<script>
import HeaderChoice from "@/views/home/component/HeaderChoice.vue";
import BoxTabSelect from "@/views/home/component/BoxTabSelect.vue";
import ServiceBodyList from "@/views/home/service-body/component/ServiceBodyList.vue";
import { getServiceOrgList, getAreaStrComList } from "@/api/home";
export default {
  props: {},
  data() {
    return {
      selectAreaTitle: "选择区",
      selectStreetTitle: "选择区对应街道",
      headerData: [
        { typeName: "不限", typeValue: "" },
        { typeName: "50张以下", typeValue: "0-50" },
        { typeName: "50-100张", typeValue: "50-100" },
        { typeName: "100-200张", typeValue: "100-200" },
        { typeName: "200-300张", typeValue: "200-300" },
        { typeName: "300-500张", typeValue: "300-500" },
        { typeName: "500张以上", typeValue: "500" },
      ],
      headerMoneyData: [
        { typeName: "不限", typeValue: "" },
        { typeName: "2000以下", typeValue: "0-2000" },
        { typeName: "2000-3000", typeValue: "2000-3000" },
        { typeName: "3000-4000", typeValue: "3000-4000" },
        { typeName: "4000-5000", typeValue: "4000-5000" },
        { typeName: "5000-7000", typeValue: "5000-7000" },
        { typeName: "7000以上", typeValue: "7000" },
      ],
      headerCategoryData: [
        { typeName: "不限", typeValue: "" },
        { typeName: "早餐", typeValue: "早餐" },
        { typeName: "午餐", typeValue: "午餐" },
        { typeName: "晚餐", typeValue: "晚餐" },
      ],
      currentIndex: 0,
      policyList: [],
      paramsData: {},
      districtList: [],
      streetList: [],
      showPicker: false,
      pickerType: "area", //区 街道  区分
      finished: false,
      loading: false,
      pageNo: 1,
      pageSize: 10,
    };
  },
  components: {
    HeaderChoice,
    BoxTabSelect,
    ServiceBodyList,
  },
  mounted() {
    this.listData();
    this.getAreaStrComList({ type: 2 });
  },
  methods: {
    onRefresh() {
      this.pageNo = 1;
      this.policyList = [];
      this.listData();
    },
    onLoad() {
      this.pageNo++;
      this.listData();
    },
    listData() {
      this.loading = true;
      let data = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        orgType: 4,
        bedNumStart: this.paramsData.bedNumStart,
        bedNumEnd: this.paramsData.bedNumEnd,
        chargesStart: this.paramsData.chargesStart,
        chargesEnd: this.paramsData.chargesEnd,
        mealCategory: this.paramsData.mealCategory,
        districtCode: this.paramsData.districtCode,
        streetCode: this.paramsData.streetCode,
      };
      getServiceOrgList(data).then((res) => {
        this.loading = false;

        // this.policyList = res.data.rows;

        if (res.data.rows.length > 0) {
          res.data.rows.forEach((i) => {
            this.policyList.push(i);
          });
        } else {
          this.policyList = [];
        }

        if (res.data.rows && res.data.rows.length < 10) {
          this.finished = true;
        }
      });
    },
    getAreaStrComList(params) {
      getAreaStrComList(params).then((res) => {
        console.log(res);
        // this.policyList = res.data.rows;
        switch (params.type) {
          case 2:
            this.districtList = res.data;

            break;
          case 3:
            this.streetList = res.data;
            break;
          // case 4:
          //   this.communityList = data;
          //   break;
          default:
            break;
        }
      });
    },
    onConfirm(e) {
      console.log(e);

      switch (this.pickerType) {
        case "area":
          this.selectAreaTitle = e.name;
          this.selectStreetTitle = "选择区对应街道";
          this.paramsData.districtCode = e.code;
          this.paramsData.streetCode = "";

          this.streetList = [];
          this.getAreaStrComList({ type: 3, parentCode: e.code });
          break;
        case "street":
          this.selectStreetTitle = e.name;
          this.paramsData.streetCode = e.code;
          break;
      }
      this.onRefresh();
      this.showPicker = false;
    },
    handelTitleActivity(e) {
      this.showPicker = false;
      this.pickerType = e;
      switch (e) {
        case "area":
          this.pickerList = this.districtList;
          this.showPicker = true;
          break;
        case "street":
          if (this.streetList.length > 0) {
            this.pickerList = this.streetList;
            this.showPicker = true;
          } else {
            this.$message.error("请选择区");
          }

          break;
      }
    },
    handelBedNumTabActivity(item) {
      //床位数量
      let value = item.typeValue.split("-");
      this.paramsData.bedNumStart = value[0] || "";
      this.paramsData.bedNumEnd = value[1] || "";
      //  console.log( this.paramsData);
      this.onRefresh();
    },
    handelChargesTabActivity(item) {
      let value = item.typeValue.split("-");
      this.paramsData.chargesStart = value[0] || "";
      this.paramsData.chargesEnd = value[1] || "";
      this.onRefresh();
    },
    handelMealTabActivity(item) {
      let value = item.typeValue.split("-");
      this.paramsData.mealCategory = value[0] || "";
      this.onRefresh();
    },
    activityItemClick(item) {
      this.$router.push({
        path: "/service-details",
        query: { id: item.id, title: item.orgName },
      });
    },
    activityPhoneItemClick(item) {
      let a = document.createElement("a");
      a.href = "tel:" + item.contactTel;
      a.click();
    },
    activityNavigationItemClick(item) {
      console.log(item);
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  background-color: #fff;
}

//-------------------------------- 移动端适配 --------------------------
@media screen and (max-width: 1200px) {
  .container {
  }
}
//-------------------------------- pc端适配 --------------------------
@media screen and (min-width: 1200px) {
  .container {
    width: 40vw;
    margin: 0 auto;
    left: auto;
    .popup {
      width: 40vw;
      left: auto;
    }
  }
}
</style>


