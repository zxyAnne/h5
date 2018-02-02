<template>
    <div class="footer">
        <div class="footer-item-box" v-for="item in footer_data">
            <router-link :to="item.path">
                <div :class="item.name == '送福' ? 'footer-item-mid' : ''"><img v-if="item.name != '送福'" :src="item.img_url"></img>
                </div>
                <div class="footer-item-name"><span>{{item.name}}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style type="text/sass" lang="scss" scoped>
    .footer{
        width: 100%;
        height: 54px;
        position: fixed;
        bottom: 0;
        background-color: white;
        display: flex;
        justify-content: space-around;
        &-item-box{
            padding-top: 7px;
            font-size: 12px;
            color: rgba(0,0,0,0.54);
            img{
                width: 24px;
                height: 24px;
            }
        }
        &-item-name{
            line-height: 1.5;
        }
        &-item-mid{
            height: 27px;
            position: relative;
        }
        &-item-mid:before{
            content: '';
            width: 58px;
            height: 58px;
            position: absolute;
            top: -130%;
            left: -65%;
            background-image: url('../assets/img/footer_mid.png');
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
</style>

<script>
    var footer_data = [
        { 'name': '抽奖', 'path': '', 'img_url': 'static/img/footer_2.png'},
        { 'name': '问答', 'path': '', 'img_url': 'static/img/footer_0.png'},
        { 'name': '送福', 'path': '/send', 'img_url': 'static/img/footer_mid.png'},
        { 'name': '圈子', 'path': '', 'img_url': 'static/img/footer_1.png'},
        { 'name': '智咖', 'path': '', 'img_url': 'static/img/footer_8.png'}
    ]

    export default {
        name: 'footer-html',
        data(){
            return {
                footer_data: footer_data
            }
        },
        methods: {
            
        }
    }
</script>