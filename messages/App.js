import React, {Component} from 'react';
import './Messages.css';
import Display from './Display';
import Form from './Form';

class App extends Component{
	constructor(){
		super();
		this.state={
			tweet:"Type your message..."
		}
	}
	
	sendTweet(tweet){
		this.setState({tweet});
	}
	render(){
		return(<div>
				<Display tweet={this.state.tweet} />
				 <Form sendTweet={this.sendTweet.bind(this)} />
			   </div>
			   )
	}
}
export default App;