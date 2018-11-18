import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
class Student{
    constructor(data){
        this.name = data.name
        this.id = data.id
        this.namingNum =0
        this.attendNum =0
        this.present = '0%'
    }
}
function getArraysItem(arr,n){//获取数组中n个不同的项
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
}
export default new Vuex.Store({
    state:{
        isSelectAddMethod:false,
        isHandleAdd:false,
        isFileAdd:false,
        isSelectNamingMethod:false,
        isAllNaming:false,
        isRandomNaming:false,
        proportion:{},
        studentListTableData:[{
            name: '王小虎',
            id: '6130116240',
            namingNum:0,
            attendNum:0,
            present:'0%'
        },{
            name: 'yyx',
            id: '6130116241',
            namingNum:0,
            attendNum:0,
            present:'0%'
        },{
            name: 'zyx',
            id: '6130116242',
            namingNum:0,
            attendNum:0,
            present:'0%'
        },{
            name: 'xjl',
            id: '6130116243',
            namingNum:0,
            attendNum:0,
            present:'0%'
        },{
            name: 'chh',
            id: '6130116244',
            namingNum:0,
            attendNum:0,
            present:'0%'
        },{
            name: 'xyz',
            id: '6130116245',
            namingNum:0,
            attendNum:0,
            present:'0%'
        },{
            name: 'zbf',
            id: '6130116246',
            namingNum:0,
            attendNum:0,
            present:'0%'
        },{
            name: 'sl',
            id: '6130116247',
            namingNum:0,
            attendNum:0,
            present:'0%'
        },{
            name: 'yh',
            id: '6130116248',
            namingNum:0,
            attendNum:0,
            present:'0%'
        },{
            name: 'cw',
            id: '6130116249',
            namingNum:0,
            attendNum:0,
            present:'0%'
        },{
            name: 'qcq',
            id: '6130116250',
            namingNum:0,
            attendNum:0,
            present:'0%'
        },{
            name: 'wxr',
            id: '6130116251',
            namingNum:0,
            attendNum:0,
            present:'0%'
        }]
    },
    mutations:{
        setSelectAddMethod(state,status){
            state.isSelectAddMethod = status
        },
        setHandleAdd(state,status){
            state.isHandleAdd = status
        },
        setFileAdd(state,status){
            state.isFileAdd = status
        },
        setSelectNamingMethod(state,status){
            state.isSelectNamingMethod = status
        },
        setAllNaming(state,status){
            state.isAllNaming = status
        },
        setRandomNaming(state,status){
            state.isRandomNaming = status
        },
        setProportion(state,obj){
            state.proportion = obj 
        },
        addStudent(state,data){
            state.studentListTableData.push(new Student(data))
        },
        attend(state,obj){
            state.studentListTableData.forEach(element =>{
                if(element.id == obj.id){
                    element.namingNum +=1
                    if(obj.isAttend){
                        element.attendNum +=1
                    }
                    element.present = element.attendNum/element.namingNum*100 + '%'
                }
            })
        }
    },
    getters:{
        getList:(state,getters) => {
            if(state.proportion.type == '全部点到'){
                return state.studentListTableData
            }else{//随机共选取10个人，50%区分高低缺勤率
                if(getters.getNoNamingList.length == state.studentListTableData.length){
                    //第一次点名
                    return getArraysItem(state.studentListTableData,10)
                }else{//不是第一次点名
                    let list = []
                    //获取经常来的
                    let alwaysAttend = state.proportion.alwaysAttend
                    if(alwaysAttend > getters.getAlwaysAttendList.length){
                        getters.getAlwaysAttendList.forEach(element =>{
                            list.push(element)
                        })
                    }else{
                        getArraysItem(getters.getAlwaysAttendList,alwaysAttend).forEach(element =>{
                            list.push(element)
                        })
                    }
                    //不常来的
                    let noAttend = state.proportion.noAttend
                    if(noAttend > getters.getNoAttendList.length){
                        getters.getNoAttendList.forEach(element =>{
                            list.push(element)
                        })
                    }else{
                        getArraysItem(getters.getNoAttendList,noAttend).forEach(element =>{
                            list.push(element)
                        })
                    }
                    //未点名的
                    let noNaming = state.proportion.noNaming
                    if(noNaming > getters.getNoNamingList.length){
                        getters.getNoNamingList.forEach(element =>{
                            list.push(element)
                        })
                    }else{
                        getArraysItem(getters.getNoNamingList,noNaming).forEach(element =>{
                            list.push(element)
                        })
                    }

                    return list
                }
            }
        },
        getNoNamingList:(state) =>{
            let list = []
            state.studentListTableData.forEach(element =>{
                if(element.namingNum == 0){
                    list.push(element)
                }
            })
            return list
        },
        getAlwaysAttendList:(state) =>{
            let list = []
            state.studentListTableData.forEach(element =>{
                if(element.attendNum/element.namingNum >=0.5){
                    list.push(element)
                }
            })
            return list
        },
        getNoAttendList:(state) =>{
            let list = []
            state.studentListTableData.forEach(element =>{
                if(element.attendNum/element.namingNum <0.5 && element.namingNum != 0){
                    list.push(element)
                }
            })
            return list
        }
    }

})