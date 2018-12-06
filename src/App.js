import React, { Component } from 'react';
import Keyboard from './components/Keyboard';
import TextArea from './components/TextArea';
import LessonArea from './components/LessonArea';
import ControlPanel from './components/ControlPanel';
import TimeFrame from './components/TimeFrame';
import Info from './components/Info';
import InstructionArea from './components/InstructionArea';
import FinishPanel from './components/FinishPanel';
class App extends Component {
  render() {
    return (
   
      <div className="App">
   	
	
       <TextArea />
		<ControlPanel />
		
		<Keyboard />
		
		<LessonArea />
		<TimeFrame />
		<InstructionArea/>
		<FinishPanel />
      </div>
     
    );
  }
}

export default App;
