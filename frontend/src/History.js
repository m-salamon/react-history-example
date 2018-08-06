import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './App.css'


class History extends Component {

  handleBack = () => {
    this.props.history.goBack()
  }

  handleForward = () => {
    console.log(this.props.history)
    this.props.history.go(+1)
  }

  render() {
    return <div className="container">
      <div className="row d-flex justify-content-between">
        <span onClick={this.handleBack} className="d-flex justify-content-start button">
          <i className="fas fa-arrow-alt-circle-left fa-5x"></i>
        </span>
        <span onClick={this.handleForward} className="d-flex justify-content-end button">
          <i className="fas fa-arrow-alt-circle-right fa-5x"></i>
        </span>
      </div>
    </div>
  }
}

export default withRouter(History)