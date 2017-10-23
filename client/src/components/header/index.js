import React from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import PostList from '../../containers/posts/post-list/';
import { App } from '../../App';

function Icon(props) {
  return (
    <i onClick={props.handleToggle} className={`material-icons ${props.name}`}>
      {props.name}
    </i>
  )
}

function Menu(props) {
  return (
    <Drawer className={'drawer'} open={props.open}>
      <Icon handleToggle={props.handleToggle} name={'close'} />
      <Link to="/"><MenuItem onClick={props.handleToggle}>Home</MenuItem></Link>
      <Link to="/posts"><MenuItem onClick={props.handleToggle}>Posts</MenuItem></Link>
    </Drawer>
  )
}

function HeaderComponent(props) {
  return (
    <header>
      <Menu handleToggle={props.handleToggle} open={props.open} />
      <div className={'header-container'}>
        <Icon handleToggle={props.handleToggle} name={'menu'} />
        <Link to="/"><h1 className={'title'}>Djudo</h1></Link>
        <h2>the next generation of cms</h2>
        <button>Get Started</button>
      </div>
    </header>
  )
}

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return <HeaderComponent handleToggle={this.handleToggle} open={this.state.open} />
  }
}

export default Header