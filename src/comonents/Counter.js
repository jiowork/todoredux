import React, { Component } from 'react'
import { bindActionCreators } from '../redux'
// redux中有个bindActionCreators方法，可以将actionCreator和store，dispatch绑在一起

import * as types from '../store/action-types'
import store from '../store'

function increament(payload) {
    return {type:types.ADD,payload}
}
function decreament(payload) {
    return {type:types.SUB,payload}
}

let actions = { increament, decreament }
actions=bindActionCreators(actions,store.dispatch)

export default class Counter extends Component{
    constructor(props) {
        super(props)
        this.state = {
            number:store.getState().number
        }
    }

    componentDidMount() {
        // subscribe仅仅是重新调用render
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                number:store.getState().number
            })
        })
    }

    // 组件要卸载时，不再调用render
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        return (
            <div>
                <p>counter</p>
                <p>{this.state.number}</p>
                <button onClick={()=>actions.increament(1)}>+</button>
                <button onClick={()=>actions.decreament(1)}>-</button>
            </div>
        )
    }

}