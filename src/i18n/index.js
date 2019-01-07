import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import zh from './zh'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from 'element-ui/lib/locale/lang/en'

Vue.use(VueI18n)

const messages = {
    en: {
        ...en,
        ...enLocale
    },
    zh: {
        ...zh,
        ...zhLocale
    }
}

/*判断浏览器是否支持本地存储，并读取存储的值 如果不设置中英文，默认中文*/
let langNow;
try{
    if(localStorage.lang) {
        langNow = localStorage.lang;
    }
}  catch (e) {
    console.warn(e + '当前浏览器不支持本地存储')
}

const i18n = new VueI18n({
    locale: langNow || 'zh',
    messages
});

export default i18n

