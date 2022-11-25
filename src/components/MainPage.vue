<template>
  <ve-table :columns="columns" :table-data="tableData" />
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { field: 'name', key: 'a', title: '书名', titleAlign: 'center', columnAlign: 'center' },
        { field: 'author', key: 'b', title: '作者', titleAlign: 'center', columnAlign: 'center' }
      ],
      tableData: [
        {
          'name': '1',
          'author': '1'
        }
      ]
    }
  },
  created() {
    //  这里直接在created函数中使用axios的get请求向后台获取用户信息数据
    //  在实际开发中可以卸载apiadress.js中配置具体的method对应的路径和接口，这个
    //  后面完善功能的情况下再进行介绍
    this.$ajax('').then(res => {
      this.tableData = res.data.result
      console.log(res.data.result)
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    font-weight: bold;
    text-align: center;
    color: #49ffcc;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
