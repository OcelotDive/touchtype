import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson3Instructions extends Component {
	
	
	render() {
		
	
	let lesson3 = "Start with your fingers on the Home Row just like the last lesson. Here you will use all the letters on Row 3 except for the symbols which will be covered later."

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 3</h6>
			<article>
			{lesson3}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>A</div>
			<div style={{backgroundColor: "green"}}>S</div>
			<div style={{backgroundColor: "green"}}>D</div>
			<div style={{backgroundColor: "green"}}>F</div>
			<div style={{backgroundColor: "green"}}>G</div>
			<div style={{backgroundColor: "yellow"}}>H</div>
			<div style={{backgroundColor: "yellow"}}>J</div>
			<div style={{backgroundColor: "yellow"}}>K</div>
			<div style={{backgroundColor: "yellow"}}>L</div>
			<div style={{backgroundColor: "yellow"}}>;</div>
			</div>
			<div className="col">
		
			<div style={{backgroundColor: "green"}}>L5</div>
			<div style={{backgroundColor: "green"}}>L4</div>
			<div style={{backgroundColor: "green"}}>L3</div>
			<div style={{backgroundColor: "green"}}>L2</div>
			<div style={{backgroundColor: "green"}}>L2</div>
			<div style={{backgroundColor: "yellow"}}>R2</div>
			<div style={{backgroundColor: "yellow"}}>R2</div>
			<div style={{backgroundColor: "yellow"}}>R3</div>
			<div style={{backgroundColor: "yellow"}}>R4</div>
			<div style={{backgroundColor: "yellow"}}>R5</div>
		
			</div>
			</div>
			</div>
		)
	}
}
	
const mapStateToProps = (state) => {
	return {
		activeLesson: state.activeLesson,
		lessonKeys: state.lessonKeys
		
	
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        sendString: (value) => {dispatch({type: 'SENDSTRING', value: value})},
	
	
	
	
	}	
	
	
	
	
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Lesson3Instructions);