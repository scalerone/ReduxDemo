import { createStore } from 'redux'  // 编写创建store仓库 引入createStore方法
import reducer from './reducer'
const store = createStore(reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())          // 创建数据存储仓库
export default store                 //暴露出去