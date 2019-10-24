import React, { Component } from 'react'
import { bindActionCreators } from '../redux'
// redux中有个bindActionCreators方法，可以将actionCreator和store，dispatch绑在一起

import * as types from '../store/action-types'
import store from '../store'

function increament(payload) {
    return {type:types.ADD2,payload}
}
function decreament(payload) {
    return {type:types.SUB2,payload}
}
let actions = { increament, decreament }
actions=bindActionCreators(actions,store.dispatch)

export default class Counter extends Component{
    constructor(props) {
        super(props)
        this.state = {
            number:store.getState().counter2.number
        }
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                number:store.getState().counter2.number
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        return (
            <div>
                <p>counter2</p>
                <p>{this.state.number}</p>
                <button onClick={()=>actions.increament(3)}>+</button>
                <button onClick={()=>actions.decreament(3)}>-</button>
            </div>
        )
    }

}