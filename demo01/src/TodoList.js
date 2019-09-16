import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'
import store from './store/index'
const data=[
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]

class TodoList extends Component {
    constructor(props){
        super(props)
        //关键代码-----------start
        this.state=store.getState();//getState()为store的接口方法
        console.log(this.state)
        //关键代码-----------end
        this.changeInputValue= this.changeInputValue.bind(this)

        //----------关键代码-----------start
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态 --让store变化的数据在组件中生效
        //----------关键代码-----------end
    }
    storeChange(){
        this.setState(store.getState())
    }
    changeInputValue(e){
        console.log(e.target.value)
        const action ={
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action)
    }
    render() {
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder={this.state.inputValue}
                        //---------关键代码----start
                           onChange={this.changeInputValue}
                        //---------关键代码----end
                           style={{ width:'250px', marginRight:'10px'}}/>
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        //关键代码-----------start
                        dataSource={this.state.list}
                        //关键代码-----------end
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}
export default TodoList;