import React from 'react';
import {NavLink} from 'react-router-dom';

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