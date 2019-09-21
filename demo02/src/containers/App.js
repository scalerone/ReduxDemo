import React from 'react'
import {connect} from 'react-redux'

import TodoListUI from '../components/TodoListUI'
import {inputChange,clickButton} from '../redux/actions'

/*
connect-连接器用来将redux管理的state数据映射成UI组件的一般属性（如输入框的值）
 指定向TodoList传入哪些一般属性(属性值的来源就是store中的state)
 */
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue,
        list:state.list
    }
}

/*
connect-连接器用来将redux管理的包含diaptch代码的函数映射成UI组件的函数属性的函数
（如输入的onChange事件）
可以写多个函数，用逗号隔开
 */
// const dispatchToProps = (dispatch) =>{
//     return {
//         inputChange(e){
//             //派发action到store中：定义action 然后派发
//             //派发后就在reducer里边，编写对应的业务逻辑了
//             let action = {
//                 type:'change_input',
//                 value:e.target.value
//             }
//             dispatch(action)
//         },
//         clickButton(){
//
//             let action = {type:'add_item'}
//             dispatch(action)
//         }
//     }
// }


export default connect(stateToProps,{inputChange,clickButton} )(TodoListUI);