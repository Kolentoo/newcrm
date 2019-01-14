<template>
    

    <div class="article">
        <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="标题">
            <el-input size="small" v-model="form.name" placeholder="标题"></el-input>
        </el-form-item>
        <el-form-item label="审批人">
            <el-input size="small" v-model="form.user" placeholder="审批人"></el-input>
        </el-form-item>

        <el-row type="flex" class="row-bg allinput" justify="space-around">
            <el-col :span="8">            
                <el-form-item label="状态">
                    <el-select size="small" v-model="selectone" placeholder="请选择">
                        <el-option v-for="(item,index) in selectbox1" :key="index" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="8">            
                <el-form-item label="类别">
                    <el-select size="small" v-model="selecttwo" placeholder="请选择">
                        <el-option v-for="(item,index) in selectbox2" :key="index" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>            
            <el-col :span="8">            
                <el-form-item label="属性">
                    <el-select size="small" v-model="selectthree" placeholder="请选择">
                        <el-option v-for="(item,index) in selectbox3" :key="index" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row type="flex" class="row-bg allinput" justify="space-around">
            <el-col :span="8">            
                <el-form-item label="点击量">
                    <el-input size="small" v-model="form.read" placeholder=""></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">            
                <el-form-item label="来源">
                    <el-input size="small" v-model="form.source" placeholder=""></el-input>
                </el-form-item>
            </el-col>          
            <el-col :span="8">            
                <el-form-item label="标签名">
                    <el-input size="small" v-model="form.tag" placeholder=""></el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <el-form-item label="创建时间">
            <el-col>
                <el-date-picker size="small" type="date" placeholder="选择日期" v-model="form.datetime" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="其他复选">
            <el-checkbox-group v-model="form.othercheck">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="其他单选">
            <el-radio-group v-model="form.otherradio">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
            <el-input size="small" type="textarea" v-model="form.desc"></el-input>
        </el-form-item>

        <el-form-item label="上传图片">
            <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </el-form-item>

        <div class="quillbox">
            <p class="article-head">文章内容</p>
            <quill class="quillcon"></quill>
        </div>

        <el-form-item class="btn-group">
            <el-button size="small" type="primary" @click="onSubmit">立即创建</el-button>
            <el-button size="small">取消</el-button>
        </el-form-item>



        </el-form>
    </div>

</template>

<script>
    import quill from '@/components/quill/quill'
  export default {
    data() {
      return {
        form: {
          name: '',
          user: '',
          read: '',
          source: '',
          tag: '',
          datetime: '',
          othercheck: '',
          otherradio: '',
          desc:''
        },
        selectbox1:[{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        selectbox2:[{
          value: '选项1',
          label: '黄金糕11'
        }, {
          value: '选项2',
          label: '双皮奶11'
        }, {
          value: '选项3',
          label: '蚵仔煎11'
        }, {
          value: '选项4',
          label: '龙须面11'
        }, {
          value: '选项5',
          label: '北京烤鸭11'
        }],
        selectbox3:[{
          value: '选项1',
          label: '黄金糕2222'
        }, {
          value: '选项2',
          label: '双皮奶222'
        }, {
          value: '选项3',
          label: '蚵仔煎222'
        }, {
          value: '选项4',
          label: '龙须面222'
        }, {
          value: '选项5',
          label: '北京烤鸭2222'
        }],
        selectone:'',
        selecttwo:'',
        selectthree:'',

        //图片上传
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
    },
    components:{
        quill
    }
  }
</script>

<style scoped>

    .allinput .el-select {width: 60%;}
    .allinput .el-input {width: 60%;}
    .article {padding: 20px;}
    .quillbox {margin-top: 50px;}
    .article-head {color:#606266;font-size: 14px;}
    .quillcon {height: 370px;}
    .btn-group {margin-top: 50px;}
      
</style>
