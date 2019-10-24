export default function createStore(reducer) {
    let state;
    let listeners = [];

    // 向外暴露的方法，得到state
    function getState() {
        return state
    }

    // 
    function dispatch(action) {
        state = reducer(state, action)
        listeners.forEach(l => l())
    }

    function subscribe(listener) {
        listeners.push(listener)
        return function () {
            listeners = listeners.filter(item => item !== listener)
        }
    }
    // 初始化state
    dispatch({
        type: '@@redux/INIT'
    });
    return {
        getState,
        dispatch,
        subscribe
    }
}