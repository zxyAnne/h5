<template>
  <div >
      <div class="index-logo"></div>
      <!-- <img src="../assets/banner_new.png" alt=""> -->
      <div style="" class="index-video">
          <div v-show="!isMobile" id="video_btn" @click="play_toggle()" class="index-video-playbtn"></div>
          <video poster="../assets/video_start.jpg" preload="metadata" playsinline webkit-playsinline  id="video" controls="controls" src="https://static2.mindcherish.com/h5/review2017.mp4"></video>
      </div>
      <div class="index-main-content">
          <div class="content-tips">
              <span>数据来源：基于扑克财经App大数据</span>
          </div>
          <!-- 专家 -->
          <div style="margin-top: 0;" class="content-main">
              <img class="content-main-title" src="../assets/expert.png" alt="">
              <a class="content-list" href="http://m.mindcherish.com/user/25085">
                  <img src="../assets/expert_1.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/user/11762">
                  <img src="../assets/expert_2.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/user/23931">
                  <img src="../assets/expert_3.png" alt="">
              </a>
              <router-link class="index-link" to="/expert" ><img  src="../assets/link.png" alt=""></router-link>
          </div>
          <!-- 学习 -->
          <div class="content-main">
              <img class="content-main-title" src="../assets/learn.png" alt="">
              <a class="content-list" href="http://m.mindcherish.com/user/13025">
                  <img src="../assets/learn_1.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/user/17216">
                  <img src="../assets/learn_2.png" alt="">
              </a>
              <a class="content-list" href="http://m.mindcherish.com/user/10866">
                  <img src="../assets/learn_3.png" alt="">
              </a>
              <router-link class="index-link" to="/learn"><img  src="../assets/link.png" alt=""></router-link>
          </div>
          <!-- 回答 -->
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
              <router-link class="index-link" to="/qa"><img  src="../assets/link.png" alt=""></router-link>
          </div>
          <!-- 文章 -->
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
              <router-link class="index-link" to="/article"><img  src="../assets/link.png" alt="">
</router-link>
          </div>
      </div>
      <div v-show="!isApp && isShowDownInfo" class="index-bottom">
          <img src="../assets/code.png" alt="">
          <h5>扫码关注扑克财经</h5> 
          <div class="index-bottom-download">
            <a href="http://android.myapp.com/myapp/detail.htm?apkName=com.pouke.mindcherish&ADTAG=mobile">点击下载扑克财经App</a>
          </div>
      </div>
  </div>
</template>

<script>

    var isApp_flage,isMobile_flage;
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
    var is_mobile = function () {
        return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    },
    isApp_flage = is_app();
    isMobile_flage = Boolean(is_mobile());
    
    
import '@/style/index.scss'

export default {
  name: 'index',
  data () {
      let video = document.getElementById('video');
      let video_btn = document.getElementById('video_btn');


    return {
      msg: '',
      isApp: isApp_flage,
      isMobile: isMobile_flage,
      isShowDownInfo: false,
      isPlaying: false
    }
  },
  mounted(){
      if(document.body.scrollTop <= 0){
            document.body.scrollTop = 1;
        }
      this.play_or_pause();
      this.scroll_top_func();
      this.listen_link_func();
      
      //app内调用window.mindcherish.actionFromJsContentLoaded()
      if(this.isApp){
          window.mindcherish.actionFromJsContentLoaded();
      }
      this.listen_share_func();
  },
  methods:{
      play_toggle(){
        if(video.ended || video.paused){
            video.play();
            video_btn.style.opacity = 0;
        }else{
            video.pause();
            video_btn.style.opacity = 1;
        }
      },
      play_or_pause(){
            let video = document.getElementById('video');
            let video_btn = document.getElementById('video_btn');
            video.addEventListener('play',function(){
                video_btn.style.opacity = 0;
            });
            video.addEventListener('pause',function(){
                video_btn.style.opacity = 1;
            });
      },
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
                if(link_href.indexOf('#')===0) return;
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
        if(this.isApp){
            window.mindcherish.actionFromJsWithSetShareObject(JSON.stringify(shareObject));
        }else{
            wechatShare(shareObject);
        }
        
    }
  },
  watch: {
    //   isPlaying(newVal,oldVal){

    //       console.log(video);
    //       if(newVal){
    //           video.play();
    //       }else{
    //           video.pause();
    //       }
    //   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/sass" lang="scss" scoped>
    
</style>