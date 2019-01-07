module.exports = {
    css: {
        loaderOptions: {
            sass: {
                //配置全局scss变量
                data: `@import "@/assets/css/mixin/mixin.scss";`
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://jsonplaceholder.typicode.com/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
