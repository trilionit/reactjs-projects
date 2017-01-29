import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
	render(){
		return(
		<div>
			<div className="header">
				<div className='container'>
					<Nav />
				</div>
			</div>
		</div>
		);

	}

}
export default Header;