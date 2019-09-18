import { createStore ,applyMiddleware,compose} from 'redux'  // 编写创建store仓库 引入createStore方法
import reducer from './reducer'
import thunk from 'redux-thunk'
//------关键代码----start-----------
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'

const sagaMiddleware = createSagaMiddleware();
//------关键代码----end-----------

// const store = createStore(reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())          // 创建数据存储仓库
//compose 为增强函数   为了引入thunk和调试，相当于两个函数都执行了
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

//引入redux-thunk
// const enhancer = composeEnhancers(applyMiddleware(thunk))

//替换redux-thunk引入saga中间件
//------关键代码----start-----------
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
//------关键代码----end-----------

const store = createStore( reducer, enhancer) // 创建数据存储仓库
sagaMiddleware.run(mySagas)

export default store                 //暴露出去

// 要遵循的原则
// store必须是唯一的，多个store是坚决不允许，只能有一个store空间
// 只有store能改变自己的内容，Reducer不能改变
// Reducer必须是纯函数 ：
// 如果函数的调用参数相同，则永远返回相同的结果。它不依赖于程序执行期间函数外部任何状态或数据的变化，必须只依赖于其输入参数。
//比如在Reducer里增加一个异步ajax函数，获取一些后端接口数据，然后再返回，这就是不允许的（包括你使用日期函数也是不允许的）