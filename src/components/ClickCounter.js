import React, { Component } from 'react'
import updatedComponent from './WithCounter'

 class ClickCounter extends Component {
    render() {
        const {count} = this.props
        return (
          <div>
            <button onClick={this.props.incrementCount}>
            {this.props.name}  Clicked {count} times
            </button>
          </div>
        );
    }
}

export default updatedComponent(ClickCounter,5)
