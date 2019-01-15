<template>
    <div class="login-box" id="login-box">
        <div class="login-con clearfix">
            <div class="login fr">
                <p class="p1 tc">登录</p>

                <div class="inputbox">
                    <el-input class="user" prefix-icon="icon-user icon" placeholder="账号" v-model="user" clearable>
                    </el-input>
                </div>
                
                <div class="inputbox">
                    <el-input class="psd" prefix-icon="icon-psd icon" placeholder="密码" v-model="psd" type="password" clearable>
                    </el-input>
                </div>

                <div class="option clearfix">
                    <div class="auto-login fl">
                        <el-checkbox v-model="autologin">自动登录</el-checkbox>
                    </div>
                    <span class="forget fr">忘记密码</span>
                </div>

                <el-button type="primary">登录</el-button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                user:'',
                psd:'',
                autologin:false
            }
        }
    }
</script>

<style>
    .login-box {background:url('./images/login.jpg') no-repeat center center;height: 100vh;width: 100vw;}
    .login-con {width: 1450px;margin:0 auto;}
    .login {background: #fff;width: 500px;box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.1);border-radius: 12px;
    padding:40px 40px 100px;margin-top: 20vh;}
    .login .p1 {font-size: 36px;color: #43425d;margin:0 0 45px 0;}
    .login .el-input__inner {height: 55px;line-height: 55px;font-size: 16px;}

    .inputbox {margin-bottom: 30px;}
    .icon {display: inline-block;vertical-align: middle;margin:15px 0 0 0;}
    .icon-user {background: url('./images/icon-user.png') no-repeat;width: 24px;height: 24px;}
    .icon-psd {background: url('./images/icon-psd.png') no-repeat;width: 24px;height: 24px;}

    .option {font-size: 18px;}
    .option .forget {color: #3b86ff;}
    .option .el-checkbox__label {font-size: 18px;}
    .option .el-checkbox__inner {width: 18px;height: 18px;margin-top: -2px;}
    .option .el-checkbox__inner::after {height: 10px;left: 6px;}

    .el-input__inner {border-bottom: 1px solid #e9e9f0;}
    .el-button--primary {height: 55px;width: 100%;font-size: 18px;margin-top: 40px;background: #3b86ff;}

</style>


