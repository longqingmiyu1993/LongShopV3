<template>
  <div>
    我的
    <shopTarbar v-bind:active="4" /></shopTarbar>
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
