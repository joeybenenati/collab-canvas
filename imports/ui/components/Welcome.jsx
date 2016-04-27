import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

import NewCanvas from './NewCanvas.jsx'

export default Welcome = React.createClass ({

  getInitialState() {
    return {
      newCanvas: false
    }
  },

  showNewCanvas() {
    console.log('clicked')
    this.setState({
      newCanvas: true
    })
  },

  hideNewCanvas() {
    this.setState({
      newCanvas: false
    })
  },

  render() {
    return (
      <div className='container'>
        <h1>Welcome!</h1>
        <mui.RaisedButton label="New Canvas" primary={true} onClick={this.showNewCanvas}/>
        <NewCanvas 
          open={this.state.newCanvas} 
          handleClose={this.hideNewCanvas}
        />
      </div> 
    )
  }
})