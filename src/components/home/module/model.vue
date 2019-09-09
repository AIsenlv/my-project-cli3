<template>
    <div class="model-cen" v-if="show">
        <div class="cen">
            <div class="txt">{{txt}}</div>
            <div class="btn" @click="success">确定</div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        //是否显示
        show:{
            type:Boolean,
            defaule:false
        },
        //提示的文字
        txt:{
            type:String,
            defaule:''
        }
    },
    methods:{
        //确定的回调方法
        success(){
            this.$emit('success')
        }
    }
}
</script>
<style lang="less">
.model-cen{
    background: rgba(0, 0, 0, 0.625);
    width: 100%;
    height: 100vh;
    top: 0;
    left:0;
    position: fixed;
    .cen{
        width:76%;
        height: 1.78rem;
        background: url(../../../assets/bg.png)no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top:50%;
        left: 50%;
        margin:-0.98rem  0 0 -38%;
        z-index: 9;
        .txt{
            font-size: 0.18rem;
            color: #fff;
            margin: 0.4rem  auto; 
            text-align: center;
            width: 95%;
        }
        .btn{
            width:1.1rem;
            height:0.32rem;
            border-radius: 0.2rem;
            text-align: center;
            line-height: 0.32rem;
            margin: 0 auto;
            background: #34f6c3;

        }
    }
    
}   
</style>