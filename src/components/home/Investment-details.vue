<template>
    <div class="page">
        <div class="cen">
             <Title title='投资共识星球'  :type="true"/>
        </div>
    </div>
</template>
<script>
import Title from './module/title.vue'
export default {
  components:{
    Title
  },
}
</script>
<style lang="less" scoped>
    @import './style/Investment-details.less';
</style>