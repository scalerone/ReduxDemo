import React, {Component} from 'react';

import 'antd/dist/antd.css'
import {Button, Input, List} from "antd";

// 无状态组件的改写
// 把UI组件改成无状态组件可以提高程序性能，具体来看一下如何编写。
//
// 首先我们不在需要引入React中的{ Component }，删除就好。
// 然后些一个TodoListUI函数,里边只返回JSX的部分就好，这步可以复制。
// 函数传递一个props参数，之后修改里边的所有props，去掉this。

const TodoListUi = (props)=>{
    return(
        <div style={{margin:'10px'}}>
            <div>
                <Input
                    style={{ width:'250px', marginRight:'10px'}}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button
                    type="primary"
                    onClick={props.clickBtn}
                >增加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={
                        (item,index)=>(
                            <List.Item onClick={()=>{props.deleteItem(index)}}>
                                {item}
                            </List.Item>
                        )
                    }
                />
            </div>
        </div>
    )

}







// class TodoListUi extends Component {
//     render() {
//         return (
//             <div>
//                 <div style={{margin:'10px'}}>
//                     <div>
//                         <Input placeholder={this.props.inputValue}
//                                value={this.props.inputValue}
//                                onChange={this.props.changeInputValue}
//                                style={{ width:'250px', marginRight:'10px'}}/>
//                         <Button type="primary" onClick={this.props.clickBtn}>增加</Button>
//                     </div>
//                     <div style={{margin:'10px',width:'300px'}}>
//                         {/*需要注意的是在List组件的删除功能,需要用箭头函数的形式，代替以前方法，并在箭头函数里使用属性的方法，调用出传过来的方法*/}
//                         {/*<List*/}
//                         {/*    bordered*/}
//                         {/*    dataSource={this.props.list}*/}
//                         {/*    renderItem={(item, index)=>(<List.Item onClick={this.props.deleteItem(index)}>{item}</List.Item>)}*/}
//                         {/*/>*/}
//                         <List
//                             bordered
//                             dataSource={this.props.list}
//                             renderItem={(item,index)=>(<List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
//                         />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default TodoListUi;