import React, {Component} from 'react';
import './Messages.css';
class Display extends Component{

	render(){
		return(
			<div className="top">
				<h3>My Messages</h3>
				<span>{this.props.tweet}</span>
			</div>
		);
	}
}
export default Display;