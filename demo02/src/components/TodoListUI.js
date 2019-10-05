//把TodoList改为UI组件-提高性能

import React from "react";

 const TodoListUI =(props)=>{
    let {inputValue ,inputChange,clickButton,list} = props; // 粘贴过来后，此处要进行修改,接收连接器传递的数据
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
export  default TodoListUI