import {CHANGEINPUT,ADDITEMS } from './action-types'
import { fromJS } from 'immutable'
// 引入fromJS 将state数据转变为 immutable对象
const defalutState = fromJS({
    inputValue : 'wuxiaohui',
    list :[]
});

//immutable.js 用来管理state  保持其不可变性

export default (state = defalutState,action) =>{
    if(action.type === CHANGEINPUT){
        // let newState = JSON.parse(JSON.stringify(state)) //深拷贝
        // newState.inputValue = action.value
        // return newState
        return  state.set('inputValue',action.value)
    }
    if(action.type === ADDITEMS){
        // let newState = JSON.parse(JSON.stringify(state))
        // newState.list.push(newState.inputValue)
        // newState.inputValue = ''
        // return newState

        return state.merge({
            'list': state.get('list').push(state.get('inputValue')),
            'inputValue': ''
        });

    }

    return state
}
