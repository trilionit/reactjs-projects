import React, { Component } from 'react';
// Adding local state to a class
// clock/timer example
class Timer extends Component{
	constructor(){
		super();
		this.state= {date:new Date()};		
	}
	
	render(){
		return(
			<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			);
	}
}
export default Timer;