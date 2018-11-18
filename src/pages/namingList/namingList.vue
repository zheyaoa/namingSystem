<template>
    <div class="list">
        <el-row>
            <el-col :span="12" :offset="6">
                <h1 class="title">
                    点到名单
                </h1>
                <el-table
                    :data="namingList"
                    height="580"
                    width = "50%"
                    style="width: 100%">
                    <el-table-column prop="name" label="姓名" width="130"></el-table-column>
                    <el-table-column prop="id" label="学号" width="130"></el-table-column>
                    <el-table-column prop="namingNum" label="点到次数" width="130"></el-table-column>
                    <el-table-column prop="attendNum" label="出勤次数" width="130"></el-table-column>
                    <el-table-column prop="present" label="出勤率" ></el-table-column>
                    <el-table-column label="操作" class="acticon">
                        <template slot-scope="scope">
                            <el-button @click="noAttend(scope.row)" type="primary" size="small">缺勤</el-button>
                            <el-button @click="attend(scope.row)" type="danger" size="small">出勤</el-button>
                        </template>
                    </el-table-column> 
                </el-table>
                <el-button type="primary" class="button" @click="submit">完成点到</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'namingList',
    data (){
        return{
            namingList:[]
        }
    },
    methods:{
        attend(row){
            this.$store.commit('attend',{
                id:row.id,
                isAttend:true
            })
        },
        noAttend(row){
            this.$store.commit('attend',{
                id:row.id,
                isAttend:false
            })
        },
        getArraysItem(arr,n){//获取数组中n个不同的项
            let list = []
            while(list.length < n){
                let isHave = false
                let item =  arr[Math.floor(Math.random()*arr.length)]
                for(let i=0;i<list.length;i++){
                    if(list.id == item.id){
                        isHave = true
                    }
                }
                if(!isHave){
                    list.push(item)
                }
            }
            return list
        } ,
        submit (){
            this.$router.push({path:'studentList'})
        }      
    },
    mounted(){
        let list = []
        if(this.$store.state.proportion.type == '全部点到'){
            list = this.$store.state.studentListTableData
        }else{//随机共选取10个人，50%区分高低缺勤率
            if(this.$store.getters.getNoNamingList.length == this.$store.state.studentListTableData.length){
                //第一次点名
                list = this.getArraysItem(this.$store.state.studentListTableData,10)
            }else{//不是第一次点名
                //获取经常来的
                let alwaysAttend = this.$store.state.proportion.alwaysAttend
                console.log(alwaysAttend)
                if(alwaysAttend > this.$store.getters.getAlwaysAttendList.length){
                    this.$store.getters.getAlwaysAttendList.forEach(element =>{
                        list.push(element)
                    })
                }else{
                    this.getArraysItem(this.$store.getters.getAlwaysAttendList,alwaysAttend).forEach(element =>{
                        list.push(element)
                    })
                }
                //不常来的
                let noAttend = this.$store.state.proportion.noAttend
                if(noAttend > this.$store.getters.getNoAttendList.length){
                    this.$store.getters.getNoAttendList.forEach(element =>{
                        list.push(element)
                    })
                }else{
                    this.getArraysItem(this.$store.getters.getNoAttendList,noAttend).forEach(element =>{
                        list.push(element)
                    })
                }
                //未点名的
                let noNaming = this.$store.state.proportion.noNaming
                if(noNaming > this.$store.getters.getNoNamingList.length){
                    this.$store.getters.getNoNamingList.forEach(element =>{
                        list.push(element)
                    })
                }else{
                    this.getArraysItem(this.$store.getters.getNoNamingList,noNaming).forEach(element =>{
                        list.push(element)
                    })
                }

            }
        }
        this.namingList = list
    }
}
</script>
<style lang="stylus" scoped>
    .list 
        padding-top 1rem
        .title
            font-size .6rem
            line-height 1rem
            margin-bottom .2rem
            position relative
            .add
                float right 
                margin-top .26rem
                margin-right .2rem
        .button
            width 100%
            margin-top .6rem
</style>