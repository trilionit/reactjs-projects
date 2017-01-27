import React, { Component } from 'react';

class StatusUpdates extends Component{
	constructor (){
		super();
	

	this.state ={
		StatusUpdates: []
	};
	this.onTextChange = this.onTextChange.bind(this);
	this.onSubmit = this.onSubmit.bind(this);
	
	}
onTextChange(event){
	event.preventDefault();
	this.setState({
		statusUpdates: []
	})
}

	onSubmit(event){
		event.preventDefault();

		let newStatusUpdates = this.state.statusUpdates;
		newStatusUpdates.push(this.enteredText);

		//or to display data
		// let newStatusUpdates =
		// [...this.state.statusUpdates, this.enteredText];

		/////////////////////////////////////////////////////

		//can be used to display in reverse order
		//eg
		// [this.enteredText, ...this.state.statusUpdates];

		
	}
	onNewStatus(event){
		event.preventDefault();
		this.setState({
			statusUpdates: newStatusUpdates
		});
	}

	render(){
		let posts =[];
		for(let i=0; i < this.state.StatusUpdates.length; i ++){
			let text = this.state.statusUpdates[i];
			let listItem = <li key={i}>{text}</li>;
			posts.push(listItem);
		}
		return(
		<div className="StatusUpdates">
			<div className="StatusUpdates-error">{this.state.error}</div>
			<form onSubmit ={this.onSubmit}>
			<input type="text" onChange={this.onTextChange}>
			<input type="submit" value="Post" />
			</form>
			<ul>{posts}</ul>
		</div>	
			)
	}

}

// map version
<ul>{
	this.state.statusUpdates.map(
	(text, i) =><li key={i}>{text}</li>
	)

}</ul>