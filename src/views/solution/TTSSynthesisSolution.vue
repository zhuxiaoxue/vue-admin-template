<template>
  <div>
    <el-carousel :interval="5000" height="500px" class="banner-wrapper">
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
  </div>
</template>

<script>
export default {
  name: 'TTSSynthesisSolution'
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
</style>
