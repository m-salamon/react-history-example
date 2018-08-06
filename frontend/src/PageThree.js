import React, { Fragment, Component } from 'react'

class PageThree extends Component {

   componentDidMount = () => {
      if(this.props.location.state && this.props.location.state.from != '/pagethree')
      this.props.history.push({
         pathname: '/pagethree',
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
                  <h2>Page Three</h2>
               </div>
            </div>
         </Fragment>
      )
   }
}

export default PageThree