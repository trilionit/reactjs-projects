import React, { Component } from 'react';
import UserName from '../UserName';
import Timer from '../Timer';

class Main extends Component {
	render(){
		const name = "Prince";
		return (<div className="main">
			<UserName user={name} />
			<Timer />

			</div>);
		
		
	}
}
export default Main;

