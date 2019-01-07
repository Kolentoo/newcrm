<template>
    <div class="header">
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1">
                <router-link tag="li" to="/">首页</router-link>
            </el-menu-item>
            <!--<el-submenu index="2">-->
                <!--<template slot="title">多级菜单</template>-->
                <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
                <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
                <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
                <!--<el-submenu index="2-4">-->
                    <!--<template slot="title">选项4</template>-->
                    <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
                    <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
                    <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
                <!--</el-submenu>-->
            <!--</el-submenu>-->
            <!--<el-menu-item index="3" disabled>禁用</el-menu-item>-->
            <el-menu-item index="4">
                <router-link tag="li" to="/about">i18n</router-link>
            </el-menu-item>
            <el-menu-item index="5">
                <router-link tag="li" to="/axios">axios</router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>


<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>


<style scoped lang="scss">

</style>
