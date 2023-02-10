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
 * @LastEditTime: 2022-12-26 10:32:00
 * @LastEditors: ZhangFengYuan
 * @Description: 
 * @FilePath: \city-yanglao-H5\src\views\home\component\BoxTextContent.vue
 * 
 -->

<template>
  <div class="service_content">
    <span class="header-title" v-if="headerTitle">{{ headerTitle }}</span>
    <pre>
    <span class="content" v-html="content(contentData)"></span>
  </pre>
  </div>
</template>

<script>
import { Base64 } from "js-base64";
export default {
  props: {
    headerTitle: {
      Type: String,
      default: () => {
        return "";
      },
    },

    contentData: {
      Type: String,
      default: () => {
        return "";
      },
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    // console.log(this.activeHeader);
  },
  methods: {
    content(e) {
      if (e == "" || e == null) {
        return "暂无数据";
      } else {
        console.log(this.isBase64(e));
        // this.form.serviceProject =
        return this.isBase64(e)? Base64.decode(e) : e; //解密
      }
    },
    isBase64(str){
      if (str === '' || str.trim() === '') {
                return false;
            }
            try {
                return btoa(atob(str)) == str;
            } catch (err) {
                return false;
            }

    }
  },
};
</script>

<style scoped lang="less">
.service_content {
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 10px solid #f6f6fb;
  padding-left: 20px;
  padding-right: 20px;

  background: #fff;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  .header-title {
    color: #000;
    font-size: 17px;
    font-weight: 400;
  }

  .content {
    display: flex;
    padding-top: 10px;
    color: #000;
    font-size: 15px;
    font-weight: 400;
    flex-wrap: wrap;
    width: 95vw;
  }
}

//-------------------------------- 移动端适配 --------------------------
@media screen and (max-width: 1200px) {
}
//-------------------------------- pc端适配 --------------------------
@media screen and (min-width: 1200px) {
  // .service_content{
  //   width: 40vw;
  //   margin: 0 auto;
  // }
}
</style>
