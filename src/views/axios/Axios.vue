<template>
    <div class="axios">
        <h1>This is an axios page</h1>
        <el-button @click="axiosGetHandle">axios GET 测试</el-button>
        <el-button @click="axiosPostHandle">axios POST 测试</el-button>
    </div>
</template>
<script>
    export default {
        name: 'axios',
        methods: {
            axiosGetHandle() {
                this.axios.get('/todos/1').then((response)=>{
                    console.log(response);
                }).catch((response)=>{
                    console.log(response);
                })

            },
            axiosPostHandle() {
                this.axios.get('/posts').then((response)=>{
                    console.log(response);
                }).catch((response)=>{
                    console.log(response);
                })

            }
        }
    }
</script>
