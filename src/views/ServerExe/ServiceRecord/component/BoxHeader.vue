<template>
  <div class="header">
    <nav
      v-for="i in headerData"
      :key="i"
      @click="handelActive(i)"
      :class="i.includes(activeHeader) ? 'active' : ''"
    >
      {{ i }}
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    headerData: {
      Type: Array,
      default: () => {
        return [];
      },
    },
    activeHeader: {
      Type: String,
      default: () => {
        return "";
      },
    },
  },
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {
    // this.$nextTick 将回调延迟到下次DOM更新循环之后执行
    this.$nextTick(() => {
      if (this.$route.query.name) {
        setTimeout(() => {
          document.querySelector(".header").scrollLeft =
            document.querySelector(".active").offsetLeft - 375 + 90;
        }, 300);
      }
    });
  },
  methods: {
    handelActive(i) {
      this.$emit("handelActive", i);
    },
  },
};
</script>

<style scoped lang="less">
.header {
  justify-content: space-evenly;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ccc;
  background: #fff;
  nav {
    display: inline-block;
    height: 53px;
    padding: 0 10px;
    line-height: 53px;
    box-sizing: border-box;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    text-align: center;
    margin-right: 3px;
  }
  .active {
    color: #4495F9;
    border-bottom: 3px solid #4495F9;
  }
}
</style>
