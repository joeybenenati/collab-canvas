import React, { Component, PropTypes } from 'react';
import $ from 'jquery'
import { Meteor } from 'meteor/meteor';
import d3 from 'd3'
import {Canvases} from '../../api/canvases.js'


export default class Canvas extends Component {

  constructor(props) {
    super(props);
 
    this.markPoint = this.markPoint.bind(this)
    this.renderPoints = this.renderPoints.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)

    this.state = {
      mouseDown: false,   
    };
  }

  getMousePos(e) {
    var offset = $('#canvas').offset()
    return {
      x: e.clientX - offset.left,
      y: e.clientY - offset.top
    }
  }

  handleMouseDown(e) {
    this.setState({ mouseDown: true })
    var point = this.getMousePos(e)
    point.lineBefore = false
    this.markPoint(point)
  }

  handleMouseUp(e) {
    this.setState({ mouseDown: false })
    var point = this.getMousePos(e)
    point.lineBefore = true
    this.markPoint(point)
  }

  handleMouseMove(e) {
    if (this.state.mouseDown) {
      var point = this.getMousePos(e)
      point.lineBefore = true
      this.markPoint(point)
    }
  }

  handleMouseLeave(e) {
    if (this.state.mouseDown) {
      this.handleMouseUp(e)
    }
  }

  handleClear() {
    Meteor.call('canvases.clear', this.props.id)
  }

  markPoint(point) {
    Meteor.call('canvases.markPoint', this.props.id, point, err => {
      if (err) console.log(err)
    })
  }

  renderPoints() {
    var points = this.props.points || []
    return points.map( (point, index) => {
      return point.lineBefore ? 
        [ 
          <circle key={index} cx={point.x} cy={point.y} r='3' fill='black' />,
          <line className='line' 
                key={'line_' + index} x1={point.x} y1={point.y} 
                x2={points[index-1].x} y2={points[index-1].y} />
        ] :
        <circle key={index} cx={point.x} cy={point.y} r='3' fill='black' />
      // return <circle key={index} cx={point.x} cy={point.y} r='3' fill='black' />
      // return <line className='line' key={index} {...line} />
    })
  }

  render() {
    return (
      <svg id='canvas' 
           onMouseDown={this.handleMouseDown}
           onMouseUp={this.handleMouseUp}
           onMouseMove={this.handleMouseMove}
           onDoubleClick={this.handleClear}
           onMouseLeave={this.handleMouseLeave}
           >
        {this.renderPoints()}
      </svg>
    )
  }

}