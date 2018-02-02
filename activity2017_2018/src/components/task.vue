<template>
    <div class="task">
        <h1>task</h1>
        <button @click="to_login()">登录</button>
        <button @click="to_reward()">奖励</button>
        <alert :type="type"></alert>
    </div>
</template>

<style type="text/sass" lang="scss" scoped>
    .task{
        height: 170px;
        border: solid 1px white;
        h1{
            text-align: center;
        }
    }
</style>

<script>
    import alert from '@/components/alert'

    export default {
        name: 'task',
        data(){
            return{
                type: false,
            }
        },
        methods: {
            to_login(){
                this.type = 'isLogin';
            },
            to_reward(){
                this.type = 'isReward';
            }
        },
        components: {
            alert,
        }
    }
</script>