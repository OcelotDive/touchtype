import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson17Instructions extends Component {
	
	
	render() {
		
	
	
	let lesson17 = 'The following lessons on symbols are a guide only as keyboard layouts can vary country to country, However these lessons are based on the standard Uk layout. The following symbols are all keyed with the right hand. As always start with both hands on the home row with index fingers over the f and j keys.'
	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 17</h6>
			<article>
			{lesson17}
			</article>
			<div className="chart">
			<div className="col">
			
			<div style={{backgroundColor: "yellow"}}>{"<"}</div>
			<div style={{backgroundColor: "yellow"}}>{">"}</div>
			<div style={{backgroundColor: "yellow"}}>{"[ ] { } ' : ?"}</div>
			
			
			</div>
			
			<div className="col">
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson17Instructions);