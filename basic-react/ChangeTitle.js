import React, { Component } from 'react';

class ChangeTitle extends Component{
onSubmit(event){
	event.preventDefault();
	let title = event.target.value;
	this.props.ChangeTitle(title);
	console.log(title);
}
	render(){
		return(
			<div>
				<input type="text" onSubmit={this.props.title}  />
				<input type="submit" value="Post" />
			</div>
		)
	}

}

export default ChangeTitle;