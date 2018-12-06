import React, { Component } from 'react';
import { connect } from 'react-redux';



class FinishPanel extends Component {
	

	
	render() {
		let onScreen = ['bounceInLeft','bounceInRight','lightSpeedIn'];
		let offScreen = ['bounceOutLeft','bounceOutRight',,'lightSpeedOut'];
		 let random1 = Math.floor((Math.random() * 3) + 1);
		let random2 = Math.floor((Math.random() * 3) + 1);
		
		
	let	finishClass = this.props.finishShow ? 'finishPanel animated ' + onScreen[random1] : 'finishPanel animated ' + offScreen[random2];
		
		return (
		this.props.finishShow ?
		<section className={finishClass} ref="finishPanel">
			<h2>COMPLETED!</h2>
			<h3>WELL DONE</h3>
			<div className="circle"></div>
		
		</section>
		:
			<section>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		finishShow: state.finishShow
	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        startLesson: (lessonNumber,keys) => {dispatch({type: 'STARTLESSON', lessonNumber: lessonNumber, keys: keys})},
		
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FinishPanel);