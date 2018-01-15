<template>
    <div class="index-main-content detail-body">
        <div class="expert-title">
            <img src="../assets/detail_logo.png" alt="">
        </div>
        <div style="padding-bottom: 1px;" class="content-tips">
            <span>数据来源：基于扑克财经App大数据</span>
            <p>点击问题即可查看问答详情</p>
        </div>
        <!-- 专家 -->
          <div class="content-main">
              <img class="content-main-title" src="../assets/qa.png" alt="">
              <a class="content-list" href="http://m.mindcherish.com/expert/17180">
                  <img src="../assets/qa_1.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/expert/19130">
                  <img src="../assets/qa_2.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/expert/16597">
                  <img src="../assets/qa_3.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/expert/25476">
                  <img src="../assets/qa_4.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/expert/16376">
                  <img src="../assets/qa_5.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/expert/36085">
                  <img src="../assets/qa_6.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/expert/29074">
                  <img src="../assets/qa_7.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/expert/17812">
                  <img src="../assets/qa_8.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/expert/17460">
                  <img src="../assets/qa_9.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/expert/6677">
                  <img src="../assets/qa_10.png" alt="">
              </a>
          </div>
          <div v-show="!isApp && isShowDownInfo" class="index-bottom">
            <img src="../assets/code.png" alt="">
            <h5>扫码关注扑克财经</h5> 
<div class="index-bottom-download">
            <a href="http://android.myapp.com/myapp/detail.htm?apkName=com.pouke.mindcherish&ADTAG=mobile">点击下载扑克财经App</a>
          </div>        </div>
          <!-- 子页返回按钮 -->
          <div v-show="isApp" class="index-bottom">
              <img style="width: 50%; margin-top: 20px;" src="../assets/app_back.png" alt="">
              <div class="index-bottom-download">
                <router-link to="/">返回榜单首页</router-link>
              </div>
          </div>
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
  name: 'qa',
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
      this.listen_link_func();
      if(this.isApp){
                this.listen_share_func();
            }
  },
  methods: {
      scroll_top_func(){
          var that = this;
          window.addEventListener('scroll',function(){
              if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
                  that.isShowDownInfo = true;
              }else{
                  that.isShowDownInfo = false;
              }
          });
      },
      listen_link_func(){
        var dom_a = document.querySelectorAll('a');
        var that = this;
        for(let i = 0; i < dom_a.length; i++){
            dom_a[i].addEventListener('click',function(e){
                let link_href = this.getAttribute('href');
                if(that.isApp){
                    link_href =  link_href.replace('http://m.mindcherish.com',location.origin);
                    window.mindcherish.actionFromJsWithRedirectTo(link_href);
                }else{
                    link_href +=  (link_href.indexOf('?')!=-1?'&':'?')+'sharewith=review2017';
                    location.href = link_href
                }
                e.preventDefault();
            });
        }
    },
    listen_share_func(){
        var shareObject = {
            "title": "扑克财经2017年度盘点", // 分享标题
            "desc": "与数万行业资深从业者一起，用专业的力量，连接起产业和金融",
            "link": "http://m.mindcherish.com/article/content?id=20180111", // 分享链接
            "imgUrl": "http://m.mindcherish.com/public/sharelogo.png"
        }
        window.mindcherish.actionFromJsWithSetShareObject(JSON.stringify(shareObject));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/sass" lang="scss" scoped>
  
</style>
