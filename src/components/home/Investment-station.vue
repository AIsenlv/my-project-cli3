<template>
  <div class="page">
    <div class="cen">
        <Title title='投资记录'/>
        <div class="img">
          <img src="../../assets/logo.png" alt="">
        </div>
        <div class="title">共识星球全球投资站</div>
        <div class="xiaz">
          <div class="left-img"><img src="../../assets/pdf.png" alt=""></div>
          <div class="right-txt">点此阅读融币白皮书</div>
        </div>
        <div class="text">
          <div class="t">投资CXC获得共识星球代币CPC</div>
          <div class="t">双回购方案促进CPC持续上涨</div>
        </div>
        <div class="text">
          <div class="c">募资所得CXC挖矿收益用于回购CPC</div>
          <div class="c">直播打赏CXC的30%用于回购CPC</div>
        </div>
        <div class="text">
          <div class="y">CPC为共识星球在CXC公链上发行的代币，</div>
          <div class="y">相当于共识星球的数字股权，完成融币即上交易所</div>
        </div>
        <div class="cen-model">
          <div class="top">
            <div class="list">
              <div class="to">CPC总量</div>
              <div class="mis">10亿</div>
            </div>
            <div class="line"></div>
            <div class="list">
              <div class="to">本次融币释放</div>
              <div class="mis">10亿</div>
            </div>
            <div class="line"></div>
            <div class="list">
              <div class="to">CXC用户空投</div>
              <div class="mis">10亿</div>
            </div>
            <div class="line"></div>
            <div class="list">
              <div class="to">投1CXC可得</div>
              <div class="mis">980CPC</div>
            </div>
          </div>
          <div class="label-text">投资进度</div>
          <div class="jindu">
            <div class="ul">
              <div class="li li1" :style="{width:win1+'%'}"></div>
              <div class="li li2" :style="{width:win2+'%'}"></div>
              <div class="li li3" :style="{width:win3+'%'}"></div>
            </div>
            <div class="tis-cens" :style="{left:Number(win1)+Number(win2)+Number(win3)+'%'}">
              <div class="txtt">{{Number(win1)+Number(win2)+Number(win3)+'%'}}</div>
              <div class="linet"></div>
            </div>
            <div class="yuan">{{Number(win1)+Number(win2)+Number(win3)+'%'}}</div>
          </div>
          <div class="hzongs">
            <div class="lut">
              <div class="lis">
                <div class="lt la"></div>
                <div class="t">机构份额</div>
              </div>
              <div class="lis">
                <div class="lt lb"></div>
                <div class="t">L4节点份额</div>
              </div>
              <div class="lis">
                <div class="lt lc"></div>
                <div class="t">全网用户份额</div>
              </div>
            </div>
            <div class="tis">1CXC起投，每位CID限投2000CXC</div>
          </div>
        </div>
        <div class="ul-list">
          <div class="list">
            <div class="lic la">投资CID</div>
            <div class="lic lb">投资CXC</div>
            <div class="lic lc">获得CPC</div>
          </div>
          <div class="list list-lit" v-for="item in data" :key="item.id">
            <div class="lic la">{{item.a}}</div>
            <div class="lic lb">{{item.b}}</div>
            <div class="lic lc">{{item.c}}</div>
          </div>
          <router-link tag="div" to="/investmentdetails" class="touszi">
            <img src="../../assets/btn1.png" alt=""/>
          </router-link>
         
        </div>
        
    </div>
    <div class="bottom-bg"></div>
    <model :show="show" @success="show=false" :txt="txt"/>
  </div>
</template>
<script>
import Title from './module/title.vue'
export default {
  components:{
    Title
  },
  data(){
    return{
      show:false,
      txt:'支付成功',
      win1:'40',
      win2:'20',
      win3:'10',
      data:[
        {a:'598ed876f8e5d2da90',b:'3232.322225',c:'273827.322225'},
        {a:'598ed876f8e5d2da90',b:'3232.322225',c:'273827.322225'},
        {a:'598ed876f8e5d2da90',b:'3232.322225',c:'273827.322225'},
        {a:'598ed876f8e5d2da90',b:'3232.322225',c:'273827.322225'},
        {a:'598ed876f8e5d2da90',b:'3232.322225',c:'273827.322225'},
        {a:'598ed876f8e5d2da90',b:'3232.322225',c:'273827.322225'},
        {a:'598ed876f8e5d2da90',b:'3232.322225',c:'273827.322225'},
        {a:'598ed876f8e5d2da90',b:'3232.322225',c:'273827.322225'},
        {a:'598ed876f8e5d2da90',b:'',c:''},
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  @import './style/Investment-station';
</style>