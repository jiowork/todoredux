import {createStore} from 'redux'
import reducer from './reducers'

// 给每个仓库配一个管理员
let store = createStore(reducer)

export default store