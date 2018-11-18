<template>
  <div class="page">
  	<div class="login">
      <h1>学生点到系统</h1>
  		<el-form :model="user"  class="demo-ruleForm">
  		    <el-input type="" v-model.number="user.userId" placeholder="请输入账号" >
            <template slot="prepend" ><span class="label label1"><i class="iconfont">&#xe7ae;</i>用户名</span></template>
          </el-input>
  		    <el-input type="password" v-model="user.pass">
            <template slot="prepend" ><span class="label label2"><i class="iconfont">&#xe7e1;</i>密码</span></template>
          </el-input>
  		    <el-button  type="success" @click="login">登录</el-button>
  		</el-form>
  	</div>
  </div>
</template>
<script>   
export default {
  data() {
  	return {
      user: {
      	userId:'admin',
        pass: '88888888'
      }
  	}
  },
  methods:{
    login(){
      this.$router.push({path:'/studentList'})
    }
  }
}
</script>
<style scoped>
  .page {
  overflow: hidden;
	height: 100vh;
	background-image:url('../../assets/image/pictrue.jpg');
  }
  .login {
    position: absolute;
    top: 0px;
    right: 0;
    left: 0px;
  	width: 300px;
  	margin: 60px auto;
    padding: 60px 40px;
    border: 1px #ccc solid;
    background: #fff;
  }
  .login h1 {
    font-size: 30px;
    color: #660033;
    margin-bottom: 30px;
  }
  .label {
	margin:0px -10px;
  }
  .label2{
  	margin-right: 2px;
  }
  .el-input{
    margin-bottom: 30px;
  }
  .el-button {
    width: 300px ;
    height: 32px;
  }
</style>
