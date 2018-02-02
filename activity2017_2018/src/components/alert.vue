<template>
    <div v-if="type">
        <div @click="login_cancel()" class="alert-mask">
        </div>
        <!-- 登录 -->
            <div v-if="type == 'isLogin'" class="login-box">
                <div class="login-box-content">
                    <div class="login-box-content-top">
                        <span>手机验证</span>
                    </div>
                    <div class="login-box-content-middle">
                        <div class="content-box">
                            <div class="content-box-tel">
                                <input type="text" placeholder="请输入手机号" />
                            </div>
                            <div class="content-box-code">
                                <input type="text" placeholder="请输入验证码" />
                                <div>获取验证码</div>
                            </div>
                        </div>
                    </div>
                    <div class="login-box-content-bottom">
                        <div @click="login_cancel()" class="btn-cancel">取消</div>
                        <div class="btn-confirm">确定</div>
                    </div>
                </div>
            </div>
        <!-- 登录 -->
        <!-- 奖励 -->
            <div v-if="type == 'isReward'" class="reward-box">
                <div class="reward-box-content">
                    <div class="reward-box-content-title">
                        <span>恭喜你</span><br>
                        <span class="reward-main-title">获得8折优惠券</span>
                    </div>
                    <div class="reward-box-content-main">
                    </div>
                    <div class="reward-box-content-info">
                        <span>优惠券将发放至你的</span><span class="reward-box-content-info-right">钱包-优惠券</span>
                    </div>

                    <div class="reward-box-close-btn">X</div>
                </div>
                <div class="reward-box-btn">我知道了</div>
            </div>
        <!-- 奖励 -->
    </div>
</template>

<style type="text/sass" lang="scss" scoped>
    .alert-mask{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.6);
        // z-index: -1;
    }
    //登录
    .login-box{
        &-content{
            width: 85%;
            // height: 200px;
            margin: 50% auto;
            // border: solid 1px white;
            border-radius: 2px;
            background-color: white;
            z-index: 1;
            transform: translateY(-50%);
            &-top{
                font-size: 18px;
                line-height: 48px;
                text-align: center;
                color: black;
            }
            &-middle{
                width: 100%;
                padding: 20px 0;
                border-top: solid 1px rgb(243,243,243);
                border-bottom: solid 1px rgb(243,243,243);
                .content-box{
                    width: 87%;
                    margin: 0 auto;
                    input{
                        height: 44px;
                        padding-left: 16px;
                        border-radius: 2px;
                        background-color: rgb(224,224,224);
                        font-size: 14px;
                        color: rgba(0,0,0,0.38);
                    }
                    &-tel input{
                        width: 100%;
                    }
                    &-code{
                        display: flex;
                        justify-content: space-between;
                        margin-top: 20px;
                        input{
                            width: 150px;
                        }
                        div{
                            width: 110px;
                            height: 44px;
                            background-color: rgba(0,0,0,0.25);
                            font-size: 14px;
                            line-height: 44px;
                            text-align: center;
                            color: white;
                        }
                    }
                }
            }
            &-bottom{
                display: flex;
                div{
                    width: 50%;
                    height: 44px;
                    font-size: 16px;
                    line-height: 44px;
                    text-align: center;
                    color: rgb(222,79,69);
                }
                .btn-cancel{
                    border-right: solid 1px rgb(243,243,243);
                }
            }
        }
    }
    //登录
    //奖励
    .reward-box{
        width: 85%;
        // height: 200px;
        position: relative;
        margin: 50% auto;
        // border: solid 1px white;
        border-radius: 2px;
        background-image: linear-gradient(to bottom, rgb(222, 79, 69), rgb(204, 55, 57));
        z-index: 1;
        transform: translateY(-50%);
        &-content{
            padding-top: 30px;
            padding-bottom: 20px;
            &-title{
                font-size: 20px;
                text-align: center;
                color: white;
                .reward-main-title{
                    line-height: 1.8;
                    color: rgb(246,198,67);
                }
            }
            &-main{
                height: 196px;
            }
            &-info{
                font-size: 14px;
                text-align: center;
                color: white;
                &-right{
                    text-decoration: underline;
                    color: rgb(246,198,67);
                }
            }
        }
        &-btn{
            width: 100%;
            height: 44px;
            background-color: white;
            font-size: 16px;
            line-height: 44px;
            text-align: center;
            color: rgb(222,79,69);
        }
        &-close-btn{
            width: 24px;
            height: 24px;
            border: solid 1px black;
            border-radius: 50%;
            position: absolute;
            top: -13px;
            right: -13px;
        }
    }
    //奖励
</style>

<script>
    export default {
        name: 'alert',
        props: ['type'],
        data(){
            return{
                typeData: this.type
            }
        },
        updated(){
            
        },
        methods: {
            login_cancel(){
                this.$parent.$data.type = false;
            }
        },
        computed: {
            
        }
    }
</script>