import React from 'react';
import { render } from 'react-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <header>
          <i onClick={this.handleToggle} className={"material-icons menu"}>menu</i>
          <h1 className={'title'}>Djudo</h1>
          <h2>the next generation of cms</h2>
          <button>Get Started</button>
        </header>
      </div>
    )
  }
}