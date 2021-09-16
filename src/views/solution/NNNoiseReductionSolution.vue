<template>
  <div>
    <el-carousel :interval="5000" height="500px" class="banner-wrapper">
      <el-carousel-item class="banner-item">
        <div class="banner-item-text">
          <p class="banner-item-text-title">语音降噪芯片</p>
          <p class="banner-item-text-content">支持多噪声类型及非稳态噪声，可实现全方位、多场景降噪</p>
        </div>
        <el-image
          :src="require('@/assets/img/carousel_2.png')"
        />
      </el-carousel-item>
    </el-carousel>
    <!--介绍-->
    <el-row class="chip-desc-wrapper">
      <el-col span="24">
        <el-image :src="require('@/assets/img/QZlVXclXQ-mqikaMvePz6w.jpg')"/>
      </el-col>
      <el-col span="24">
        <el-divider>关键特性</el-divider>
        <ul>
          <li>内置2M flash,支持USB、DAC输出</li>
          <li>搭载POROSVOC单麦DNN神经网络降噪算法（固件版本A）</li>
          <li>搭载POROSVOC AEC回声消除算法（仅固件版本B）</li>
          <li>支持多噪声类型及非稳态噪声，可实现全方位、多场景降噪。</li>
          <li>芯片封装：QFN32（5mm x 5mm）</li>
        </ul>
      </el-col>
      <el-col span="24">
        <el-divider>应用场景</el-divider>
        <el-col :span="8" class="chip-desc-item">
          <el-card class="chip-desc-card" shadow="none">
            <el-image :src="require('@/assets/img/6JPuJix8QqiY6gVvrZMzpw.jpg')"/>
            <h2>教育平板</h2>
            <div>
              <p>基于双麦克定向拾音及深度学习降噪算法实时目标人声和背景噪声的分离，提取清晰人声，在多种噪音场景下高达30db噪声抑制性能,大大提升平板产品在更杂噪声场景下的语音交互效果，精雕细琢，行业领先。</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8" class="chip-desc-item">
          <el-card class="chip-desc-card" shadow="hover">
            <el-image :fit="cover" :src="require('@/assets/img/BqG2ol9dSP2O6FZsgaEpag.jpg')"/>
            <h2>智能手机</h2>
            <div>
              <p>在手机手持和免提通话场景下,基于深度学习技术,实现人声和背景噪声的实时分离,提取清晰人声，让用户即使在强噪音的环境下，也能体验到清晰流畅的音视频通话。</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8" class="chip-desc-item">
          <el-card class="chip-desc-card" shadow="hover">
            <el-image :src="require('@/assets/img/2Z9OyphCQiecPcwmyLCc0g.jpg')"/>
            <h2>蓝牙耳机</h2>
            <div>
              <p>基于深度学习的降噪算法实时分高人声和背景噪声,提取清晰人声能够大大提升蓝牙耳机佩戴者在地铁、商场、马路等各类噪声环境下的通话清晰度。</p>
            </div>
          </el-card>
        </el-col>
      </el-col>
      <el-col span="24">
        <el-divider>应用案例</el-divider>
        <el-image :src="require('@/assets/img/VfKCD-1cRuCphXJ4EamAfg.jpg')"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NNNoiseReductionSolution'
}
</script>

<style scoped>

  .banner-wrapper{
    overflow: hidden
  }
  .banner-item> div{
    width: 100%;
  }
  .banner-item-text{
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 999;
    color: #ffffff;
    text-align: center;
  }
  .banner-item-text-title{
    margin-top: 10%;
    font-size: 40px;
  }
  .banner-item-text-content{
    font-size: 20px;
  }
  .chip-desc-wrapper{
    height: auto;
    align-content: center;
    text-align: center;
    margin: 50px 100px;
  }
  .chip-desc-wrapper ul{
    font-size: 20px;
    color: #5a5e66;
    text-align: left;
  }
  .chip-desc-wrapper li{
    margin-bottom: 10px;
  }
  .chip-desc-item{
    align-content: center;
    text-align: center;
    height: auto;
  }
  .chip-desc-card{
    align-content: center;
    text-align: left;
    margin: 0 20px;
    min-height: 400px;
    color: #5a5e66;
    display: inline-block;
  }
  .chip-desc-card h2 {
    text-align: center;
  }
  .chip-desc-card:hover{
    color: #ff0000;
  }
  .chip-desc-card-left{
    width: 400px;
    height: 100%;
  }
  .chip-desc-card-right {
    padding-left: 40px;
  }
  .chip-desc-card-right h2 {
    font-size: 25px;
    text-align: center;
  }
  .chip-desc-card-content p{
    text-align: left;
    font-size: 15px;
  }
  .el-divider{
    margin-bottom: 50px !important;
  }
  .el-divider__text{
    font-size: 30px;
  }
</style>
