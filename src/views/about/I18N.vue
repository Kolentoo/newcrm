<template>
  <div class="about">
    <el-button @click="changeLanguage" type="primary">中文/en</el-button>
    <p>{{ $t("info.hello") }}</p>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
  export default {
      name:'about',
      data() {
          return {
              value1: ''
          }
      },
      methods: {
          /*切换语言*/
          changeLanguage() {
            try{
                if(localStorage.lang == 'zh') {
                    this.$i18n.locale = 'en';
                    localStorage.lang = 'en';
                }  else {
                    this.$i18n.locale = 'zh';
                    localStorage.lang = 'zh';
                }
            }  catch (e) {
                console.warn(e + '当前浏览器不支持本地存储')
            }

          }
      }
  }
</script>
