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
        <p>Go ahead and create a new Collaborative Canvas to get started. Or you can join an existing canvas if you have a code.</p>
        <mui.RaisedButton label="New Canvas" primary={true} onClick={this.showNewCanvas}/>
        <NewCanvas 
          open={this.state.newCanvas} 
          handleClose={this.hideNewCanvas}
          history={this.props.history}
        />
      </div> 
    )
  }
})