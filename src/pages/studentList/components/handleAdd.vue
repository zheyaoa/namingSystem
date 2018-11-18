<template>
        <el-dialog 
            title="手动添加" 
            :visible.sync="this.$store.state.isHandleAdd"
            :close-on-click-modal ="false"
            :show-close ="false"
            top= '15vh'
            width= "40%"
        >
            <el-form :model="form">
                <el-form-item label="姓名">
                    <el-input v-model="form.name" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item label="学号">
                    <el-input v-model="form.id" placeholder="学号"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click= "cancel">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </div>
        </el-dialog>
</template>
<script>
export default {
    name:'handleAdd',
    props:{
        isHandleShow:{
            type:Boolean
        }
    },
    data (){
        return{
            form:{
                name:'',
                id:''
            }
        }
    },
    methods:{
        cancel (){
            this.$store.commit('setHandleAdd',false)
        },
        submit (){
            this.$store.commit('setHandleAdd',false)
            let data = this.form
            this.$store.commit('addStudent',data)
        }
    }
}
</script>
<style lang="stylus" scoped>
</style>
