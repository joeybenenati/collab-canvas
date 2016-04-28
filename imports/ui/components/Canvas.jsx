import React, { Component, PropTypes } from 'react';
import $ from 'jquery'
import { Meteor } from 'meteor/meteor';
import d3 from 'd3'
import {Canvases} from '../../api/canvases.js'


export default class Canvas extends Component {

  constructor(props) {
    super(props);
 
    this.markLine = this.markLine.bind(this)
    this.renderPoints = this.renderPoints.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)

    this.state = {
      mouseDown: false,
      start: {
        x: null,
        y: null
      },
      end: {
        x: null,
        y:null
      }
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
    this.setState({ 
      mouseDown: true,
      start: this.getMousePos(e) 
    })
    // this.markPoint(this.getMousePos(e))
    // this.setState({ mouseDown: true })
  }

  handleMouseUp(e) {
    this.setState({ mouseDown: false })
  }

  handleMouseMove(e) {
    if (this.state.mouseDown) {
      var start = this.getMousePos(e)
      var end = this.state.start
      this.setState({
        start: start,
        end: end
      })
      this.markLine(start, end)
    }
  }

  handleClear() {
    Meteor.call('canvases.clear', this.props.id)
  }

  markLine(start, end) {
    Meteor.call('canvases.markLine', this.props.id, start, end)
  }

  renderPoints() {
    var lines = this.props.lines || []
    return lines.map( (line, index) => {
      // return <circle key={index} cx={point.x} cy={point.y} r='8' fill='black' />
      return <line className='line' key={index} {...line} />
    })
  }

  render() {
    return (
      <svg id='canvas' 
           onMouseDown={this.handleMouseDown}
           onMouseUp={this.handleMouseUp}
           onMouseMove={this.handleMouseMove}
           onDoubleClick={this.handleClear}
           onMouseLeave={this.handleMouseUp}
           >
        {this.renderPoints()}
      </svg>
    )
  }

}