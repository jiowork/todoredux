## todoredux

redux,to do this
简单实现以下redux功能，帮助理解

安装redux，用于测试比较效果
> npm i redux -s


### redux: 

1. createStore :
    将state放到一个仓库里面，并暴露一个getState函数

2. bindActionCreators ：
    绑定actionCreator和store.dispatch，简化action的派发

3. combineReducers ：
    合并多个reducer



### store: 

1. **actions** : 创建actionCreator，引入action-types，返回页面的方法集
2. **reducers** ： 管理员，接收旧状态和一个action，返回新状态，使用纯函数操作
3. **action-types** ： 默认命名


## summary(总结)

1. 单一数据源，整个应用的 state 都被储存在一棵树中，并且这棵状态树只存在于唯一一个 store 中。
2. state只读，唯一改变的方法是触发 action
3. 用纯函数编写reducer，只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，只进行单纯执行计算。