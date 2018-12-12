const initState = {
	timeOn: false,
	capsOnOff: false,
	shiftOnOff: false,
	currentClass: '',
	classChange: 'keyStruck',
	currentKey: null,
	testString: '',
	stringLength: 0,
	fetchText: true,
	letterCorrect: false,
	usedString: ' ',
	displayLessonsMenu: false,
	activeLesson: [],
	lessonKeys: [],
	intervalId: [],
	mistakes: [],
	mistakesLength: 0,
	mistakesTemp: 0,
	timevalue: '00:00',
	stringEnd: false,
	wpm: 0,
	finishShow: false
}


const rootReducer = (state = initState, action) => {

	switch (action.type) {
			

		//handles general key presses
		case 'PRESSED':
			//start timer
			state.timeOn = true;
			
		
		
			
				//return className to default after any key press (coloured keys)
				state.lessonKeys.map((_,i,a)=> {
				let x = document.getElementById(_);
				x.className = x.className.split(' ')[0];
			})
			
			console.log('this is the keys pressed ' + action.id.id)
			//null return incase unwanted key pressed
			if (action.id === null) {
				return {
					capsOnOff: state.capsOnOff,
					shiftOnOff: state.shiftOnOff,
					currentClass: state.currentClass,
					classChange: state.classChange,
					currentKey: state.currentKey,
					testString: state.testString,
					stringLength: state.stringLength,
					fetchText: state.fetchText,
					letterCorrect: state.letterCorrect,
					usedString: state.usedString,
					activeLesson: state.activeLesson,
					displayLessonsMenu: state.displayLessonsMenu,
					lessonKeys: state.lessonKeys,
					timeOn: state.timeOn,
					intervalId: state.intervalId,
					mistakes: state.mistakes,
					mistakesLength: state.mistakesLength,
					mistakesTemp: state.mistakesTemp,
					timevalue: state.timevalue,
					stringEnd: state.stringEnd,
					wpm: state.wpm,
					finishShow: state.finishShow
					
				}
			}
			
			
			//start timer 
			state.timeOn = true;
			
	
			
			
			
			
			//has caps been pressed
			if (action.id.id === 'CapsLock') {
				state.capsOnOff = !state.capsOnOff;
				state.currentKey = null;
			}
			else if(action.id.id === 'ShiftLeft' || action.id.id === 'ShiftRight'){
				state.shiftOnOff = true;
				state.currentKey = null;
			
			}
			else{
			
				state.currentKey =  state.shiftOnOff ? action.id.attributes[3].value : action.id.attributes[2].value;
				console.log('this is the current key ' + state.currentKey)
				//a test for mistakes
				if(state.currentKey !==state.testString[0]){
					state.mistakes.push('x');
					console.log(state.mistakes.length)
					state.mistakesLength = state.mistakes.length;
					
					
				}
				
			}
			
			//dealing withe the class of the struck key;
			state.currentClass = action.id.className;
			action.id.className = `${state.currentClass} ${state.classChange}`
			console.log(action.id.className);
			//setting the current key
			
		 
			
		if(state.currentKey === state.testString[0]){
			state.usedString = state.usedString.concat(state.testString[0]);
			state.testString = state.testString.substring(1, state.testString.length);
			state.mistakesTemp = state.mistakesLength;
			
			
			state.letterCorrect = true;
			
			
		}
			
		
			
			return {
				capsOnOff: state.capsOnOff,
				shiftOnOff: state.shiftOnOff,
				currentClass: state.currentClass,
				classChange: state.classChange,
				currentKey: state.currentKey,
				testString: state.testString,
				stringLength: state.stringLength,
				fetchText: state.fetchText,
				letterCorrect: state.letterCorrect,
				usedString: state.usedString,
				activeLesson: state.activeLesson,
				displayLessonsMenu: state.displayLessonsMenu,
				lessonKeys: state.lessonKeys,
				timeOn: state.timeOn,
				intervalId: state.intervalId,
				mistakes: state.mistakes,
				mistakesLength: state.mistakesLength,
				mistakesTemp: state.mistakesTemp,
				timevalue: state.timevalue,
				stringEnd: state.stringEnd,
				wpm: state.wpm,
				finishShow: state.finishShow
				
				
		
			}



			//handles general key release
		case 'RELEASED':
			console.log('released ' + action.id.id)
			//return key to unpressed class
			state.currentKey = null;
			if(action.id.id === 'ShiftLeft' || action.id.id === 'ShiftRight'){
				state.shiftOnOff = false;
				
			}
		
			//null return incase unwanted key pressed
			if (action.id === null) {
				state.currentKey = null;
				return {
					capsOnOff: state.capsOnOff,
					shiftOnOff: state.shiftOnOff,
					currentClass: state.currentClass,
					classChange: state.classChange,
					currentKey: state.currentKey,
					testString: state.testString,
					stringLength: state.stringLength,
					fetchText: state.fetchText,
					letterCorrect: state.letterCorrect,
					displayLessonsMenu: state.displayLessonsMenu,
					usedString: state.usedString,
					activeLesson: state.activeLesson,
					lessonKeys: state.lessonKeys,
					timeOn: state.timeOn,
					intervalId: state.intervalId,
					mistakes: state.mistakes,
					mistakesLength: state.mistakesLength,
					mistakesTemp: state.mistakesTemp,
					timevalue: state.timevalue,
					stringEnd: state.stringEnd,
					wpm: state.wpm,
					finishShow: state.finishShow
					
				
				}
			}
			// test for shift classes due to update of current key whilst shift held down
			if(action.id.id === 'ShiftLeft'){
				action.id.className = 'shiftHalf';
				state.currentKey = null;
			}
			else if(action.id.id === 'ShiftRight'){
				action.id.className = 'shiftFull';
				state.currentKey = null;
			}
			else if(action.id.id === 'Space') {
				action.id.className = 'spaceKey';
				state.currentKey = null;
			}
			else if(action.id.id === 'Enter') {
				action.id.className = 'enterKey';
				state.currentKey = null;
			}
			else if(action.id.id === 'Backspace') {
				action.id.className = 'doubleKey';
				state.currentKey = null;
			}
			else if(action.id.id === 'Tab') {
				action.id.className = 'doubleKey';
				state.currentKey = null;
			}
			else if(action.id.id === 'CapsLock') {
				
				action.id.className = state.capsOnOff ? 'doubleKeyandAbitOn' : 'doubleKeyandAbit';
				state.capsOnOff = state.capsOnOff;
				state.currentKey = null;
			}
			else{
			action.id.className = 'mainKey'
			state.currentKey = null;
				
			}
			return {
				capsOnOff: state.capsOnOff,
				shiftOnOff: state.shiftOnOff,
				currentClass: state.currentClass,
				classChange: state.classChange,
				classChange: state.classChange,
				currentKey: state.currentKey,
				testString: state.testString,
				stringLength: state.stringLength,
				fetchText: state.fetchText,
				letterCorrect: state.letterCorrect,
				usedString: state.usedString,
				activeLesson: state.activeLesson,
				displayLessonsMenu: state.displayLessonsMenu,
				lessonKeys: state.lessonKeys,
				timeOn: state.timeOn,
				intervalId: state.intervalId,
				mistakes: state.mistakes,
				mistakesLength: state.mistakesLength,
				mistakesTemp: state.mistakesTemp,
				timevalue: state.timevalue,
				stringEnd: state.stringEnd,
				wpm: state.wpm,
				finishShow: state.finishShow
			
			
			}



			//handles initial string data set
		case 'SENDSTRING':
			
		

		state.testString = action.value;
			state.stringLength = action.value.length;
			state.fetchText = false;
			return {
				capsOnOff: state.capsOnOff,
				shiftOnOff: state.shiftOnOff,
				currentClass: state.currentClass,
				classChange: state.classChange,
				currentKey: state.currentKey,
				testString: state.testString,
				stringLength: state.stringLength,
				fetchText: state.fetchText,
				usedString: state.usedString,
				displayLessonsMenu: state.displayLessonsMenu,
				activeLesson: state.activeLesson,
				lessonKeys: state.lessonKeys,
				timeOn: state.timeOn,
				intervalId: state.intervalId,
				mistakes: state.mistakes,
				mistakesLength: state.mistakesLength,
				mistakesTemp: state.mistakesTemp,
				timevalue: state.timevalue,
				stringEnd: state.stringEnd,
				wpm: state.wpm,
				finishShow: state.finishShow
			
			
			}
		
			
		case 'LESSONSMENU':
			
			//returning className to default after menu open
			state.lessonKeys.map((_,i,a)=> {
				let x = document.getElementById(_);
				x.className = x.className.split(' ')[0];
			})
			state.displayLessonsMenu = !state.displayLessonsMenu
			
			return {
				capsOnOff: state.capsOnOff,
				shiftOnOff: state.shiftOnOff,
				currentClass: state.currentClass,
				classChange: state.classChange,
				currentKey: state.currentKey,
				testString: state.testString,
				stringLength: state.stringLength,
				fetchText: state.fetchText,
				usedString: state.usedString,
				displayLessonsMenu: state.displayLessonsMenu,
				activeLesson: state.activeLesson,
				lessonKeys: state.lessonKeys,
				timeOn: state.timeOn,
				intervalId: state.intervalId,
				mistakes: state.mistakes,
				mistakesLength: state.mistakesLength,
				mistakesTemp: state.mistakesTemp,
				timevalue: state.timevalue,
				stringEnd: state.stringEnd,
				wpm: state.wpm,
				finishShow: state.finishShow
				
			
			}
			
		case 'STARTLESSON':
			//reset most variable on new lesson start
			state.timeOn = false;
			state.finishShow = false;
			state.stringEnd = false;
			console.log(state.intervalId)
			clearInterval(state.intervalId[0]);
			state.mistakes = [];
			state.mistakesLength = 0;
			state.mistakesTemp = 0;
			state.usedString = '';
			state.activeLesson = action.lessonNumber;
			
			state.lessonKeys = action.keys;
			if(action.code == 1){state.displayLessonsMenu = !state.displayLessonsMenu}
			//assigning colours to the left and right hand keys
			state.lessonKeys.map((_,i,a)=> {
				if(_ === 'KeyQ' || _ === 'KeyW' || _ === 'KeyE' || _ === 'KeyR' ||  _ === 'KeyT' ||  _ === 'KeyA' ||  _ === 'KeyS' ||  _ === 'KeyD' ||  _ === 'KeyF' ||  _ === 'KeyG' ||  _ === 'KeyX' ||  _ === 'KeyZ' ||  _ === 'KeyC' ||  _ === 'KeyV' ||  _ === 'KeyB' || _ === 'Digit1' || _ === 'Digit2' || _ === 'Digit3' || _ === 'Digit4' || _ === 'Digit5' || _ === 'ShiftLeft' || _ === 'IntlBackslash' || _ === 'Backquote'){
				let x = document.getElementById(_);
				
				x.className = x.className + ' animated pulse infinite green';
				}
				else if(_ === 'Space') {
					let x = document.getElementById(_);
					x.className = x.className;
				}
				else {
				let x = document.getElementById(_);
				
				x.className = x.className + ' animated pulse infinite yellow';	
					
				}
			})
			state.displayLessonsMenu = !state.displayLessonsMenu
			state.fetchText = true;
			
			return {
				capsOnOff: state.capsOnOff,
				shiftOnOff: state.shiftOnOff,
				currentClass: state.currentClass,
				classChange: state.classChange,
				currentKey: state.currentKey,
				testString: state.testString,
				stringLength: state.stringLength,
				fetchText: state.fetchText,
				usedString: state.usedString,
				displayLessonsMenu: state.displayLessonsMenu,
				activeLesson: state.activeLesson,
				lessonKeys: state.lessonKeys,
				timeOn: state.timeOn,
				intervalId: state.intervalId,
				mistakes: state.mistakes,
				mistakesLength: state.mistakesLength,
				mistakesTemp: state.mistakesTemp,
				timevalue: state.timevalue,
				stringEnd: state.stringEnd,
				wpm: state.wpm,
				finishShow: state.finishShow
				
			
			
			}
			
			case 'INTERVALID':
				state.intervalId = action.value;
				console.log(state.intervalId)
			
			return {
				capsOnOff: state.capsOnOff,
				shiftOnOff: state.shiftOnOff,
				currentClass: state.currentClass,
				classChange: state.classChange,
				currentKey: state.currentKey,
				testString: state.testString,
				stringLength: state.stringLength,
				fetchText: state.fetchText,
				usedString: state.usedString,
				displayLessonsMenu: state.displayLessonsMenu,
				activeLesson: state.activeLesson,
				lessonKeys: state.lessonKeys,
				timeOn: state.timeOn,
				intervalId: state.intervalId,
				mistakes: state.mistakes,
				mistakesLength: state.mistakesLength,
				mistakesTemp: state.mistakesTemp,
				timevalue: state.timevalue,
				stringEnd: state.stringEnd,
				wpm: state.wpm,
				finishShow: state.finishShow
				
			
			
			}
			
			
			case 'SENDTIMEVALUE':
				state.timevalue = action.time;
				console.log('this is the time value ' + state.timevalue)
			
			return {
				capsOnOff: state.capsOnOff,
				shiftOnOff: state.shiftOnOff,
				currentClass: state.currentClass,
				classChange: state.classChange,
				currentKey: state.currentKey,
				testString: state.testString,
				stringLength: state.stringLength,
				fetchText: state.fetchText,
				usedString: state.usedString,
				displayLessonsMenu: state.displayLessonsMenu,
				activeLesson: state.activeLesson,
				lessonKeys: state.lessonKeys,
				timeOn: state.timeOn,
				intervalId: state.intervalId,
				mistakes: state.mistakes,
				mistakesLength: state.mistakesLength,
				mistakesTemp: state.mistakesTemp,
				timevalue: state.timevalue,
				stringEnd: state.stringEnd,
				wpm: state.wpm,
				finishShow: state.finishShow
				
			
			
			}
			
			case 'SENDEND':
				state.stringEnd = true;
				state.finishShow = true;
				clearInterval(state.intervalId[0]);
				console.log(state.newClass);
		
			return {
				capsOnOff: state.capsOnOff,
				shiftOnOff: state.shiftOnOff,
				currentClass: state.currentClass,
				classChange: state.classChange,
				currentKey: state.currentKey,
				testString: state.testString,
				stringLength: state.stringLength,
				fetchText: state.fetchText,
				usedString: state.usedString,
				displayLessonsMenu: state.displayLessonsMenu,
				activeLesson: state.activeLesson,
				lessonKeys: state.lessonKeys,
				timeOn: state.timeOn,
				intervalId: state.intervalId,
				mistakes: state.mistakes,
				mistakesLength: state.mistakesLength,
				mistakesTemp: state.mistakesTemp,
				timevalue: state.timevalue,
				stringEnd: state.stringEnd,
				wpm: state.wpm,
				finishShow: state.finishShow
				
			
			
			}
			case 'SENDWPM':
			
				state.wpm = Math.round(action.value);
				
			return {
				capsOnOff: state.capsOnOff,
				shiftOnOff: state.shiftOnOff,
				currentClass: state.currentClass,
				classChange: state.classChange,
				currentKey: state.currentKey,
				testString: state.testString,
				stringLength: state.stringLength,
				fetchText: state.fetchText,
				usedString: state.usedString,
				displayLessonsMenu: state.displayLessonsMenu,
				activeLesson: state.activeLesson,
				lessonKeys: state.lessonKeys,
				timeOn: state.timeOn,
				intervalId: state.intervalId,
				mistakes: state.mistakes,
				mistakesLength: state.mistakesLength,
				mistakesTemp: state.mistakesTemp,
				timevalue: state.timevalue,
				stringEnd: state.stringEnd,
				wpm: state.wpm,
				finishShow: state.finishShow
				
			
			
			}
			
				case 'PANELOFF':
			
				state.finishShow = false;
				
			return {
				capsOnOff: state.capsOnOff,
				shiftOnOff: state.shiftOnOff,
				currentClass: state.currentClass,
				classChange: state.classChange,
				currentKey: state.currentKey,
				testString: state.testString,
				stringLength: state.stringLength,
				fetchText: state.fetchText,
				usedString: state.usedString,
				displayLessonsMenu: state.displayLessonsMenu,
				activeLesson: state.activeLesson,
				lessonKeys: state.lessonKeys,
				timeOn: state.timeOn,
				intervalId: state.intervalId,
				mistakes: state.mistakes,
				mistakesLength: state.mistakesLength,
				mistakesTemp: state.mistakesTemp,
				timevalue: state.timevalue,
				stringEnd: state.stringEnd,
				wpm: state.wpm,
				finishShow: state.finishShow
				
			
			
			}
			
		
	
			
	}



	return state;
}

export default rootReducer;
