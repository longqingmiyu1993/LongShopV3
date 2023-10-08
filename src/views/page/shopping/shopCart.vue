<template>
  <div>
    购物车
    <shopTarbar v-bind:active="3" ></shopTarbar>
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
