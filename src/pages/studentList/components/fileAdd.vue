<template>
    <el-dialog 
        title="文件导入" 
        :visible.sync="this.$store.state.isFileAdd"
        :close-on-click-modal ="false"
        :show-close ="false"
        top= '15vh'
        width= "50%"
    >
        <el-form :model="form" ref="form">
            <el-form-item label="文件导入" prop="type">
                <el-radio-group v-model="form.type">
                    <el-radio label="导入默认文件"></el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>    
import axios from 'axios'
export default {
    name:'fileAdd',
    data (){
        return{
            form:{
            }
        }
    },
    methods:{
        submit (){
            this.$store.commit('setFileAdd',false)
            axios.get('/static/mock/data.json')
            .then((res) => {
                res.data.data.forEach(element => {
                    this.$store.commit('addStudent',element)
                });
            })
        },
        handleClose(){
            this.$store.commit('setFileAdd',false)
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>