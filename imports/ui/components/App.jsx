import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
import { Router, Route, Link } from 'react-router'

import NewCanvas from './NewCanvas.jsx'
import JoinCanvas from './JoinCanvas.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.showNewCanvas = this.showNewCanvas.bind(this)
    this.hideNewCanvas = this.hideNewCanvas.bind(this)
    this.showJoinCanvas = this.showJoinCanvas.bind(this)
    this.hideJoinCanvas = this.hideJoinCanvas.bind(this)
    this.routeHome = this.routeHome.bind(this)

    this.state = {
      open: false,
      newCanvas: false,
      joinCanvas: false
    }

  }

  handleToggle(){
    this.setState({open: !this.state.open})
  }

  handleClose(){
    this.setState({open: false})
  }

  showNewCanvas() {
    this.handleClose()
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

  routeHome() {
    this.props.history.push('/')
  }
  
  render() {
    return (
      <div>
        <mui.LeftNav
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        > 
          <mui.MenuItem onTouchTap={this.showNewCanvas}>Create a New Canvas</mui.MenuItem>
          <mui.MenuItem onTouchTap={this.showJoinCanvas}>Join a Canvas</mui.MenuItem>
        </mui.LeftNav>
        <header>
          <mui.AppBar
            title={<span style={styles.title}>Collaborative Canvas</span>}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            className='navbar'
            onTitleTouchTap={this.routeHome}
            onLeftIconButtonTouchTap={this.handleToggle}
          />
        </header>
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
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};