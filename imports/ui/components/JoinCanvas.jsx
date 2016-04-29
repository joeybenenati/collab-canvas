import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import mui from 'material-ui'
import { Meteor } from 'meteor/meteor';


export default class JoinCanvas extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = { id: '' }
  }

  handleChange(e) {
    this.setState({ id: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleClose()
    this.props.history.push(this.state.id);
  }

  render() {
    const actions = [
      <mui.FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.props.handleClose}
      />,
      <mui.FlatButton
        label="Join"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <mui.Dialog
        title="Join an existing canvas"
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.handleClose}
      >
      <mui.TextField
        floatingLabelText="Canvas Code"
        onChange={this.handleChange}
      />
      </mui.Dialog>
    )
  }
}