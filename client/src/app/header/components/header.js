import React from 'react';
import {Link} from 'react-router-dom';
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
			<Link to="/"><MenuItem onClick={props.handleToggle}>Home</MenuItem></Link>
			<Link to="/posts"><MenuItem onClick={props.handleToggle}>Posts</MenuItem></Link>
		</Drawer>
	)
}

export function HeaderComponent(props) {
	return (
		<header>
			<Menu handleToggle={props.handleToggle} open={props.open}/>
			<div className={'header-container'}>
				<Icon handleToggle={props.handleToggle} name={'menu'}/>
				<Link to="/"><h1 className={'title'}>Djudo</h1></Link>
				<h2>the next generation of cms</h2>
				<button>Get Started</button>
			</div>
		</header>
	)
}