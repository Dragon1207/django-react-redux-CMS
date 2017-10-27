import React from 'react';
import {HeaderComponent} from '../components/header';

class HeaderContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
	}

	handleToggle = () => this.setState({open: !this.state.open});

	render() {
		return <HeaderComponent handleToggle={this.handleToggle} open={this.state.open}/>
	}
}

export default HeaderContainer