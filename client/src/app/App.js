import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {persistStore} from 'redux-persist';

import {appStore} from './store';
import Header from './header';
import {Home} from './home';
import Footer from './footer';
import Posts from './posts'
import Loading from './loading';
import Portfolio from './portfolio';
import Images from './images';

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
			return <Loading />;
		}
		return (
			<div className="App">
				<Header/>
				<div className={"content-container"}>
					<Switch>
						<Route exact path='/' render={() => (
							<Redirect to='/about'/>
						)}/>
						<Route path='/about' component={Home}/>
						<Route path='/posts' component={Posts}/>
						<Route path='/portfolio' component={Portfolio}/>
					</Switch>
				</div>
				<Footer/>
			</div>
		);
	}
}
