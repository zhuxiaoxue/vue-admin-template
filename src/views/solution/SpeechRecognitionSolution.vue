<template>
  <div>
    <el-carousel :interval="5000" height="500px" class="banner-wrapper">
      <el-carousel-item class="banner-item">
        <div class="banner-item-text">
          <p class="banner-item-text-title">超低功耗语音识别芯片</p>
          <p class="banner-item-text-content">支持多噪声类型及非稳态噪声，可实现全方位、多场景降噪</p>
        </div>
        <el-image
          :src="require('@/assets/img/carousel_1.png')"/>
      </el-carousel-item>
    </el-carousel>
    <!--介绍-->
    <el-row class="chip-desc-wrapper">
      <el-col span="24">
        <el-image :src="require('@/assets/img/6Xk0KmPtQqie2M-U5DG4eQ.jpg')"/>
      </el-col>
      <el-col span="24">
        <el-divider>关键特性</el-divider>
        <ul>
          <li>单麦克风，支持2～5m远场识别</li>
          <li>POROSVOC领先的TDNN本地命令词识别，支持50条，可快速定制</li>
          <li>支持待唤醒状态超低功耗待机（待唤醒）：低于1mW</li>
          <li>内置flash、晶振,外围简单，支持主控UART通信、I2C通信以及PWM 输出信号</li>
          <li>芯片封装：QFN20-3x3mm，工作温度：-20°C到 85°C</li>
        </ul>
      </el-col>
      <el-col span="24">
        <el-divider>应用场景</el-divider>
        <el-col :span="8" class="chip-desc-item">
          <el-card class="chip-desc-card" shadow="hover">
            <el-image :src="require('@/assets/img/hVx3L-JCTvmM6KAzoJ4TVg.png')"/>
            <h2>智能家居</h2>
            <div>
              <p>家庭环境3 ~ 5米远场拾音,高精度识别,快速响应</p>
              <p>标准化方案模块和接口</p>
              <p>可快速出货</p>
              <p>产品接入流程标准化</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8" class="chip-desc-item">
          <el-card class="chip-desc-card" shadow="hover">
            <el-image :fit="cover" :src="require('@/assets/img/XufNAkFUQAm-3xMrgVVf1g.png')"/>
            <h2>智能家电</h2>
            <div>
              <p>支持家居环境下的远场识别</p>
              <p>可应用于纯离线场景以及纯离线+IOT控制场景</p>
              <p>标准化的方案模块和硬件接口</p>
              <p>待机功耗达到家电行业的标准</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8" class="chip-desc-item">
          <el-card class="chip-desc-card" shadow="hover">
            <el-image :src="require('@/assets/img/vOFHalmwTGOalSOV2IfOqQ.png')"/>
            <h2>智能照明</h2>
            <div>
              <p>家庭环境3 ~ 5米远场拾音,高精度识别,快速响应</p>
              <p>支持产品控制场景自定义</p>
              <p>提供标准化硬件模块以及接口</p>
              <p>语音控制场景切换、色温和亮度</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8" class="chip-desc-item">
          <el-card class="chip-desc-card" shadow="hover">
            <el-image :src="require('@/assets/img/I7wMzHb4SYyq1V37FPtOJw.png')"/>
            <h2>智能音响</h2>
            <div>
              <p>家庭环境3 ~ 5米远场拾音,高精度识别,快速响应</p>
              <p>支持双麦降噪及回声消除</p>
              <p>支持离在线混合识别，音乐场景全双工</p>
              <p>支持对接IOT平台</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8" class="chip-desc-item">
          <el-card class="chip-desc-card" shadow="hover">
            <el-image :src="require('@/assets/img/kcIds8bESry3B2x8mYiuEQ.png')"/>
            <h2>智能卫浴</h2>
            <div>
              <p>针对浴室场景的去混响算法</p>
              <p>提供标准化硬件模块以及接口</p>
              <p>支持快速量产出货</p>
              <p>提供模块防水解决方案</p>
            </div>
          </el-card>
        </el-col>
      </el-col>
      <el-col span="24">
        <el-divider>应用案例</el-divider>
        <el-image :src="require('@/assets/img/GAIM6LZoShCrK7JVz0In6g.jpg')"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SpeechRecognitionSolution'
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
