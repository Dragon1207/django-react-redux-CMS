import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import {persistStore} from 'redux-persist';

import {appStore} from './store';
import Header from './header/';
import {Home} from './home/';
import Footer from './footer/';
import Posts from './posts/'

export class App extends Component {

	constructor() {
		super();
		this.state = {rehydrated: false};
	}

	componentWillMount() {
		persistStore(appStore, {}, () => {
			this.setState({rehydrated: true});
		});
	}

	render() {
		if (!this.state.rehydrated) {
			return <p>Loading...</p>;
		}
		return (
			<div className="App">
				<Header/>
				<div className={"content-container"}>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/posts' component={Posts}/>
					</Switch>
				</div>
				<Footer/>
			</div>
		);
	}
}
