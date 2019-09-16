const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}  //默认数据

// state是整个项目中需要管理的数据信息,这里我们没有什么数据，所以用空对象来表示
export default (state = defaultState,action)=>{  //就是一个方法函数
    // console.log(state,action)
    // 记住：Reducer里只能接收state，不能改变state。
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }


    return state
}