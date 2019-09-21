import React from 'react';

import {connect} from 'react-redux'  //引入连接器

// class TodoList extends Component {
//
//     constructor(props){
//         super(props)
//         //获取store的数据给state
//         // this.state = store.getState()//这里注释掉 state的数据已通过connect映射出来了
//     }
//
//     render() {
//         let {inputValue ,inputChange,clickButton,list} = this.props;
//         return (
//             <div>
//                 <div>
//
//                     <input value={inputValue} onChange={inputChange} />
//                 <button onClick={clickButton}>提交</button>
//                 </div>
//                 <ul>
//
//                     {
//                         list.map((item,index)=>{
//                             return <li key={index}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }


//把TodoList改为UI组件-提高性能

const TodoList =(props)=>{
    let {inputValue ,inputChange,clickButton,list} = props; // 粘贴过来后，此处要进行修改
    return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange} />
                <button onClick={clickButton}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
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
        clickButton(){

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


/*
总结:
connect的作用是把UI组件（无状态组件）和业务逻辑代码的分开，然后通过connect再链接到一起，
让代码更加清晰和易于维护。这也是React-Redux最大的有点。
知识点：
容器组件: 通过connect包装UI组件产生组件
connect(): 高阶函数
connect()返回的函数是一个高阶组件: 接收一个UI组件, 生成一个容器组件
容器组件的责任: 向UI组件传入特定的属性
 */