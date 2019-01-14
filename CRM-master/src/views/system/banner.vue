<template>
  <div class="app-container banner" id="banner">

    <div class="filter-container">
      <el-button size="small" class="filter-item" type="danger" icon="el-icon-delete" @click="handleDelete">删除</el-button>
      <el-button size="small" class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="dialogFormVisible = true">添加</el-button>
    </div>

    <el-table border :data="tableData" style="width: 100%" class="tablelist" @selection-change="handleSelectionChange" :show-overflow-tooltip="tooltip">
        <el-table-column label="序号" prop="id" align="center" width="65">
            <template slot-scope="scope">
                <span>{{ scope.$index+1}}</span>
            </template>
        </el-table-column>
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column label="标题" prop="title" width="300"></el-table-column>
        <el-table-column label="状态" prop="name" width="100"></el-table-column>
        <el-table-column label="类别" prop="status" width="100"></el-table-column>
        <el-table-column label="封面" width="150">
            <template slot-scope="scope">
                <img class="g10 vm" :src="scope.row.pic" alt="">
            </template>
        </el-table-column>
        <el-table-column label="点击量" prop="read" width="100"></el-table-column>
        <el-table-column label="来源" prop="source" width="100"></el-table-column>
        <el-table-column label="上篇id" prop="prev" width="80"></el-table-column>
        <el-table-column label="下篇id" prop="next" width="80"></el-table-column>
        <el-table-column label="属性" prop="status" width="100"></el-table-column>
        <el-table-column label="创建时间" prop="time"></el-table-column>
        <el-table-column align="center" label="操作">
            <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="dialogFormVisible = true">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-pagination class="pagebox" :current-page="currentPage" background layout="prev, pager, next, jumper" :total="100"></el-pagination>

    <el-dialog title="编辑轮播图" :visible.sync="dialogFormVisible" class="pop" width="30%">

        <el-form :model="picmanage" status-icon :rules="rules" ref="picmanage" label-width="100px" class="picmanage">
            <el-form-item label="标题" prop="name">
                <el-input size="small" v-model="picmanage.name" ></el-input>
            </el-form-item>
            <el-form-item label="链接" prop="link">
                <el-input size="small" v-model="picmanage.link" ></el-input>
            </el-form-item>
            <el-form-item label="打开方式" prop="opentype">
                <el-select size="small" v-model="picmanage.opentype"  placeholder="请选择">
                    <el-option v-for="(item,index) in picmanage.opentype" :key="index"  :value="item">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="排序" prop="sort">
                <el-input size="small" v-model="picmanage.sort" ></el-input>
            </el-form-item>
            <el-form-item label="过期时间">
                <el-col>
                <el-date-picker size="small" type="date" placeholder="选择日期" v-model="picmanage.date" style="width: 75%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="图片">
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

            <el-form-item label="地址" prop="address">
                <el-input size="small" v-model="picmanage.address" ></el-input>
            </el-form-item>

        </el-form>



        <div slot="footer" class="dialog-footer">
            <el-button size="small" @click="dialogFormVisible = false">取 消</el-button>
            <el-button size="small" type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
    

  </div>
</template>

<script>

export default {
  name: 'ComplexTable',
  data() {
    return {
        tableData: [{
            id:'123',
            title: '标题内容',
            name: '王小虎',
            status:'正常',
            address: '上海市普陀区金沙江路 1518 弄',
            read:1234,
            prev:1,
            next:2,
            type:'ok',
            time:'2018',
            pic:'http://xkolento.cn/static/img/item1.c842ecc.jpg'
        }, {
            id:'123',
            title: '标题内容',
            name: '王小虎',
            status:'正常',
            address: '上海市普陀区金沙江路 1517 弄',
            read:1234,
            prev:1,
            next:2,
            type:'ok',
            time:'2018',
            pic:'http://xkolento.cn/static/img/item1.c842ecc.jpg'
        }, {
            id:'123',
            title: '标题内容',
            name: '王小虎',
            status:'正常',
            address: '上海市普陀区金沙江路 1519 弄',
            read:1234,
            prev:1,
            next:2,
            type:'ok',
            time:'2018',
            pic:'http://xkolento.cn/static/img/item1.c842ecc.jpg'
        }, {
            id:'123',
            title: '标题内容',
            name: '王小虎',
            status:'正常',
            address: '上海市普陀区金沙江路 1516 弄',
            read:1234,
            prev:1,
            next:2,
            type:'ok',
            time:'2018',
            pic:'http://xkolento.cn/static/img/item1.c842ecc.jpg'
        }],
        importanceOptions: [1, 2, 3],
        typeOptions:[1,2,3,4,5],
        listQuery: {
            importance: undefined,
            title: undefined,
            type: undefined,
        },
        tooltip:true,
        currentPage:1,
        multipleSelection:[],
        dialogTableVisible: false,
        dialogFormVisible: false,

        picmanage:{
            name:'',
            link:'',
            opentype:[1,2,3,4,5],
            sort:'',
            date:'',
            address:''
        },
        rules:{

        },
        // 头像
        dialogImageUrl: '',
        dialogVisible: false
    }
  },
  created() {
        
        // this.$axios.get(`https://192.168.0.158:9090/api/values/add`, {
        //     params:{

        //     }
        // }).then((res)=> {
        //     console.log(res.data)
        // })
  },
  components:{
      
  },
  methods: {
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
    },
    handleFilter(){
        //搜索
    },
    handleCreate() {
        // 添加
        this.$router.push('article');
    },
    handleEdit(){
        //编辑
        this.$router.push('article');
    },
    handleDelete(index,row) {
        // 删除
        //需要后台交互，删除的同时后台接口返回相应的数据
        this.$notify({
            title: '成功',
            message: '删除成功',
            type: 'success',
            duration: 2000
        })
        this.tableData.splice(index, 1)
    },
    handleSelectionChange(val){
        //勾选复选框
        this.multipleSelection = val;
        console.log(this.multipleSelection)
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
        },
    handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
    }
  }
}
</script>

<style scoped>
    .tablelist {margin-top: 20px;}
    .pagebox {margin-top: 50px;}
    .dialog {margin:auto;height: 80vh;width: 80%;}

    .pop .el-input {width: 75%;}
    .picmanage .el-form-item {margin-bottom: 10px;} 
</style>

