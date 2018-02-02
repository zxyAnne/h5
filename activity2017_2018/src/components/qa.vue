<template>
    <div class="qa">
        <div class="qa-box index-list-box">
            <div class="index-list-box-img img-left-top"></div>
            <div class="index-list-box-img img-left-bottom"></div>
            <div class="index-list-box-img img-right-top"></div>
            <div class="index-list-box-img img-right-bottom"></div>

            <div class="qa-list-sel-box">
                <div class="qa-list-sel-box-btn btn-sel">
                    <span>最新问答</span>
                </div>
                <div>
                    <span>精选问答</span>
                </div>
            </div>

            <div class="qa-list-content-box">
                <div class="qa-list-content-box-item-box">
                    <div class="qa-list-item-content">
                        <p>上周五美国政府关门了，能否解释一下原因？特朗普上任一年，却落得美国政府再度关门，这个时间有何影响？会对查看更多对查看更多</p>
                    </div>
                    <div class="qa-list-item-info">
                        <div class="qa-list-item-info-left">
                            <span>莫尼塔研究</span>
                        </div>
                        <div class="qa-list-item-info-right">
                            <span>></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style type="text/sass" lang="scss" scoped>
    .qa{
        &-box{
            padding-top: 20px;
        }
        &-list-sel-box{
            width: 60%;
            margin: 0 auto 20px;
            display: flex;
            justify-content: space-around;
            font-size: 18px;
            font-weight: bold;
            color: rgba(0,0,0,0.54);
            .btn-sel{
                padding-bottom: 2px;
                position: relative;
                color: rgb(222,79,69);
            }
            .btn-sel:before{
                content: '';
                width: 50%;
                height: 2px;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                background-color: rgb(222,79,69);
            }
        }
        &-list-content-box{
            width: 96%;
            margin: 0 auto;
            position: relative;
            background-color: white;
            &-item-box{
                width: 92%;
                margin: 0 auto;
                .qa-list-item-content{
                    padding: 16px 0 14px;
                    border-bottom: solid 1px rgb(255,244,236);
                    font-size: 15px;
                    color: rgb(51,51,51);
                    p{
                        height: 60px;
                        display: inline-block;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
                .qa-list-item-info{
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    line-height: 44px;
                }
            }
        }
        &-list-content-box:before{
            content: '';
            width: 32px;
            height: 32px;
            position: absolute;
            top: -2px;
            left: -3px;
            background-image: url('../assets/img/index_list_img_flag.png');
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
</style>

<script>
    export default {
        name: 'qa',
        data(){
            return {

            }
        },
        beforeCreate(){
        
            // axios.get('http://lz.mindcherish.com/v1/expertquestion/lists')
            // .then(function(ret){
            //     console.log(ret);
            // })
            // .catch(function(err){
            //     console.log(err);
            // });
        }
    }
</script>