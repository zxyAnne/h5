<template>
    <div class="info-box">
        <div class="info-box-content-box">
            <div class="content-item">
                <span class="content-item-title"> 一、活动时间</span>           
                <div>
                    2018年2月10日-2018年2月28日
                </div>
            </div>
            <div class="content-item">
                <span class="content-item-title">二、活动内容</span>
                <div>活动期间，根据本活动首页内5个任务卡内容，根据要求完成任务即可获得相应数量的抽奖券，使用抽奖券参与抽奖便可获得丰厚奖品。
                </div>
            </div>
            <div class="content-item">
                <span class="content-item-title">三、奖品说明</span>
                <div>1、实物奖品：iPhone X（128G黑色）、《涛动周期论》、《原则》及《扑克问答精选》，中奖后凭中奖账户信息联系<a class="content-item-link" href="">扑克小助手</a>领取；<br>2、平台优惠券：5元试看券、8.8问券、3元Get券、8.8折圈子优惠券，中奖后将自动发放到你的账户内<router-link class="content-item-link" to="/gift">（钱包-优惠券）</router-link>。
                </div>
            </div>
            <div class="content-item">
                <span class="content-item-title">四、注意事项</span>
                <div>1、5元试看券，在其有效期内用户可试看答案30分钟，由于智咖/答主自己的设置，部分回答不支持试看券查看；<br>2、8.8元提问券，在其有效期内用户付费提问时可抵扣8.元，每次提问仅限使用1张；<br>3、3元Get券，在其有效期内用户付费Get答案时可抵扣3元，每次Get仅限使用1张；<br>4、8.8折圈子优惠券，在其有效期内用户购买圈子时可按圈子金额8.8折优惠；每次购买圈子仅限使用1张；<br>5、试看券、Get券、提问券、圈子折扣券等优惠券的详细使用说明见“<a class="content-item-link" href="">优惠券使用须知</a>”；<br>6、 请用户理性参与抽奖活动，若出现非正当方式获取奖品的情况，扑克财经有权取消恶意号码所得奖品资格；<br>7、本活动最终解释权归扑克财经所有，如有疑问请拨打客服热线021-33688786-804（工作日9:30-18:30）或在线联系<a class="content-item-link" href="">扑克小助手</a>（微信：chaoxizhushou）。
                </div>
            </div>
        </div>
    </div>
</template>

<style type="text/sass" lang="scss" scoped>
    .info-box{
        width: 100%;
        height: 100%;
        padding-top: 16px;
        background-color: rgb(204,55,57);
        &-content-box{
            width: 88%;
            margin: 0 auto;
            padding: 0 12px 30px;
            border: solid 1px white;
            font-size: 14px;
            line-height: 1.5;
            color: black;
        }
        .content-item{
            margin-top: 30px;
            &-title{
                font-size: 16px;
                font-weight: bold;
            }
            div{
                margin-top: 8px;
                line-height: 1.6;
                .content-item-link{
                    text-decoration: underline;
                    color: rgb(222,79,69);
                }
            }
        }
    }
</style>

<script>
    export default {
        name: 'info',
        data(){
            return {

            }
        },
        beforeCreate(){
            configData.setTitle('活动说明');
        },
    }
</script>