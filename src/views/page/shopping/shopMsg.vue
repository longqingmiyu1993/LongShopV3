<template>
  <div>
    消息
    <shopTarbar v-bind:active="2" /></shopTarbar>
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
