import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Canvases} from '../../api/canvases.js'

import Canvas from './Canvas.jsx'

export default class ViewCanvas extends Component {

  render() {
    return (
      <div>
        <h1>View Canvas: {this.props.name || ''} </h1>
        <div className='container'>
          <Canvas points={this.props.points} id={this.props._id}/>
        </div>
      </div>
    )
  }
}

ViewCanvas.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  createdAt: PropTypes.object,
  points: PropTypes.array
}

