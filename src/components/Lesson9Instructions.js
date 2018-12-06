import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson9Instructions extends Component {
	
	
	render() {
		
	
	let lesson9 = 'Here you will learn the outer keys of Row 4. Left hand - Z L5 (Pinky), X L4 (Ring), C L3 (Middle), Right hand - Comma R3 (Middle), Period R4 (Ring), Forward Slash R5 (Pinky).';

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 9</h6>
			<article>
			{lesson9}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>Z</div>
			<div style={{backgroundColor: "green"}}>X</div>
			<div style={{backgroundColor: "green"}}>C</div>
			<div style={{backgroundColor: "grey"}}>V</div>
			<div style={{backgroundColor: "grey"}}>B</div>
			<div style={{backgroundColor: "grey"}}>N</div>
			<div style={{backgroundColor: "grey"}}>M</div>
			<div style={{backgroundColor: "yellow"}}>,</div>
			<div style={{backgroundColor: "yellow"}}>.</div>
			<div style={{backgroundColor: "yellow"}}>/</div>
			</div>
			<div className="col">
		
			<div style={{backgroundColor: "grey"}}>L5</div>
			<div style={{backgroundColor: "grey"}}>L4</div>
			<div style={{backgroundColor: "grey"}}>L3</div>
			<div style={{backgroundColor: "grey"}}>L2</div>
			<div style={{backgroundColor: "grey"}}>L2</div>
			<div style={{backgroundColor: "grey"}}>R2</div>
			<div style={{backgroundColor: "grey"}}>R2</div>
			<div style={{backgroundColor: "grey"}}>R3</div>
			<div style={{backgroundColor: "grey"}}>R4</div>
			<div style={{backgroundColor: "grey"}}>R5</div>
		
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson9Instructions);