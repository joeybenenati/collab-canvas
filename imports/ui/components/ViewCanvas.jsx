import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Canvases} from '../../api/canvases.js'

import Canvas from './Canvas.jsx'

export default class ViewCanvas extends Component {

  render() {
    return (
      <div>
        <h1>View Canvas: {this.props.name || ''} </h1>
        <div className='container'></div>
        <Canvas lines={this.props.lines} id={this.props._id}/>
      </div>
    )
  }
}

ViewCanvas.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  createdAt: PropTypes.object,
  lines: PropTypes.array
}

