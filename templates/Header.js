import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
	render(){
		return(
			<div>
			<div className='container' align='center'>
				<div className='logo'><img src='images/logo.png' width='110' alt='logo' /></div>
				<nav>
					<ul>
					<li><a href='#'>Home</a></li><li><a href='#blog'>Blog</a></li>
					<li><a href='#'>Articles</a></li>
					<li><a href='#'>About this Blog</a></li>
					<li><a href='#'>Contact</a></li>
					</ul>

				</nav>
				</div>
			</div>
			</div>

			);

	}

}
export default Header;