import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson19Instructions extends Component {
	
	
	render() {
		
	
	let lesson19 = 'These Symbols are more common in programming than standard typing and are a little spread out but the positioning of the fingers should now feel quite natural, just watch for when the shift key is needed. Take your time with this lesson and remember these symbols may be slightly different depending what country layout your keyboard has, these positionings are for the standard UK layout.';

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 19</h6>
			<article>
			{lesson19}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>{'` ¬ |'}</div>
			<div style={{backgroundColor: "yellow"}}>{'# @ ~ _ - + ='}</div>
			
			</div>
			<div className="col">
		
			<div style={{backgroundColor: "grey"}}>L5</div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson19Instructions);