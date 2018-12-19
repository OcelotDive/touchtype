import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lorem from 'react-lorem-component';
class TextArea extends Component {
	
	

	
	render() {
		let words = ['ad','dolor', '@']
		let lesson1 = shuffle(['fjfjfj', 'ffj', 'jfjf','jjf', 'fgfg', 'jhjh', 'hghg', 'ghgh', 'jg', 'jh', 'hj', 'fhh', 'hfhf']);
		let lesson2 = shuffle(['asd', 'dad', 'sad', 'kl;', ';lk', 'kkssd', ';a;a', 'sksk', 'dks', 'lks', ';d;a', 'skl', 'l;a', 'kds;', 'a;sldk', ';dlska']);
		let lesson3 = shuffle(['jfa;', 'ghfja', ';ghjd', ';;aadk', 'fjkdal', ';lasfjgh', 'hl', 'gs', 'ghld', 'gha;ls', 'hhgklssa', 'lghdaslk;'])
		let lesson4 = shuffle(['ry', 'iiuurtiy', 'uiuirtrt', 'ittriuuty', 'ytytriiu', 'rutyirriyt', 'uyi', 'tryui', 'ytriiuy', 'iuy', 'ttry', 'truy', 'yyrrtiu']);
		let lesson5 = shuffle(['woopwq', 'oopqqw', 'ppoopow', 'qwqwop', 'popqw', 'woqp', 'opwooqqp', 'wop', 'pow', 'qwop', 'owow', 'owpowqow', 'qwppqqoow', 'op', 'qw', 'owpq']);
		let lesson6 = shuffle(['qpiou', 'toop', 'prot', 'iopert', 'iwpqiru', 'poor', 'rotter', 'iutwpo', 'tere', 'pouy', 'qytio', 'eerie', 'tyr', 'trtry', 'uot', 'trew', 'pwipe', 'ooree', 'qwerty', 'pyytrre']);
		let lesson7 = shuffle(['qled', ';ilhde', 'ghieos', 'ppqlshg', 'jfiedo', 'yqpe', 'yi;s;;eid', 'poiedgg', 'gheidkow', 'qllhiel', 'ikpkqlqleiy', 'idreekjg', 'jfpofjeit', 'idttqphg', 's;id', 'ied', 'iss;ytqaap', 'idkels', 'poddl;;slke']);
		
		
		let lesson8 = shuffle(['vvbbnnmm', 'vb', 'nm', 'mvbn', 'vbnm', 'nvbm', 'vvbbnnmm',  'nmvn', 'bbmmnvb', 'mvmbmmnm', 'vbvbmnnmv', 'vbbnnbmv', 'nbmv']);
		let lesson9 = shuffle(['zxc', ',./', '//zx', 'cc./', ',.ccx/', 'zzxx..//cc', 'c.z.,c', 'c/.xz', '//,,cxz', 'z.cv', ',,cxz', 'z.xc,...x', 'xc,.///zzcx', '.x,,//zzc']);
		let lesson10 = shuffle([',xc', 'x,mnvb', 'm,xmn/', 'bv,x/', 'nbmv/', ',,cnzb', 'x,mnvb', '/bnzc', 'xm,/vz', 'nvmz', 'b/x,z', 'bmz/,', '/bz,cx', 'm/z,vx']);
		let lesson11 = shuffle(['qni', ';tybv', ',vupoc', 'hct', '/biq', ',p;qw', 'czyop', 'wbv', 'p,gse', 'synb', 'pkl', 'nigh', 'engz', 'ug,z', 'heq/i', 'bzxyti', 'iqwsl']);
		let lesson12 = shuffle(['123', '90', '391', '2293', '031', '99002', '19203', '0912', '332900', '1139', '9012', '2013']);
		let lesson13 = shuffle(['45678', '5867', '6745', '7654', '8745', '8564', '5678', '4756', '8654', '4685']);
		let lesson14 = shuffle(['/7 g', 'w7,z8', '09qwt', 'bv85', ';sa95', 'g7h1', 'vx14', '5ien', 'cpb3', 'j75f', 'v46h', '8,z02', '5;vm/', '1x,', '38tyvbn', '7,egz', '0/,36wsk', 'ks9d']);
		
		let lesson15 = shuffle(['uxW', 'P/,We', 'Gh/jf', 'ETvIO/', 'UiReQ', 'Thi,/F', 'AeiOU', '4rH8', '1IP4vn', 'Yo40', 'Qui7R', 'DaV3', '0cE', 'lOT10', 'V;/34', 'hGIPw83' ]);
		let lesson16 = shuffle(["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part","Because","should", "Could", 'Type', 'Game', 'Tree', 'Fallen', 'Gusty', 'Place', 'Quiet', 'Reading', 'Place', 'Manage', 'Team', 'Picture', 'Ritzy', 'Posh', 'Between', 'Against', 'Screen', 'Castle', 'Team', 'Sense', 'Thought', 'Style', 'Program', 'Laugh', 'Fish', 'Holiday', 'Member', 'Dream', 'Direct', 'Force', 'Bring', 'Wine', 'Stagger', 'Oscar']);
		let lesson17 = shuffle(["'?\\", ":[]", "<{:", ">?\\]", "'\\[?}", "?>", "'>?\\", "['}:", ">?[", "'}]"]);
		let lesson18 = shuffle(['!£', '"(^', '^%$', '%£)', '(*)"', '&$%"', ')!*%', '£$%^&', '&^£!', '(*&"^)']);
		let lesson19 = shuffle(['ˋ|@', '~#', 'ˋ¬-=_', 'ˋ¬+ˋ@~', '#¬-=', '=|@#', '_-+=', '~¬@|+', '¬+=', '#+_', '#ˋ=~|']);
		let lesson20 = shuffle(['ˋ*)', '@!#_', '+"$~', '¬($|)', '\'*ˋ', '_"+?', '&^¬|', ':(<ˋ\\', '>#¬+', '||>&', '@ˋ¬$%', '%^*', '=@!¬~']);
		let lesson21 = shuffle(["*.ei", "iIqP3", '-_=qi', "<\\3/g", "Hh8/.", "Qiu8[", ",#ˋ", "1&s%", "^ip+", "+Gg|", "e'Ez}", "Bc)A!", "#¬V", "0=kK;", "fS~|\|", 'P"h}n#', "gm*,R5$", 'weop%', "y@qGG¬", "hiri8", "epo,9£", "#:8d2", "Qwi1!2", "Z?82c", "/039G*", "H*(U)()", "bnj)&*", "@'kjkh7", "TK>/", ">£sw", ")&JG76", "mcnvb74", "dui_=645", "~;j57", "MN", ".jf93.", "9G", "|F6", "$y{gdr}", "09uh(", "¬j8ˋ", "90!hlrG", "JQWin", "^YT@gh", "Ii57Pu", "U(!wzc", "tTˋ9ˋnZ"]);
		
		let textString;
		let currentLesson = words;
		let seed = 0;
		
        function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

        // Pick a remaining element...
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;

    // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
     }

       return array;
   }
		
		
		
		
		//choose which array to use depending on lesson clicked
		switch(this.props.activeLesson) {
				case 'lesson1': 
					currentLesson = lesson1;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson2':
					currentLesson = lesson2;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson3':
					currentLesson = lesson3;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson4':
					currentLesson = lesson4;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
				
			case 'lesson5':
					currentLesson = lesson5;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson6':
					currentLesson = lesson6;
					seed = Math.floor((Math.random() * 20) + 1)
					break;	
			case 'lesson7':
					currentLesson = lesson7;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson8':
					currentLesson = lesson8;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson9':
					currentLesson = lesson9;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson10':
					currentLesson = lesson10;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson11':
					currentLesson = lesson11;
					seed = Math.floor((Math.random() * 8) + 1)
					break;
			case 'lesson12':
					currentLesson = lesson12;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson13':
					currentLesson = lesson13;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson14':
					currentLesson = lesson14;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			
			case 'lesson15':
					currentLesson = lesson15;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
				
			case 'lesson16':
					currentLesson = lesson16;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
				
			case 'lesson17':
					currentLesson = lesson17;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
				
			case 'lesson18':
					currentLesson = lesson18;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			
			case 'lesson19':
					currentLesson = lesson19;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
				
			case 'lesson20':
					currentLesson = lesson20;
					seed = Math.floor((Math.random() * 20) + 1)
					break;	
			
			case 'lesson21':
					currentLesson = lesson21;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			default:
				break;
			}
		
		
		
		setTimeout(()=>{

			console.log(this.props.letterCorrect)
			
		let innerText = this.refs.innerText;
		let innerTextUsed = this.refs.innerTextUsed;
			
			
		//textString returns the random string from the Lorem generator lowercase at the moment for lower lessons
		if(currentLesson === lesson1 || currentLesson === lesson2 || currentLesson === lesson3 || currentLesson === lesson4 || currentLesson === lesson5 || currentLesson === lesson6 || currentLesson === lesson7 || currentLesson === lesson8 || currentLesson === lesson12 || currentLesson === lesson13 || currentLesson === lesson17 || currentLesson === lesson18 || currentLesson === lesson19 || currentLesson === lesson20) {
		textString = document.getElementsByTagName('p')[0].firstChild.data.replace(/\./g,'').toLowerCase();
		}
		else if(currentLesson === lesson9 || currentLesson === lesson10 || currentLesson === lesson11 || currentLesson === lesson14)
		{
			textString = document.getElementsByTagName('p')[0].firstChild.data.toLowerCase();
		}
		else {
			textString = document.getElementsByTagName('p')[0].firstChild.data;
		}
			
		//send string to state once then return after each character struck;	
		if(this.props.needText){
		this.props.sendString(textString)
		
		
		}
		else{
			if(this.props.testString.length === 0){
				this.props.sendEnd();
				
			}
		// test which highlight to apply based on key correct or not
		if(this.props.mistakesLength > this.props.mistakesTemp) {
		innerText.innerHTML = this.props.testString.length > 0 ? '<strong className="highlight">' + this.props.testString[0] + '</strong>' + this.props.testString.substring(1,this.props.testString.length) : '<span className="highlight">' + ' ' + '</span>' + this.props.testString.substring(1,this.props.testString.length);
			
			
		}
		else {
			
		innerText.innerHTML = this.props.testString.length > 0 ? '<span className="highlight">' + this.props.testString[0] + '</span>' + this.props.testString.substring(1,this.props.testString.length) : '<span className="highlight">' +' ' + '</span>' + this.props.testString.substring(1,this.props.testString.length)  ;	
		}
			
			
		innerTextUsed.value =  this.props.usedString.split('').reverse().join('');
			
			
		}
			
		
		
		})
		
	
		
		return(
			<div className="typingArea">
			<form>
			<div className="textbox" id="textarea_id" ref="textarea_id" type="textArea" readonly='true' >
			<div className="marker"></div>
			<div className="innerTextBox" ref="innerText" readOnly="true"></div>
			<textArea className="innerTextBoxUsed" ref="innerTextUsed" readOnly="true"   type="textArea"></textArea>
			</div>
			
			</form>
			<Lorem id="textGenerator" ref="text_content"  sentenceUpperBound="9" count="1" words={currentLesson} seed={seed}/>
			
			</div>
			
		)
	}
	
}

const mapStateToProps = (state) => {
	return {
		currentKey: state.currentKey,
		testString: state.testString,
		usedString: state.usedString,
		needText: state.fetchText,
		letterCorrect: state.letterCorrect,
		activeLesson: state.activeLesson,
		mistakesLength: state.mistakesLength,
		mistakesTemp: state.mistakesTemp
	
		
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        sendString: (value) => {dispatch({type: 'SENDSTRING', value: value})},
		sendLessonKeys: (arr) => {dispatch({type: 'SENDLESSONKEYS', keys: arr})},
		sendEnd: () => {dispatch({type: 'SENDEND'})},
		
	
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TextArea);