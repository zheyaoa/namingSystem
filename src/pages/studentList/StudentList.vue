<template>
    <div class="content_wrap wrapper">
        <el-row>
            <el-col :span="12" :offset="6">
                <list></list>
            </el-col>
        </el-row>
        <div>
            <select-add-method></select-add-method>
            <handle-add></handle-add>
            <file-add></file-add>
        </div>
        <div>
            <select-naming-method></select-naming-method>
        </div>
    </div>
</template>
<script>
import selectAddMethod from './components/SelectAddMethod'
import list from './components/List'
import handleAdd from './components/handleAdd'
import fileAdd from './components/fileAdd'
import selectNamingMethod from './components/SelectNamingMethod'

export default {
    name:'Detail',
    components:{
        list,
        selectAddMethod,
        handleAdd,
        fileAdd,
        selectNamingMethod
    }
}
</script>
<style lang="stylus" scoped>
    .wrapper
        height 100%

</style>
