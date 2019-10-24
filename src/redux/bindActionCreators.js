function bindActionCreators(actionCreator, dispatch) {
    return function (...args) {
        return dispatch(actionCreator(...args))
    }
}

//判断参数是函数还是对象
export default function (actionCreator, dispatch) {
    if (typeof actionCreator == 'function') {
        return bindActionCreators(actionCreator, dispatch)
    }
    const boudActionCreators = {}
    for (let key in actionCreator) {
        boudActionCreators[key] = bindActionCreators(actionCreator[key], dispatch)
    }
    return boudActionCreators;
}