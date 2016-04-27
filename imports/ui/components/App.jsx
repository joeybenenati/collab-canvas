import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

export default App = React.createClass ({
  getInitialState() {
    return {
      openNav: false
    }
  },

  handleToggle(){
    this.setState({openNav: !this.state.openNav})
  },

  handleClose(){
    this.setState({openNav: false})
  },
  
  render() {
    return (
      <div>
        <header>
          <mui.AppBar
            title="Collaboritive Canvas"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            className='navbar'
            onLeftIconButtonTouchTap={this.handleToggle}
          />
        </header>
        {this.props.children}
      </div>
    )
  }
})