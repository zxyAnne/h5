<template>
    <div class="index-main-content detail-body">
        <div class="expert-title">
            <img src="../assets/detail_logo.png" alt="">
        </div>
        <div class="content-tips">
            <span>数据来源：基于扑克财经App大数据</span>
        </div>
        <!-- 专家 -->
          <div class="content-main">
              <img class="content-main-title" src="../assets/article.png" alt="">
              <a class="content-list" href="http://m.mindcherish.com/article/content?id=1805">
                  <img src="../assets/article_1.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/article/content?id=507">
                  <img src="../assets/article_2.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/article/content?id=3303">
                  <img src="../assets/article_3.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/article/content?id=2209">
                  <img src="../assets/article_4.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/article/content?id=2528">
                  <img src="../assets/article_5.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/article/content?id=2244">
                  <img src="../assets/article_6.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/article/content?id=1530">
                  <img src="../assets/article_7.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/article/content?id=3313">
                  <img src="../assets/article_8.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/article/content?id=3309">
                  <img src="../assets/article_9.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/article/content?id=3222">
                  <img src="../assets/article_10.png" alt="">
              </a>
          </div>
          <div v-show="!isApp && isShowDownInfo" class="index-bottom">
            <img src="../assets/code.png" alt="">
            <h5>扫码关注扑克财经</h5> 
<div class="index-bottom-download">
            <a href="http://android.myapp.com/myapp/detail.htm?apkName=com.pouke.mindcherish&ADTAG=mobile">点击下载扑克财经App</a>
          </div>        </div>
    </div>
</template>

<script>
var isApp_flage;
    var is_android_app = function() {
        //判断是否微信
        var ua = navigator.userAgent.toLowerCase();
        var platform = navigator.platform;
        if (platform.indexOf("Win") == 0 || platform.indexOf("Mac") ==0) {
            return false;
        }
        // alert(ua)
        if(ua.match(/mindcherish_android_app/i)=="mindcherish_android_app" ) {
            return true;
        } else {
            return false;
        }
    }
    var is_ios_app = function () {
        var ua = navigator.userAgent.toLowerCase();
        var platform = navigator.platform;
        if (platform.indexOf("Win") == 0 || platform.indexOf("Mac") ==0) {
            return false;
        }
        if(ua.match(/mindcherish_ios_app/i)=="mindcherish_ios_app" ) {
            return true;
        } else {
            return false;
        }
    }
    var is_app = function () {
        return is_android_app() || is_ios_app();
    }
    isApp_flage = is_app();

export default {
  name: 'article',
  data () {
    return {
        isApp: isApp_flage,
        isShowDownInfo: false,
      msg: ''
    }
  },
  mounted(){
      document.body.scrollTop = 0;            
      this.scroll_top_func();

  },
  methods: {
      scroll_top_func(){
          var that = this;
          window.addEventListener('scroll',function(){
              if(document.body.scrollTop > 100){
                  that.isShowDownInfo = true;
              }else{
                  that.isShowDownInfo = false;
              }
          });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/sass" lang="scss" scoped>
  
</style>
