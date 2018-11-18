<template>
    <div>
        <el-dialog  
            title="选择添加方式" 
            :visible="this.$store.state.isSelectAddMethod"
            :close-on-click-modal ="false"
            :show-close ="false"
            top= '25vh'
            width= "30%"
            >
            <el-form :model="form">
                <el-form-item label="添加方式" prop="type">
                    <el-radio-group v-model="form.type">
                    <el-radio label="手动添加"></el-radio>
                    <el-radio label="文件导入"></el-radio>
                    </el-radio-group>
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
import { mapState } from 'vuex'
export default {
    name:'selectAddMethod',
    data (){
        return{
            form:{
                type:''
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
        this.$store.commit('setSelectAddMethod',false)
        this.form.type = ''
        },
        submit (){
            this.$store.commit('setSelectAddMethod',false)
            this.setStatus()
        },
        setStatus (){
            if(this.form.type == '手动添加'){
                this.$store.commit('setHandleAdd',true)
                this.$store.commit('setFileAdd',false)
            }else if(this.form.type == '文件导入'){
                this.$store.commit('setHandleAdd',false)
                this.$store.commit('setFileAdd',true)
            }
        }
    },
}
</script>

<style lang="stylus" scoped>

</style>
