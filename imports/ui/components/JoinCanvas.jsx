import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
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
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Join"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <Dialog
        title="Join an existing canvas"
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.handleClose}
      >
      <TextField
        floatingLabelText="Canvas Code"
        onChange={this.handleChange}
      />
      </Dialog>
    )
  }
}