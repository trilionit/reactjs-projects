import React, { Component } from 'react';
//Introducing More JSX

class UserName extends Component {
	constructor(){
	  super();
	  this.state= {firstName: "Prince"}	
	}
render(){
	setTimeout(() =>{
		this.setState({firstName:"Bobbie"})
		}, 4000)

	return(
		<h1>Hello, {this.state.firstName}</h1>
		);
	
	}
}
export default UserName;

