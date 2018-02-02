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

<script>
    import '../assets/css/alert.scss'
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