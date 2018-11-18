<template>
    <div>
        <el-dialog  
            title="选择添加方式" 
            :visible="this.$store.state.isSelectNamingMethod"
            :close-on-click-modal ="false"
            :show-close ="false"
            top= '25vh'
            width= "30%"
            >
            <el-form 
                :model="form"
                label-position= "top" 
                ref="table"   
            >
                <el-form-item label="添加方式" prop="type">
                    <el-radio-group v-model="form.type">
                    <el-radio label="全部点到" ></el-radio>
                    <el-radio label="随机点到" ></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item 
                    label="设置抽取比例"
                    v-show="isShow"    
                >
                    <el-col :span="5">
                        <el-input  placeholder="未点到比例" v-model="form.noNaming" style="width: 100%;"></el-input>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="5">
                        <el-input  placeholder="经常缺勤比例" v-model="form.noAttend" style="width: 100%;"></el-input>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="5">
                        <el-input  placeholder="总是缺勤比例" v-model="form.alwaysAttend" style="width: 100%;"></el-input>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-button type="primary" @click="setDefault" class="new-btn-primary">设置默认</el-button>
                    </el-col>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </div>
        </el-dialog>
    </div>


</template>
<script>
export default {
    name:'selectNamingMethod',
    data (){
        return{
            form:{
                type:'',
                noNaming:'',
                noAttend:'',
                alwaysAttend:''
            }
        }
    },
    props:{
        selectAddMethodVisible:{
            type:Boolean,
            default:true
        }
    },
    methods:{
        cancel (){
           this.$store.commit('setSelectNamingMethod',false)
           this.form.type = ''
        },
        submit (){
            this.$store.commit('setSelectNamingMethod',false)
            this.$store.commit('setProportion',{
                noNaming:this.form.noNaming,
                noAttend:this.form.noAttend,
                alwaysAttend:this.form.alwaysAttend,
                type:this.form.type
            })
            this.setStatus()
            this.$router.push({path:'/namingList'})
        },
        setStatus (){
            if(this.form.type == '全部点到'){
                this.$store.commit('setAllNaming',true)
                this.$store.commit('setRandomNaming',false)
            }else if(this.form.type == '随机点到'){
                this.$store.commit('setAllNaming',false)
                this.$store.commit('setRandomNaming',true)
            }
        },
        setDefault (){
                this.form.noNaming = 4,
                this.form.noAttend = 4,
                this.form.alwaysAttend = 2
        }
    },
    computed :{
        isShow () {
            return  this.form.type == '随机点到'
        }
    }
}
</script>

<style lang="stylus" scoped>
    .line
        text-align center
</style>