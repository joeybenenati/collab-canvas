import React, { Component } from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      color: 'black',   
    };
  }

  handleChange(e, index, value) {
    this.props.changeColor(value)
  }

  render() {
    return (
      <DropDownMenu className={this.props.color} value={this.props.color} onChange={this.handleChange}>
        <MenuItem className='black' value={'black'} primaryText="Black"/>
        <MenuItem className='blue' value={'blue'} primaryText="Blue"/>
        <MenuItem className='green' value={'green'} primaryText="Green"/>
        <MenuItem classNam='red' value={'red'} primaryText="Red"/>
      </DropDownMenu>
    )
  }
}