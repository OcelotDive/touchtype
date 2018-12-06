import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson1Instructions extends Component {
	
	
	render() {
		
	
	
	let lesson1 = 'Start with your fingers on the Home Row (Row 3) with your index fingers over F & J. For keys G & H, just reach over with the correct index fingers (L2 / R2).'
	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 1</h6>
			<article>
			{lesson1}
			</article>
			<div className="chart">
			<div className="col">
			
			<div style={{backgroundColor: "green"}}>F</div>
			<div style={{backgroundColor: "green"}}>G</div>
			<div style={{backgroundColor: "yellow"}}>H</div>
			<div style={{backgroundColor: "yellow"}}>J</div>
			
			</div>
			<div className="col">
		
			<div style={{backgroundColor: "grey"}}>L2</div>
			<div style={{backgroundColor: "grey"}}>L2</div>
			<div style={{backgroundColor: "grey"}}>R2</div>
			<div style={{backgroundColor: "grey"}}>R2</div>
		
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson1Instructions);