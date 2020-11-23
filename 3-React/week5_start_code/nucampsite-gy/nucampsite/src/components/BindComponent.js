import React, { Component } from 'react';

class Bind extends Component {
    constructor() {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 1 */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  */}
                {/* 2 */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* 3 & 4 */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}