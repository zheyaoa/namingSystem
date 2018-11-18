    <template>
        <div class="list">
            <h1 class="title">
                学生名单
                <el-button type="primary" class="add new-btn-primary" @click="addPeople">添加人员</el-button>
            </h1>
            <el-table
                :data="this.$store.state.studentListTableData"
                height="580"
                style="width: 100%">
                <el-table-column prop="name" label="姓名" width="160"></el-table-column>
                <el-table-column prop="id" label="学号" width="160"></el-table-column>
                <el-table-column prop="namingNum" label="点到次数" width="160"></el-table-column>
                <el-table-column prop="attendNum" label="出勤次数" width="160"></el-table-column>
                <el-table-column prop="present" label="出勤率" ></el-table-column>
            </el-table>
            <el-button type="primary" class="button" @click="openSelectNamingMethod">点到</el-button>
        </div>
    </template>
    <script>
    export default {
        name:'list',
        data (){
            return{
            }
        },
        methods:{
            addPeople(){
                this.$store.commit('setSelectAddMethod',true)
            },
            openSelectNamingMethod (){
                this.$store.commit('setSelectNamingMethod',true)
            }
        }
    }
    </script>
    <style lang="stylus" scoped>
        .list 
            margin-top 1rem
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
