import React, { Fragment, Component } from 'react'

class PageTwo extends Component {

     componentDidMount = () => {
      if(this.props.location.state && this.props.location.state.from != '/pagetwo')
      this.props.history.push({
         pathname: '/pagetwo',
         state: { 
             from: this.props.location.pathname
         }
       });
     }
  
     render() {
        return (
           <Fragment>
              <div className="container-fluid">
                 <div className="row d-flex justify-content-center">
                    <h2>Page Two</h2>
                 </div>
              </div>
           </Fragment>
        )
     }
  }
  
  export default PageTwo