import React, { Component } from 'react';

class HelloWorld extends Component {
		render(){
			return (
				<div>
				<h3>My Name is {this.props.name} ...</h3>
					<h2>Whats yours? ...</h2>
				</div>)
		}
}
export default HelloWorld;