import React, {Component} from 'react';

import {connect} from 'react-redux'  //引入连接器

import store from './redux/store'


class TodoList extends Component {

    constructor(props){
        super(props)
        //获取store的数据给state
        this.state = store.getState()
    }

    render() {
        return (
            <div>
                <div>

                    <input value={this.props.inputValue} onChange={this.props.inputChange} />
                <button onClick={this.props.clickBtn}>提交</button>
                </div>
                <ul>
                    <li>Hello</li>

                    {
                        this.props.list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
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
const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            //派发action到store中：定义action 然后派发
            //派发后就在reducer里边，编写对应的业务逻辑了
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        clickBtn(){

            let action = {type:'add_item'}
            dispatch(action)
        }
    }
}
//使用连接器将组件暴露出去
//这里的stateToProps代表一个映射关系
// 映射关系就是把原来的state映射成组件中的props属性
export default connect(stateToProps,dispatchToProps)(TodoList);
// export default TodoList;