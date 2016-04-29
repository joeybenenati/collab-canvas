import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import mui from 'material-ui'
import shortid from 'shortid'
import { Meteor } from 'meteor/meteor'
import {Canvases} from '../../api/canvases.js'

export default class NewCanvas extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = { name: '' }
  }

  handleChange(e) {
    this.setState({ name: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    Meteor.call('canvases.insert', this.state.name, (err, id) => {
      if (err) {
        console.log(err.message)
      } else {
        this.props.history.push(id);
        this.props.handleClose()
      }
    })
  }

  render() {
    const actions = [
      <mui.FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.props.handleClose}
      />,
      <mui.FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <mui.Dialog
        title="Create a new canvas session"
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.handleClose}
      >
      <mui.TextField
        floatingLabelText="Name of Canvas"
        onChange={this.handleChange}
      />
      </mui.Dialog>
    )
  }
}