import React, { Component } from 'react';

class HelloFriend extends Component {
	constructor(props){
		super(props);
		this.state ={
			name:props.name
		}
	setTimeout(this.UpdateName.bind(this), 5000);
	}
	UpdateName(){
		this.setState({name:"Juls"})
	}
	render(){
		return <h3>My Name is  {this.state.name}!</h3>
	}

}
export default HelloFriend;