<template>
  <el-menu class="navbar" mode="horizontal">
    <!-- <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/> -->
    <!-- <breadcrumb /> -->
    <el-button type="primary" class="change-school">切换校区</el-button>
    <div class="icon-group">
      <i class="icon icon-help"></i>
      <i class="icon icon-xx"></i>
    </div>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <span class="avatar-info">
          <span class="user-name">Kolento</span>
          <i class="icon-down icon"/>
        </span>
        <img :src="userpic" class="user-avatar">
        
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            Home
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span style="display:block;" @click="logout">LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  data(){
    return{
        userpic:'./images/userpic.png'
    }
  },
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    // toggleSideBar() {
    //   this.$store.dispatch('ToggleSideBar')
    // },
    // logout() {
    //   this.$store.dispatch('LogOut').then(() => {
    //     location.reload() // 为了重新实例化vue-router对象 避免bug
    //   })
    // }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.change-school {width: 155px;height: 35px;background: #3b89ff;padding: 0;}
.icon-group {display: inline-block;}
.icon {display: inline-block;width: 24px;height: 24px;vertical-align: middle;}
.icon-help {background: url('./images/icon-help.png') no-repeat;}
.icon-xx {background: url('./images/icon-xx.png') no-repeat;}
.icon-down {background: url('./images/icon-down.png') no-repeat;height: 10px;}

.user-name {color: #4d4f5c;font-size: 14px;}
.avatar-info {display: inline-block;}

.navbar {height: 80px;line-height: 80px;box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);}

.hamburger-container {line-height: 58px;height: 50px;float: left;padding: 0 10px;}
.screenfull {position: absolute;right: 90px;top: 16px;color: red;}
.avatar-container {height: 80px;display: inline-block;position: absolute;right: 35px;}
.avatar-wrapper {cursor: pointer;margin-top: 20px;position: relative;line-height: initial;}
.user-avatar {width: 42px;height: 42px;border-radius: 50%;}
.el-icon-caret-bottom {position: absolute;right: -20px;top: 25px;font-size: 12px;}


</style>

