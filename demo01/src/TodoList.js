import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'
import store from './store/index'
//关键代码-------------start
import {changeInputAction , addItemAction ,deleteItemAction} from './store/actionCreators'
//关键代码------------end

const data=[
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state=store.getState();//getState()为store的接口方法
        console.log(this.state)
        this.changeInputValue= this.changeInputValue.bind(this)

        this.storeChange = this.storeChange.bind(this)  //转变this指向
        this.clickBtn = this.clickBtn.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态 --让store变化的数据在组件中生效
    }
    storeChange(){
        this.setState(store.getState())
    }
    //--------关键代码------start
    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    //--------关键代码------end


    render() {
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder={this.state.inputValue}
                           value={this.state.inputValue}
                        //---------关键代码----start
                           onChange={this.changeInputValue}
                        //---------关键代码----end
                           style={{ width:'250px', marginRight:'10px'}}/>
                    <Button type="primary" onClick={this.clickBtn}>增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        //关键代码-----------start
                        dataSource={this.state.list}
                        //关键代码-----------end
                        // renderItem={item=>(<List.Item>{item}</List.Item>)}
                        renderItem={(item, index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}
export default TodoList;