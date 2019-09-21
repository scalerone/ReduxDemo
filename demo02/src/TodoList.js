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

                    <input value={this.props.inputValue} />
                <button>提交</button>
                </div>
                <ul>
                    <li>Hello</li>
                </ul>
            </div>
        );
    }
}
/*
connect-连接器用来将redux管理的state数据映射成UI组件的一般属性的函数
 指定向TodoList传入哪些一般属性(属性值的来源就是store中的state)
 */
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue
    }
}

//使用连接器将组件暴露出去
//这里的stateToProps代表一个映射关系
// 映射关系就是把原来的state映射成组件中的props属性
export default connect(stateToProps,null)(TodoList);
// export default TodoList;