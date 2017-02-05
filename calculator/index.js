"use strict";
const createStore = require("redux").createStore;
let start=0;
// function reducer(state, action){
// 	let newState = state || start;
// 	if(action.type=="ADD"){
// 		return newState +=action.number
// 	}
// 	else if(action.type=="SUBTRACT"){
// 		return newState -= action.number
// 	}
// 	else if(action.type=="DIVIDE"){
// 		return newState/action.number
// 	}
// 	else if(action.type=="MULTIPLY"){
// 		return newState * action.number
// 	}
// 	else if(action.type=="CLEAR"){
// 		return newState =start
// 	}
// 	 return newState;
// }

function reducer(state, action){
	let newState = state || start;
	switch(action.type){
		case "ADD":
		 return newState +=action.number;
		break;

		case "SUBTRACT":
		 return newState -=action.number;
		break;

		case "DIVIDE":
		 return newState /action.number;
		break;
		case "MULTIPLY":
			return newState * action.number
		break;
		case "CLEAR":
			return start
		break;
	
	}
	

}
const store = createStore(reducer);

//listening for state changes
store.subscribe(
() => console.log(store.getState())
);

//send object actions to reducer


store.dispatch({
	type:"ADD",
	number:5
});

store.dispatch({
	type:"MULTIPLY",
	number:2
});

store.dispatch({
	type:"SUBTRACT",
	number:3
});
store.dispatch({
	type:"DIVIDE",
	number:2
});
store.dispatch({
	type:"CLEAR",
	number:12
});
//console.log(process.argv)