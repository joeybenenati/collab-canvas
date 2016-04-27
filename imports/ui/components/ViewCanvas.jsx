import React from 'react';
import {Canvases} from '../../api/canvases.js'

export default ViewCanvas = React.createClass({
  
  getInitialState() {
    // var canvas = Canvases.findOne(this.props.params.canvasId).fetch()
    return {
      name: ''
    }
  },

  render() {
    return (
      <h1>View Canvas:</h1>
    )
  }
})