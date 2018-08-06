import React, { Fragment, Component } from 'react'

class PageOne extends Component {

   componentDidMount(){
      if(this.props.location.state && this.props.location.state.from != '/pageone')
      this.props.history.push({
         pathname: '/pageone',
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
                  <h2>Page One</h2>
               </div>
            </div>
         </Fragment>
      )
   }
}

export default PageOne
