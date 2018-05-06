import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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
			<Icon handleToggle={props.handleToggle} name={'close'}/>
			<Link to="/about"><MenuItem onClick={props.handleToggle}>Home</MenuItem></Link>
			<Link to="/posts"><MenuItem onClick={props.handleToggle}>Posts</MenuItem></Link>
		</Drawer>
	)
}

export function HeaderComponent(props) {
	return (
		<header>
			<div className={'menu-container flex'}>
				<div className={'flex-1 flex justify-center'}>
					<NavLink to="/about" activeClassName="menu-active">About</NavLink>
				</div>
				<div className={'flex-1 flex justify-center'}>
					<NavLink to="/portfolio" activeClassName="menu-active">Portfolio</NavLink>
				</div>
				<div className={'flex-1 flex justify-center'}>
					<NavLink to="/posts" activeClassName="menu-active">Blog</NavLink>
				</div>
				<div className={'flex-1 flex justify-center'}>
					<NavLink to="/contact" activeClassName="menu-active">Contact</NavLink>
				</div>
			</div>
		</header>
	)
}