<template>
  <div>
    分类
    <shopTarbar v-bind:active="1" /></shopTarbar>
  </div>
</template>

<script>
import shopTarbar from "./shopTarbar.vue";
export default {
  components:{
    shopTarbar
  },
  data(){
    return {
      active:4,
    };
  },

  created(){

  },

  methods:{
  },


}


</script>
