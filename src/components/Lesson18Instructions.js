import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson18Instructions extends Component {
	
	
	render() {
		
	
	let lesson18 = 'These Symbols are all along Row 1 and should already be familar positions, but remember to activate the shift key to use the alternative function of a given key.';

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 18</h6>
			<article>
			{lesson18}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>!</div>
			<div style={{backgroundColor: "green"}}>"</div>
			<div style={{backgroundColor: "green"}}>£</div>
			<div style={{backgroundColor: "green"}}>$</div>
			<div style={{backgroundColor: "green"}}>%</div>
			<div style={{backgroundColor: "yellow"}}>^</div>
			<div style={{backgroundColor: "yellow"}}>&</div>
			<div style={{backgroundColor: "yellow"}}>*</div>
			<div style={{backgroundColor: "yellow"}}>(</div>
			<div style={{backgroundColor: "yellow"}}>)</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson18Instructions);