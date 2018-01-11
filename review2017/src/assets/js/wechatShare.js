import axios from 'axios'
// var wx = require('weixin-js-sdk');
import wx from 'weixin-js-sdk'
window.wx = wx;

function getScript() {
    return new Promise((resolve, reject) => {
  
      axios({
        url: 'http://res.wx.qq.com/open/js/jweixin-1.2.0.js',
        method: 'get',
        dataType: "script",
        cache : true,
      }).then(function() {
        resolve(window.wx)
      })
      .catch(function(error) {
        reject( error );
      });
  
    })
  }
  
  function act() {
    return new Promise((resolve, reject) => {
      // console.log(window.location.href)
      axios({
        url: location.protocol+'//m.mindcherish.com/rpc/wechat/sign',//后台索要的算法签名
        method: 'get',
        dataType: 'jsonp',
        data: {
          url: encodeURIComponent(window.location.href.split('#')[0]),
        },
      }).then(function(ret) {
        resolve(ret)
      }).catch(function(ret) {
          reject( ret );
        })
    })
  }
  
  
  
  export function wechatShare(shareDate) {
    return new Promise(async function(resolve, reject) {
  
      try{
        let isWechat=navigator.userAgent.indexOf('MicroMessenger')>-1 //判断为微信浏览器
        if(!isWechat){
          //return resolve('not weichat')
        }
        if(!window.wx){
          await getScript();
        }
  
  
        var defaultData = {
          title: `分享的标题`,
          desc: `内容`,
          link: `${window.location.href}`,
          imgUrl: "https://m.mindcherish.com/public/sharelogo.png", //分享出来的图片的
          success: function (res) {
  
          },
        }
        let data = { ...defaultData, ...shareDate }
        let ret = await act()
        ret.jsApiList = ['onMenuShareQQ','onMenuShareAppMessage', 'onMenuShareTimeline'];
        wx.config(ret);
  
        wx.ready(function () {
          wx.onMenuShareTimeline({
            title: data.title,
            desc: '',
            link: data.link,
            imgUrl: data.imgUrl,
            dataUrl: '',
            success: data.success,
            cancel: function () {},
          })
          wx.onMenuShareAppMessage({
            title: data.title,
            desc: data.desc,
            link: data.link,
            imgUrl: data.imgUrl,
            dataUrl: '',
            success: data.success,
            cancel: function () {},
          })
          wx.onMenuShareQQ({
            title: data.title,
            desc: data.desc,
            link: data.link,
            imgUrl: data.imgUrl,
            dataUrl: '',
            success: data.success,
            cancel: function () {},
          })
        })
  
      }catch(error){
        reject( error );
      }
    })
  
  }