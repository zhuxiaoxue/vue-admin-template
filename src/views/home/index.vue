<template>
  <div>
    <!--轮播图-->
    <el-carousel :interval="5000" height="500px" class="banner-wrapper">
      <el-carousel-item class="banner-item">
        <div class="banner-item-text">
          <p class="banner-item-text-title">超低功耗语音识别芯片</p>
          <p class="banner-item-text-content">支持多噪声类型及非稳态噪声，可实现全方位、多场景降噪</p>
        </div>
        <el-image
          :src="require('@/assets/img/carousel_1.png')"
        />
      </el-carousel-item>
      <el-carousel-item class="banner-item">
        <div class="banner-item-text">
          <p class="banner-item-text-title">语音降噪芯片</p>
          <p class="banner-item-text-content">支持多噪声类型及非稳态噪声，可实现全方位、多场景降噪</p>
        </div>
        <el-image
          :src="require('@/assets/img/carousel_2.png')"
        />
      </el-carousel-item>
      <el-carousel-item class="banner-item">
        <div class="banner-item-text">
          <p class="banner-item-text-title">TTS合成芯片</p>
          <p class="banner-item-text-content">支持多噪声类型及非稳态噪声，可实现全方位、多场景降噪</p>
        </div>
        <el-image
          :src="require('@/assets/img/carousel_3.png')"
        />
      </el-carousel-item>
    </el-carousel>
    <!--引导-->
    <el-row
      class="use-step-wrapper">
      <el-col :span="5">
        <div class="use-step-item">
          <span style="font-size: 30px">如何使用</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="use-step-item">
          <i class="el-icon-user"></i>
          <span>注册用户</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="use-step-item">
          <i class="el-icon-edit"></i>
          <span>创建产品</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="use-step-item">
          <i class="el-icon-setting"></i>
          <span>应用配置</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="use-step-item">
          <i class="el-icon-download"></i>
          <span>SDK下载</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="use-step-item">
          <i class="el-icon-cpu"></i>
          <span>烧录运行</span>
        </div>
      </el-col>
    </el-row>
    <!--核心技术-->
    <el-row class="core-tec-wrapper">
      <el-divider>核心技术</el-divider>
      <el-col :span="6" class="core-tec-item">
        <el-card class="core-tec-card" shadow="hover">
          <el-image :src="require('@/assets/img/ic_nn.png')"/>
          <h2>NN降噪</h2>
          <div><p>基于计算听觉场景分析理论,应用深度学习技术,能够在不依赖任何硬件的基础上,实时将人声与噪音分离,有效抑制环境中的各种噪音</p></div>
        </el-card>
      </el-col>
      <el-col :span="6" class="core-tec-item">
        <el-card class="core-tec-card" shadow="hover">
          <el-image :src="require('@/assets/img/ic_tts.png')"/>
          <h2>TTS合成</h2>
          <div><p>目前可提供中英语言合成,音色自然流畅</p></div>
        </el-card>
      </el-col>
      <el-col :span="6" class="core-tec-item">
        <el-card class="core-tec-card" shadow="hover">
          <el-image :src="require('@/assets/img/ic_echo.png')"/>
          <h2>回声消除</h2>
          <div><p>回声消除抑制量达到45dB</p></div>
        </el-card>
      </el-col>
      <el-col :span="6" class="core-tec-item">
        <el-card class="core-tec-card" shadow="hover">
          <el-image :src="require('@/assets/img/ic_wake.png')"/>
          <h2>低功耗唤醒</h2>
          <div><p>轻量级、 资源占用极低，可自定义设置多个唤醒词</p></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index'
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
  .use-step-wrapper{
    height: 70px;
    background: #3d3d3d;
    text-align: center;
    vertical-align: middle;
  }
  .use-step-wrapper div{
    height: 100%;
  }
  .use-step-item{
    width: 100%;
    color: #ffffff;
    display: inline-block;
    text-align: center;
    line-height: 70px;
  }
  .use-step-item span {
    margin-left: 10px;
    margin-right: 30px;
  }
  .core-tec-wrapper ,.app-field-wrapper{
    height: auto;
    align-content: center;
    text-align: center;
    margin: 50px 100px;
  }
  .core-tec-item{
    align-content: center;
    text-align: center;
    height: auto;
  }
  .core-tec-card {
    align-content: center;
    text-align: center;
    margin: 0 50px;
    min-height: 400px;
    color: #5a5e66;
  }
  .core-tec-card:hover{
    color: #ff0000;
  }
  .el-divider{
    margin-bottom: 50px !important;
  }
  .el-divider__text{
    font-size: 30px;
  }
</style>
