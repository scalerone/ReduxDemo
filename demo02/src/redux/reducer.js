import {CHANGEINPUT,ADDITEMS } from './action-types'

const defalutState = {
    inputValue : 'wuxiaohui',
    list :[]
}


export default (state = defalutState,action) =>{
    if(action.type === CHANGEINPUT){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADDITEMS){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    return state
}
