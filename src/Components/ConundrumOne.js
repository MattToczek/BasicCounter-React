import React, { Component } from 'react'
import Btn from './Btn'
import Display from './Display'


export default class ConundrumOne extends Component {
    state = {
        counter: 0
    }

    upBtn = () => {
        this.setState({
            counter: this.state.counter +1
        })
        return this.state.counter;
    }

    dwnBtn = () => {
        this.setState({
            counter: this.state.counter -1
        })
        return this.state.counter;
    }

    render() {

        return (
            <div>

                <Display counter = {this.state.counter}/>
                <Btn btnFunc={this.upBtn} label="Up!" />
                <Btn btnFunc={this.dwnBtn} label="Down!" />
                
            </div>
        )
    }
}


