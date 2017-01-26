import React, { Component } from 'react';

class ShoppingList extends React.Component {
	render(){
		return(
			<div className="shopping-list">
				<h1>Shopping List for {this.props.name}</h1>
				<div className="list">
					<ul>
						<li>Facebook</li>
						<li>Instagram</li>
						<li>Oculus</li>
						<li>WhatsApp</li>
					</ul>
				</div>
			</div>
		);
	}
}
export default ShoppingList;