<template>
  <el-container>
    <el-header id="header">
      <div class="header-nav">
        <!-- 导航logo -->
        <div class="header-nav-logo">
          <a href="/">
            <el-image :src="require('@/assets/img/bls_dev_logo.png')"/>
          </a>
<!--          <img src="@/assets/img/bls_dev_logo.png" >-->
        </div>
        <!-- 导航菜单 -->
        <el-menu
          :default-active="activeIndex2"
          class="header-nav-menu"
          mode="horizontal"
          background-color="#303030"
          text-color="#ffffff"
          active-text-color="#ff0000"
          router
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template slot="title">解决方案</template>
            <el-menu-item index="/solution/srs">超低功耗离线语音识别芯片</el-menu-item>
            <el-menu-item index="/solution/nnnrs">语音降噪芯片</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">我的应用</el-menu-item>
          <el-menu-item index="3">文档中心</el-menu-item>
          <el-menu-item index="4">FAQ</el-menu-item>
        </el-menu>
        <!-- 用户 -->
        <el-menu
          class="header-nav-user"
          mode="horizontal"
          background-color="#303030"
          text-color="#ffffff"
          active-text-color="#ff0000"
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template slot="title">登录用户名</template>
            <el-menu-item index="1-1">完善资料</el-menu-item>
            <el-menu-item index="1-2">修改密码</el-menu-item>
            <el-menu-item index="1-3">退出登录</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">登录</el-menu-item>
          <el-menu-item index="3">注册</el-menu-item>
        </el-menu>
      </div>
    </el-header>
    <el-main id="main">
      <app-main />
    </el-main>
    <el-footer id="footer">
      <el-row class="footer-wrapper">
        <el-col span="6">
          <h4>帮助</h4>
          <p>
            <a>新手指南</a>
          </p>
          <p>
            <a>SDK开发指南</a>
          </p>
          <p>
            <a>常见问题</a>
          </p>
        </el-col>
        <el-col span="6">
          <h4>应用</h4>
          <p>
            <a>添加应用</a>
          </p>
          <p>
            <a>我的应用</a>
          </p>
        </el-col>
        <el-col span="6">
          <h4>资源</h4>
          <p>
            <a>SDK下载</a>
          </p>
        </el-col>
        <el-col span="6">
          <h4>联系</h4>
          <p>电话：0755-23762575</p>
          <p>邮箱：poros@szporos.com</p>
          <p>地址：深圳市龙华区清龙路6号港之龙商务中心C座908</p>
        </el-col>
        <p class="copy">Copyright &copy; 2021 - 2021 公司名称公司名称</p>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
import AppMain from '@/layout/components/AppMain'
export default {
  name: 'Index',
  components: { AppMain },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  #header{
    position:fixed;
    z-index: 999;
    width: 100%;
    background: #303030;
    transition: all ease 0.6s;
  }
  /* 导航栏 */
  #header .header-nav {
    height: 100%;
    width: 95%;
  }
  /* 导航栏logo */
  #header .header-nav .header-nav-logo {
    width: 300px;
    height: 100%;
    float: left;
    position: relative;
  }
  /* 导航栏logo图片 */
  #header .header-nav .header-nav-logo .el-image {
    width: 240px;
    height: 60px;
    position: absolute;
    float: left;
  }
  /* 导航菜单 */
  #header .header-nav .header-nav-menu {
    line-height: 60px;
    float: left;
    margin: 0;
    max-width: 800px;
    background: #303030;
  }
  /* 导航菜单 */
  #header .header-nav .header-nav-user {
    line-height: 60px;
    float: right;
    margin: 0;
    background: #303030;
  }

  #main{
    padding: 0;
  }

  #footer{
    background: #303030;
    height: 200px !important;
  }
  .footer-wrapper{
    color: #ffffff;
    margin-left: 100px;
    margin-right: 100px;
  }
  .footer-wrapper a:hover{
    color: #ff0000;
  }
  .copy{
    text-align: center;
    font-size: 15px;
  }
  .el-menu.el-menu--horizontal {
    border-color: rgba(0, 0, 0, 0);
  }
  .el-menu--horizontal>.el-menu-item:hover {
    background-color: #262626 !important;
  }
</style>
