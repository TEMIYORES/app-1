import React from 'react'

const updatedComponent = (WrappedComponent, incrementNumber) => {
  class NewComponent extends React.Component{
       constructor(props) {
         super(props)
     
         this.state = {
              count : 0
         }
     }
     incrementCount = () => {
         this.setState(prevState =>{
             return { count: prevState.count + incrementNumber };
         })
     }
      render(){
          const {count} = this.state
          return (
            <WrappedComponent
              count={count}
              incrementCount={this.incrementCount}
            // {... this.state}
              {... this.props}
            />
          );
      }
  }
  return NewComponent
}

export default updatedComponent;
