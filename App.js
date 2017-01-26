import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import EventExample from './EventExample';
import HelloFriend from './HelloFriend';
class App extends Component {
	render(){
		return (<div>
				<HelloWorld name="Prince" />
				<HelloFriend />
				<EventExample />			
				</div>);
		
		
	}
}
export default App;

