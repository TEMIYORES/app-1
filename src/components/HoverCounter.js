import React, { Component } from 'react'
import updatedComponent from './WithCounter';

 class HoverCounter extends Component {

   render() {
       const {count} = this.props
     return (
       <div>
         <h2 onMouseOver={this.props.incrementCount}>
           {this.props.name} Hovered {count} times
         </h2>
       </div>
     );
   }
 }

export default updatedComponent(HoverCounter,10)
