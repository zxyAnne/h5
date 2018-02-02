<template>
    <div class="gift">
        <div v-show="1" class="gift-null">
            <img src="static/img/gift_null.png"></img>
            <p>抱歉，暂未获得任何奖品</p>
            <p>你可通过完成每日任务获取抽奖券抽奖</p>
            <router-link class="gift-null-back-btn" to="/">回首页，做任务</router-link>
        </div>
    </div>
</template>

<style type="text/sass" lang="scss" scoped>
</style>

<script>
    import '../assets/css/gift.scss'

    export default {
        name: 'gift',
        data(){
            return {

            }
        },
        beforeCreate(){
            configData.setTitle('我的奖品');
        }
    }
</script>