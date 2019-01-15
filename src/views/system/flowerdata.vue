<template>
  <div class="app-container flowerdata" id="flowerdata">

    <h3>卖房客户</h3>

    <el-table border :data="tableData" style="width: 100%" class="tablelist" @selection-change="handleSelectionChange" :show-overflow-tooltip="tooltip">
        <el-table-column label="序号" prop="id" align="center" width="50">
            <template slot-scope="scope">
                <span>{{ scope.$index+1}}</span>
            </template>
        </el-table-column>
        <el-table-column label="id" prop="id" width="50"></el-table-column>
        <el-table-column label="姓名" prop="name" width="100"></el-table-column>
        <el-table-column label="电话" prop="phone" width="100"></el-table-column>
        <el-table-column label="标题" prop="title" width="200"></el-table-column>
        <el-table-column label="楼盘名称" prop="housename" width="150"></el-table-column>
        <el-table-column label="卧室" prop="bedroom" width="50"></el-table-column>
        <el-table-column label="卫浴" prop="bathroom" width="50"></el-table-column>
        <el-table-column label="书房" prop="bookroom" width="50"></el-table-column>
        <el-table-column label="面积" prop="size" width="50"></el-table-column>
        <el-table-column label="转让价格" prop="price" width="100"></el-table-column>
        <el-table-column label="来源" prop="source" width="150"></el-table-column>
        <el-table-column label="上传时间" prop="uploadtime" width="150"></el-table-column>
        <el-table-column label="最后修改时间" prop="lasttime" width="150"></el-table-column>
        <el-table-column label="处理" prop="did" width="50"></el-table-column>
        <el-table-column label="图片" prop="piclink"></el-table-column>
        <el-table-column align="center" label="操作" width="150">
            <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="manage">管理</el-button>
                <el-button size="mini" type="primary" @click="see(scope.$index, scope.row)">预览</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-pagination class="pagebox" :current-page="currentPage" background layout="prev, pager, next, jumper" :total="100"></el-pagination>

    

  </div>
</template>

<script>

export default {
  name: 'ComplexTable',
  data() {
    return {
        tableData: [{
            id:'123',
            name: '标题内容',
            phone: '150123456',
            title:'中国标题内容',
            housename: '上海市普陀区',
            bedroom:2,
            bathroom:1,
            bookroom:1,
            size:120,
            price:199999,
            source:'xxxxxxx',
            uploadtime:'2014-05-19',
            lasttime:'2018年',
            did:'处理',
            piclink:'Westbank'
        }, {
            id:'123',
            name: '标题内容',
            phone: '150123456',
            title:'中国标题内容',
            housename: '上海市普陀区',
            bedroom:2,
            bathroom:1,
            bookroom:1,
            size:120,
            price:199999,
            source:'xxxxxxx',
            uploadtime:'2014-05-19',
            lasttime:'2018年',
            did:'处理',
            piclink:'Westbank'
        }, {
            id:'123',
            name: '标题内容',
            phone: '150123456',
            title:'中国标题内容',
            housename: '上海市普陀区',
            bedroom:2,
            bathroom:1,
            bookroom:1,
            size:120,
            price:199999,
            source:'xxxxxxx',
            uploadtime:'2014-05-19',
            lasttime:'2018年',
            did:'处理',
            piclink:'Westbank'
        }, {
            id:'123',
            name: '标题内容',
            phone: '150123456',
            title:'中国标题内容',
            housename: '上海市普陀区',
            bedroom:2,
            bathroom:1,
            bookroom:1,
            size:120,
            price:199999,
            source:'xxxxxxx',
            uploadtime:'2014-05-19',
            lasttime:'2018年',
            did:'处理',
            piclink:'Westbank'
        }],
        importanceOptions: [1, 2, 3],
        typeOptions:[1,2,3,4,5],
        listQuery: {
            id:'',
            importance: undefined,
            title: undefined,
            type: undefined,
        },
        tooltip:true,
        currentPage:1,
        multipleSelection:[]
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
    handleDelete(){

    },
    manage(){
        // 图片管理
        this.$router.push('/pics');
        // this.$router.push('article');
    },
    see(){
        //图片预览
    },
    handleSelectionChange(val){
        //勾选复选框
        this.multipleSelection = val;
        console.log(this.multipleSelection)
    }
  }
}
</script>

<style scoped>
    .tablelist {margin-top: 20px;}
    .pagebox {margin-top: 50px;}
    .dialog {margin:auto;height: 80vh;width: 80%;}
</style>

