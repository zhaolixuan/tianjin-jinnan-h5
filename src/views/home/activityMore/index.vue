<!--
 * @Author: ZhangFengYuan
 * @Date: 2022-12-02 09:36:13
 * @LastEditTime: 2022-12-02 10:23:15
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\activityMore\index.vue
 * 
 -->

 <template>
  <div class="container">
    <van-list v-model="loading"
              :finished="finished"
              @load="onLoad">

      <policy-info-activity v-if="name == '养老政策'"
                            :policyList="policyList"></policy-info-activity>
      <old-age-activity v-else
                        @activityItemClick="activityClick"
                        :policyList="policyList"></old-age-activity>
    </van-list>
  </div>
</template>
 
 <script>
import oldAgeActivity from '../component/oldAgeActivity.vue'
import policyInfoActivity from '../component/policyActivity.vue'
import { getActivityInfoList, getpolicyData } from '@/api/home'
export default {
  components: { oldAgeActivity, policyInfoActivity },
  data() {
    return {
      finished: false,
      loading: false,
      pageNo: 1,
      pageSize: 10,
      policyList: [],
      name: null,
    }
  },
  mounted() {
    this.name = this.$route.query.name
    this.$route.meta.title = this.name
    this.activityListData()
  },
  methods: {
    onLoad() {
      this.pageNo++
      this.activityListData()
    },
    activityListData() {
      this.loading = true
      let data = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      }
      if (this.name == '养老政策') {
        getpolicyData(data).then((res) => {
          this.loading = false
          if (res.data.rows.length > 0) {
            res.data.rows.forEach((i) => {
              this.policyList.push(i)
            })
          } else {
            this.policyList = []
          }

          if (res.data.rows && res.data.rows.length < 10) {
            this.finished = true
          }
        })
      } else {
        getActivityInfoList(data).then((res) => {
          this.loading = false
          if (res.data.rows.length > 0) {
            res.data.rows.forEach((i) => {
              this.policyList.push(i)
            })
          } else {
            this.policyList = []
          }

          if (res.data.rows && res.data.rows.length < 10) {
            this.finished = true
          }
        })
      }
    },
    activityClick(item) {
      if (this.name == '养老政策') {
        this.$router.push({
          path: '/policy-policyInfo-details',
          query: { id: item.id, title: item.name },
        })
      } else {
        this.$router.push({
          path: '/old-activity-details',
          query: { id: item.id, title: item.name },
        })
      }
    },
  },
}
</script>
 
 <style lang="less" scoped>
.container {
  margin-top: 10px;
  width: 100%;
  height: 100%;
  background: #ffffff;
}

//-------------------------------- pc端适配 --------------------------
@media screen and (min-width: 1200px) {
  .container {
    width: 40vw;
    margin: 0 auto;
  }
}
</style>

