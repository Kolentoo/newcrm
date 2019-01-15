<template>
    <div class="pics" id="pics">
        <h3>图片管理</h3>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column label="序号" prop="id" align="center" width="65">
                <template slot-scope="scope">
                    <span>{{ scope.$index+1}}</span>
                </template>
            </el-table-column>
            <el-table-column label="图片" width="150">
                <template slot-scope="scope">
                    <img class="g10 vm" :src="scope.row.pic" alt="">
                </template>
            </el-table-column>
            <el-table-column prop="picname" label="名称"></el-table-column>
            <el-table-column prop="sort" label="排序" width="80"></el-table-column>
            <el-table-column align="sort" label="操作" width="250">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="cover">设封面</el-button>
                    <el-button size="mini" type="primary" @click="dialogFormVisible = true">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination class="pagebox" :current-page="currentPage" background layout="prev, pager, next, jumper" :total="100"></el-pagination>


        <el-dialog title="类别" :visible.sync="dialogFormVisible" class="pop" width="30%">
            <el-form :model="form">
                <el-form-item label="分类名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="上一级" :label-width="formLabelWidth">
                    <el-select v-model="selectbox" placeholder="请选择">
                        <el-option v-for="(item,index) in form.region" :key="index" :value="item"/>
                    </el-select>
                </el-form-item>
                <el-form-item label="排序" :label-width="formLabelWidth">
                    <el-input v-model="form.sort" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          pic: 'http://xkolento.cn/static/img/item1.c842ecc.jpg',
          picname: '王小虎',
          sort:0
        }, {
          pic: 'http://xkolento.cn/static/img/item1.c842ecc.jpg',
          picname: '王小虎',
          sort:0
        }, {
          pic: 'http://xkolento.cn/static/img/item1.c842ecc.jpg',
          picname: '王小虎',
          sort:0
        }, {
          pic: 'http://xkolento.cn/static/img/item1.c842ecc.jpg',
          picname: '王小虎',
          sort:0
        }],
        currentPage:1,

        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          sort: '',
          region: [1,2,3,4,5],
        },
        selectbox:'',
        formLabelWidth: '120px'
      }
    },
    created(){

    },
    methods:{
        handleAdd(){

        },
        handleEdit(){

        },
        handleDelete(index){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.tableData.splice(index,1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
            });
            
        },
        cover(){
            this.$message({
            showClose: true,
            message: '封面设置成功',
            type: 'success'
            });
        }
    }
  }
</script>

<style scoped>
    .pics {padding: 20px;}
    .pagebox {margin-top: 50px;}

    /* 弹出框 */
    .pop .el-input {width: 80%;}
    .pop .el-select {width: 80%;}
</style>
