<template>
  <div class="cen-title">
    <div class="s"><img src="./fan.svg" alt="" @click="black"></div>
    <div class="t" :class="type && 'centers'">{{title}}</div>
  </div>
</template>
<script>
export default {
  props:{
    //头部标题文字
    title:{
      type:String,
      default:''
    },
    //控制title 位置 2 居中
    type:{
      type:Boolean,
      default:false
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
    margin-top: 0.1rem;
    .s{
      color: @fff;
      vertical-align: middle;
      position: relative;
      z-index: 100;
      img{
         width: 0.22rem;
      }
    }
    .t{
      color: @fff;
      vertical-align: middle;
      font-size: @fd;
    }
    .centers{
      position: absolute;
      width: 100%;
      display: flex;
      align-items: center;
      left: 0;
      top: 0.3rem;
      text-align: center;
      justify-content: center;
      z-index: 98;
    }
  }
</style>