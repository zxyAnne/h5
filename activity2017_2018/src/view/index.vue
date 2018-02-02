<template>
    <div class="index">
        <div class="index-banner">
        </div>
        <task></task>
        <reward></reward>
        <router-link to="/info">说明</router-link>
        <qa></qa>
        <footer-html></footer-html>
    </div>
</template>

<style>
</style>

<script>
    import task from '@/components/task'
    import reward from '@/components/reward'
    import qa from '@/components/qa'
    import footerHtml from '@/components/footer'

    import '../assets/css/index.scss'

    export default {
        name: 'index',
        data(){
            return{

            }
        },
        beforeCreate(){
            configData.setTitle('跨年狂欢');
        },
        components: {
            task,
            reward,
            qa,
            footerHtml
        }
    }
</script>