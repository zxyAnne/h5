<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import configData from './assets/js/configData'
window.configData = configData


export default {
  name: 'app',
  data(){
    return{

    }
  },
  mounted(){
    this.listen_link_func();
    this.listen_share_func();
  },
  methods: {
    listen_link_func(){
        var dom_a = document.querySelectorAll('a');
        var that = this;
        for(let i = 0; i < dom_a.length; i++){
            dom_a[i].addEventListener('click',function(e){
                e.preventDefault();
                let link_href = this.getAttribute('href');
                if(!link_href){
                    return;
                }
                if(that.$router.options.routes.some(function(item){
                    return item.path == link_href;
                })){
                    return;
                }
                
                if(configData.isApp){
                    link_href =  link_href.replace('http://m.mindcherish.com',location.origin);
                    window.mindcherish.actionFromJsWithRedirectTo(link_href);
                }else{
                    link_href +=  (link_href.indexOf('?')!=-1?'&':'?')+'sharewith=review2017';
                    location.href = link_href
                }
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
        if(window.mindcherish && typeof window.mindcherish.actionFromJsWithSetShareObject !='undefined'){
            window.mindcherish.actionFromJsWithSetShareObject(JSON.stringify(shareObject));
        }
        wechat(shareObject);
    }
  }
}
</script>

<style>
#app {
  
}
</style>
