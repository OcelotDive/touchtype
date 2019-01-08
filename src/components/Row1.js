import React, { Component } from 'react';
import { connect } from 'react-redux';

class Row1 extends Component {
	
	//Start keypress listener.
	componentWillMount(){
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
	document.addEventListener("keyup", this.handleKeyUp.bind(this));	
}
	
	
	

	
	handleKeyPress = (e) => {
	
		e.preventDefault();
		

	
	
	if(e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 91 || e.keyCode === 93){
		return false;
	}
		
	else if (e.code){	
		alert('e.code' + e.code)
	let currentKey = document.getElementById(e.code);
	
	this.props.classChange(currentKey);	
	}
	else{
	
		let currentKey;
		switch (e.keyCode) {

				case 49:
					currentKey = "Digit1";
					break;
				case 50:
					currentKey = "Digit2";
					break;
				case 51:
					currentKey = "Digit3";
					break;
				case 52:
					currentKey = "Digit4";
					break;
				case 53:
					currentKey = "Digit5";
					break;
				case 54:
					currentKey = "Digit6";
					break;
				case 55:
					currentKey = "Digit7";
					break;
				case 56:
					currentKey = "Digit8";
					break;
				case 57:
					currentKey = "Digit9";
					break;
				case 48:
					currentKey = "Digit0";
					break;
				
				default:
					
					break;


			}
		alert('currentKey' + currentKey)
		this.props.classChange(currentKey);
	}	
		
	}
	
	
	
	handleKeyUp = (e) => {
	if(e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 91 || e.keyCode === 93){
		return false;
	}
	else if (e.code){
	let releasedKey = document.getElementById(e.code);
	this.props.classChangeOff(releasedKey);
		}
	else{
		let releasedKey;
		switch (e.keyCode) {

				case 49:
					releasedKey = "Digit1";
					break;
				case 50:
					releasedKey = "Digit2";
					break;
				case 51:
					releasedKey = "Digit3";
					break;
				case 52:
					releasedKey = "Digit4";
					break;
				case 53:
					releasedKey = "Digit5";
					break;
				case 54:
					releasedKey = "Digit6";
					break;
				case 55:
					releasedKey = "Digit7";
					break;
				case 56:
					releasedKey = "Digit8";
					break;
				case 57:
					releasedKey = "Digit9";
					break;
				case 48:
					releasedKey = "Digit0";
					break;
				
				default:
					
					break;


			}
		
		this.props.classChangeOff(releasedKey);
	}	
		
	}	
		
	}
	
	
	
	render() {

		return (
			this.props.flagSelect1 === 'usLayout flagHighlighted' ?
			
			<div className="row1">
			<div className="mainKey" id="Backquote" val="ˋ" secval="~">
			~<br/>
			{"`"}
			</div>
			<div className="mainKey" id="Digit1" val="1" secval="!">
			!<br/>
			1
			</div>
			<div className="mainKey" id="Digit2" val="2" secval='@'>
			@<br/>
			2
			</div>
			<div className="mainKey" id="Digit3" val="3" secval="#">
			#<br/>
			3
			</div>
			<div className="mainKey" id="Digit4" val="4" secval="$">
			$<br/>
			4
			</div>
			<div className="mainKey" id="Digit5" val="5" secval="%">
			%<br/>
			5
			</div>
			<div className="mainKey" id="Digit6" val="6" secval="^">
			^<br/>
			6
			</div>
			<div className="mainKey" id="Digit7" val="7" secval="&">
			&<br/>
			7
			</div>
			<div className="mainKey" id="Digit8" val="8" secval="*">
			*<br/>
			8
			</div>
			<div className="mainKey" id="Digit9" val="9" secval="(">
			(<br/>
			9
			</div>
			<div className="mainKey" id="Digit0" val="0" secval=")">
			)<br/>
			0
			</div>
			<div className="mainKey" id="Minus" val="-" secval="_">
			_<br/>
			-
			</div>
			<div className="mainKey" id="Equal" val="=" secval="+">
			+<br/>
			=
			</div>
			<div className="doubleKey" id="Backspace" val="null" secval="null">
			&larr;	<br/>
				<br/>
			</div>
			</div>
			:
			<div className="row1">
			<div className="mainKey" id="Backquote" val="ˋ" secval="¬">
			¬<br/>
			{"`"}
			</div>
			<div className="mainKey" id="Digit1" val="1" secval="!">
			!<br/>
			1
			</div>
			<div className="mainKey" id="Digit2" val="2" secval='"'>
			"<br/>
			2
			</div>
			<div className="mainKey" id="Digit3" val="3" secval="£">
			£<br/>
			3
			</div>
			<div className="mainKey" id="Digit4" val="4" secval="$">
			$<br/>
			4
			</div>
			<div className="mainKey" id="Digit5" val="5" secval="%">
			%<br/>
			5
			</div>
			<div className="mainKey" id="Digit6" val="6" secval="^">
			^<br/>
			6
			</div>
			<div className="mainKey" id="Digit7" val="7" secval="&">
			&<br/>
			7
			</div>
			<div className="mainKey" id="Digit8" val="8" secval="*">
			*<br/>
			8
			</div>
			<div className="mainKey" id="Digit9" val="9" secval="(">
			(<br/>
			9
			</div>
			<div className="mainKey" id="Digit0" val="0" secval=")">
			)<br/>
			0
			</div>
			<div className="mainKey" id="Minus" val="-" secval="_">
			_<br/>
			-
			</div>
			<div className="mainKey" id="Equal" val="=" secval="+">
			+<br/>
			=
			</div>
			<div className="doubleKey" id="Backspace" val="null" secval="null">
			&larr;	<br/>
				<br/>
			</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		flagSelect1: state.flagSelect1,
		flagSelect2: state.flagSelect2

	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		typeAdd: (value) => {dispatch({type: 'TYPEADD', value: value})},
		deleteChar: () => {dispatch({type: 'DELETE'})},
		classChange: (id) => {dispatch({type: 'PRESSED', id: id})},
		classChangeOff: (id) => {dispatch({type: 'RELEASED', id: id})}
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Row1);