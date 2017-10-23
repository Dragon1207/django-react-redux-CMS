import React from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { PostList } from '../posts/post-list/';
import { App } from '../../App';

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
            <i onClick={this.handleToggle} className={"material-icons"}>close</i>
            <Link to="/"><MenuItem onClick={this.handleToggle}>Home</MenuItem></Link>
            <Link to="/posts"><MenuItem onClick={this.handleToggle}>Posts</MenuItem></Link>
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