import React, {Component} from 'react';

import 'antd/dist/antd.css'
import {Button, Input, List} from "antd";

class TodoListUi extends Component {
    render() {
        return (
            <div>
                <div style={{margin:'10px'}}>
                    <div>
                        <Input placeholder={this.props.inputValue}
                               value={this.props.inputValue}
                               onChange={this.props.changeInputValue}
                               style={{ width:'250px', marginRight:'10px'}}/>
                        <Button type="primary" onClick={this.props.clickBtn}>增加</Button>
                    </div>
                    <div style={{margin:'10px',width:'300px'}}>
                        {/*需要注意的是在List组件的删除功能,需要用箭头函数的形式，代替以前方法，并在箭头函数里使用属性的方法，调用出啊你过来的方法*/}
                        {/*<List*/}
                        {/*    bordered*/}
                        {/*    dataSource={this.props.list}*/}
                        {/*    renderItem={(item, index)=>(<List.Item onClick={this.props.deleteItem(index)}>{item}</List.Item>)}*/}
                        {/*/>*/}
                        <List
                            bordered
                            dataSource={this.props.list}
                            renderItem={(item,index)=>(<List.Item onClick={(index)=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoListUi;