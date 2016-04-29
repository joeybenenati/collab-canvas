import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

import NewCanvas from './NewCanvas.jsx'
import JoinCanvas from './JoinCanvas.jsx'

export default class Welcome extends Component {

  constructor(props) {
    super(props);

    this.showNewCanvas = this.showNewCanvas.bind(this)
    this.hideNewCanvas = this.hideNewCanvas.bind(this)
    this.showJoinCanvas = this.showJoinCanvas.bind(this)
    this.hideJoinCanvas = this.hideJoinCanvas.bind(this)

    this.state = {
      newCanvas: false,
      joinCanvas: false
    }
  }

  showNewCanvas() {
    this.setState({
      newCanvas: true
    })
  }

  hideNewCanvas() {
    this.setState({
      newCanvas: false
    })
  }

  showJoinCanvas() {
    this.handleClose()
    this.setState({
      joinCanvas: true
    })
  }

  hideJoinCanvas() {
    this.setState({
      joinCanvas: false
    })
  }

  render() {
    const btnStyle = {
      margin: 15
    }

    return (
      <div className='container'>
        <h1>Welcome!</h1>
        <p>Go ahead and create a new Collaborative Canvas to get started. Or you can join an existing canvas if you have a code.</p>
        <mui.RaisedButton label="New Canvas" primary={true} style={btnStyle} onClick={this.showNewCanvas}/>
        <mui.RaisedButton label="Join Canvas" secondary={true} style={btnStyle} onClick={this.showNewCanvas}/>
        <NewCanvas 
          open={this.state.newCanvas} 
          handleClose={this.hideNewCanvas}
          history={this.props.history}
        />
        <JoinCanvas 
          open={this.state.joinCanvas} 
          handleClose={this.hideJoinCanvas}
          history={this.props.history}
        />
      </div> 
    )
  }
}
