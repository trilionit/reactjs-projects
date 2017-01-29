import React, { Component } from 'react';
import ChangeTitle from '../ChangeTitle'
import Title from '../Title';

class Main extends Component {
	constructor(){
		super();
		this.state={
			title:"My Default Title"
		}
	}
	changeTitle(title){
		this.setState({title});
	}
	render(){

		return (<div className="main">
				<Title changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
				<ChangeTitle />
			</div>);
		
		
	}
}
export default Main;

