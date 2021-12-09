import React, { Component } from 'react'
import MemoComp from './MemoComp'
// import PureComp from './PureComp'
// import RegComp from './RegComp'

 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'Temiyores'
         }
     }
     componentDidMount() {
         setInterval(() => {
             this.setState({
                 name: 'Qayyum'
             })
         }, 2000)
     }
    render() {
        console.log('========= PARENT COMPONENT============')
        return (
          <div>
            {/* regcomp<RegComp name={this.state.name} />
            purecomp<PureComp name={this.state.name} /> */}
            <MemoComp name={this.state.name}/>
          </div>
        );
    }
}

export default ParentComp
