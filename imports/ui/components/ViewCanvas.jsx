import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Canvases} from '../../api/canvases.js'
import mui from 'material-ui';
import ColorPicker from './ColorPicker.jsx'
import Canvas from './Canvas.jsx'

export default class ViewCanvas extends Component {

  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.state = {
      color: 'black',   
    };
  }

  handleClear() {
    Meteor.call('canvases.clear', this.props._id)
  }

  changeColor(color) {
    this.setState({ color: color })
  }

  render() {
    return (
      <div>
        <div className='canvas-container'>
          <div className='container-fluid canvas-title' >  
            <h2>{this.props.name || ''}</h2>
            <p>Code: {this.props._id}</p>
            <mui.RaisedButton className='btn-leftpad' label="Clear Canvas" primary={true} onClick={this.handleClear}/>
            <ColorPicker changeColor={this.changeColor} color={this.state.color} /> 
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

