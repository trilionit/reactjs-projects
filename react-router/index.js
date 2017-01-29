import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './App';
import Home from './react-router/Home';
import About from './react-router/About';


ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/" component={Home} />
			<Route path="/about" component={About} />
		</Route>
	</Router>,

	document.getElementById('root')
);

