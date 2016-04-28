import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import shortid from 'shortid'
import { Meteor } from 'meteor/meteor';
import {Canvases} from '../../api/canvases.js'

export default NewCanvas = React.createClass({

  getInitialState() {
    return {
      name: ''
    }
  },

  handleChange(e) {
    this.setState({ name: e.target.value })
  },

  handleSubmit(e) {
    e.preventDefault()

    Meteor.call('canvases.insert', this.state.name, (err, id) => {
      if (err) {
        console.log(err.message)
      } else {
        this.props.history.push(id);
      }
    })
  },

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />,
    ];

    return (
      <Dialog
        title="Create a new Canvas session."
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.handleClose}
      >
      <TextField
        floatingLabelText="Name of Canvas"
        onChange={this.handleChange}
      />
      </Dialog>
    )
  }
})