<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data(){
      return{
        
      }
  },
  mounted(){
    this.get_data_func();
  },
  methods: {
    get_data_func(){
          axios.get('http://lz.mindcherish.com/v1/user_binding/get').then(function(res){
              console.log(res);
          });
      }
  }
}
</script>

<style>

</style>
