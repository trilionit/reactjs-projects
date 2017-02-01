import React, { Component } from 'react';
import './Toggle.css';
class ToggleFolders extends Component{
	constructor(){
		super();
		this.state={
			className:"active"
		}
		this.setToggle=this.setToggle.bind(this);
	}
	setToggle(){
		if(this.state.className==="active"){
			this.setState({className:"Toggle"})
		}
		else{
			this.setState({className:"active"})
		}
	}
	
	render(){
		return(
			<div>
				<h3 onClick={this.setToggle}>My Folders</h3>
				<ul className={this.state.className}>
				<li>File 1</li>
				<li>File 2</li>
				<li>File 3</li>
				</ul>
			</div>
			)
	}
}
export default ToggleFolders;