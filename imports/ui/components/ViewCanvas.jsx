import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Canvases} from '../../api/canvases.js'

import ColorPicker from './ColorPicker.jsx'
import Canvas from './Canvas.jsx'

export default class ViewCanvas extends Component {

  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this)

    this.state = {
      color: 'black',   
    };
  }

  changeColor(color) {
    this.setState({ color: color })
  }

  render() {
    return (
      <div>
        <div className='canvas-container'>
          <div className='container canvas-title' >
            <div className='row'>
              <div classsName='col-md-4'>
                <h2>{this.props.name || ''}</h2>
                <p>Code: {this.props._id}</p>
              </div>
              <div className='col-md-4'>
                <ColorPicker changeColor={this.changeColor} color={this.state.color} /> 
              </div>
            </div>
          </div>
            <Canvas points={this.props.points} id={this.props._id} color={this.state.color}/>
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

