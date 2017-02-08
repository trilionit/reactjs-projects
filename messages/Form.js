import React, {Component} from 'react';

class Form extends Component{

	sendForm(event){
		event.preventDefault();
		let tweet = this.textarea.value;
		this.props.sendTweet(tweet);
		console.log(this.textarea.value);
	}



	render(){
		return(
			<div className="bottom">
				<form onSubmit={this.sendForm.bind(this)}>
					<textarea ref={(textarea) => this.textarea = textarea}></textarea>
					<input type="submit" value="Post" />
				</form>
			</div>
		);
	}
}
export default Form;



