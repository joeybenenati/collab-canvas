import React, { Component } from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap'

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      color: 'black',   
    };
  }

  handleChange(e, index, value) {
    // console.log(this)
    this.props.changeColor(value)
  }

  render() {
    return (
      <DropDownMenu className={this.props.color} value={this.props.color} onChange={this.handleChange}>
        <MenuItem className='black' value={"black"} primaryText="Black"/>
        <MenuItem className='blue' value={'blue'} primaryText="Blue"/>
        <MenuItem className='green' value={'green'} primaryText="Green"/>
        <MenuItem classNam='red' value={'red'} primaryText="Red"/>
      </DropDownMenu>
    )
  }
}