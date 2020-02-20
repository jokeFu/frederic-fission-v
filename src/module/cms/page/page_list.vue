<template>

  <div>
    <el-form :model="params">
      <el-select v-model="params.siteId" placeholder="请选择站点">
        <el-option
          v-for="item in siteList"
          :key="item.siteId"
          :label="item.siteName"
          :value="item.siteId">
        </el-option>
      </el-select>
      页面别名：
      <el-input v-model="params.pageAliase" style="width: 100px"></el-input>
      <el-button type="primary" v-on:click="query">查询</el-button>
    </el-form>

    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="pageName" label="页面名称" width="120">
      </el-table-column>
      <el-table-column prop="pageAliase" label="别名" width="120">
      </el-table-column>
      <el-table-column prop="pageType" label="页面类型" width="150">
      </el-table-column>
      <el-table-column prop="pageWebPath" label="访问路径" width="250">
      </el-table-column>
      <el-table-column prop="pagePhysicalPath" label="物理路径" width="250">
      </el-table-column>
      <el-table-column prop="pageCreateTime" label="创建时间" width="180">
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="params.size"
      layout="prev, pager, next"
      v-on:current-change="change"
      :total="total" style="float:right;">
    </el-pagination>
  </div>
</template>
<script>
  //导入
  import * as cmsApi from "../api/cms"
  //js代码，创建VM实例
  export default {
    data() {
      return {
        siteList:[],
        list: [],
        total: 0,
        params: {
          page: 1,//页码
          size: 10,//每页显示个数
          siteId: '',
          pageAliase: ''
        }
      }
    },
    methods: {
      //分页查询
      change(page) {
//          alert(page)
        this.params.page = page;
        this.query()
      },
      //查询
      query() {
        //cmsApi
        cmsApi.page_list(this.params.page, this.params.size, this.params).then((res) => {
          //处理响应的结果
          console.log(res)
          this.list = res.queryResult.list;
          //总记录数
          this.total = res.queryResult.total;
        })
      }
    },
    created() {//vue实例创建完成还没有渲染dom对象

    },
    mounted() {//vue实例创建完成并且渲染完成
      this.query()
      this.siteList = [{
        siteId: '5a751fab6abb5044e0d19ea1',
        siteName: '门户主站'
      },
        {
          siteId: '102',
          siteName: '测试站'
        }]

    }
  }
</script>
<style>

</style>
