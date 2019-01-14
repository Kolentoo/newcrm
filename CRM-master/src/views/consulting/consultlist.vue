<template>
    <div class="consultlist" id="consultlist">
        <h3>文章栏目</h3>
        <el-table :data="tableData" border style="width: 100%" :show-overflow-tooltip="tooltip">
            <el-table-column label="序号" prop="id" align="center" width="65">
                <template slot-scope="scope">
                    <span>{{ scope.$index+1}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="id" label="id" width="180"></el-table-column>
            <el-table-column prop="column" label="栏目"></el-table-column>
            <el-table-column align="center" label="操作" width="300">
            <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="dialogFormVisible = true">添加</el-button>
                <el-button size="mini" type="primary" @click="dialogFormVisible = true">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>

        <el-pagination class="pagebox" :current-page="currentPage" background layout="prev, pager, next, jumper" :total="100"></el-pagination>

        <el-dialog title="类别" :visible.sync="dialogFormVisible" class="pop" width="30%">
            <el-form :model="form">
                <el-form-item label="分类名称" :label-width="formLabelWidth">
                    <el-input size="small" v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="上一级" :label-width="formLabelWidth">
                    <el-select size="small" v-model="selectbox" placeholder="请选择">
                        <el-option v-for="(item,index) in form.region" :key="index" :value="item"/>
                    </el-select>
                </el-form-item>
                <el-form-item label="排序" :label-width="formLabelWidth">
                    <el-input size="small" v-model="form.sort" autocomplete="off"></el-input>
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
    data() {
      return {
        tableData: [{
          id: '11111',
          column: '王小虎'
        }, {
          id: '11111',
          column: '王小虎'
        }, {
          id: '11111',
          column: '王小虎'
        }, {
          id: '11111',
          column: '王小虎'
        }],
        currentPage:1,

        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          sort: '',
          region: [1,2,3,4,5],
        },
        tooltip:true,
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
        handleDelete(){

        }
    }
  }
</script>

<style scoped>
    .consultlist {padding: 20px;}
    .pagebox {margin-top: 50px;}

    /* 弹出框 */
    .pop .el-input {width: 80%;}
    .pop .el-select {width: 80%;}
</style>
