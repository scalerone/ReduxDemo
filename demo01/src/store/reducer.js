import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM,GET_LIST } from './actionTypes'

const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}  //默认数据

// state是整个项目中需要管理的数据信息,这里我们没有什么数据，所以用空对象来表示
export default (state = defaultState,action)=>{  //就是一个方法函数
    // console.log(state,action)
    // 记住：Reducer里只能接收state，不能改变state。
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state -对象深拷贝
        newState.inputValue = action.value
        return newState
    }
    //state值只能传递，不能使用
    if(action.type==ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)    //push新的内容到列表中去
        newState.inputValue = ''
        return  newState
    }

    if(action.type==DELETE_ITEM){////根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)   //删除数组中对应的值
        return  newState
    }
    //----关键代码--------start --------
    if(action.type === GET_LIST ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.data.list //复制性的List数组进去
        return newState
    }
    //----关键代码--------en'd --------


    return state
}