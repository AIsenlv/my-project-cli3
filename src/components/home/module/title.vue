<template>
  <div class="cen-title">
    <div class="s"><img src="./fan.svg" alt="" @click="black"></div>
    <div class="t">{{title}}</div>
  </div>
</template>
<script>
export default {
  props:{
    //头部标题文字
    title:{
      type:String,
      default:''
    }
  },
  methods:{
    black(){
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="less" scoped>
  @import url("../../../style/theme.less");
  .cen-title{
    display: flex;
    justify-content: space-between;
    .s{
      color: @fff;
      vertical-align: middle;
      img{
         width: 0.25rem;
      }
    }
    .t{
      color: @fff;
      vertical-align: middle;
      font-size: @fd;
    }
  }
</style>