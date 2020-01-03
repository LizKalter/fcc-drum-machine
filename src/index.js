import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Display(props) {
	return (
		<div id="display">{props.drumName}</div>
	);
}

/* Sounds samples and names are from the freeCodeCamp example for this project
   as I know nothing about drum samples.
   https://codepen.io/freeCodeCamp/pen/MJyNMd
*/
function DrumMachine(props) {
	const [currentDrum, setCurrentDrum] = useState('');

	const Q = useRef(null);
	const W = useRef(null);
	const E = useRef(null);
	const A = useRef(null);
	const S = useRef(null);
	const D = useRef(null);
	const Z = useRef(null);
	const X = useRef(null);
	const C = useRef(null);

	const drumMap = {
		KeyQ: {
			audio: Q,
			name: 'Heater 1'
		},
		KeyW: {
			audio: W,
			name: 'Heater 2'
		},
		KeyE: {
			audio: E,
			name: 'Heater 3'
		},
		KeyA: {
			audio: A,
			name: 'Heater 4'
		},
		KeyS: {
			audio: S,
			name: 'Clap'
		},
		KeyD: {
			audio: D,
			name: 'Open HH'
		},
		KeyZ: {
			audio: Z,
			name: 'Kick n\' Hat'
		},
		KeyX: {
			audio: X,
			name: 'Kick'
		},
		KeyC: {
			audio: C,
			name: 'Closed HH'
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		}
	});

	const handleKeyDown = (e) => {
		playDrum(e.code);
	}
	const handleDrumClick = (e) => {
		playDrum(e.target.name);
	}
	const playDrum = (name) => {
		const drum = drumMap[name];
		if (drum) {
			setCurrentDrum(drum.name);
			drum.audio.current.play();
		}
	}

	return (
		<div id="drum-machine">
			<Display drumName={currentDrum} />
			<div className="drum-pads">
				<button className="drum-pad" id="drum-pad-Q" name="KeyQ" onClick={handleDrumClick}>
					Q
					<audio className="clip" id="Q" ref={Q} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
				</button>
				<button className="drum-pad" id="drum-pad-W" name="KeyW" onClick={handleDrumClick}>
					W
					<audio className="clip" id="W" ref={W} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
				</button>
				<button className="drum-pad" id="drum-pad-E" name="KeyE" onClick={handleDrumClick}>
					E
					<audio className="clip" id="E" ref={E} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
				</button>
				<button className="drum-pad" id="drum-pad-A" name="KeyA" onClick={handleDrumClick}>
					A
					<audio className="clip" id="A" ref={A} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
				</button>
				<button className="drum-pad" id="drum-pad-S" name="KeyS" onClick={handleDrumClick}>
					S
					<audio className="clip" id="S" ref={S} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
				</button>
				<button className="drum-pad" id="drum-pad-D" name="KeyD" onClick={handleDrumClick}>
					D
					<audio className="clip" id="D" ref={D} src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
				</button>
				<button className="drum-pad" id="drum-pad-Z" name="KeyZ" onClick={handleDrumClick}>
					Z
					<audio className="clip" id="Z" ref={Z} src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
				</button>
				<button className="drum-pad" id="drum-pad-X" name="KeyX" onClick={handleDrumClick}>
					X
					<audio className="clip" id="X" ref={X} src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
				</button>
				<button className="drum-pad" id="drum-pad-C" name="KeyC" onClick={handleDrumClick}>
					C
					<audio className="clip" id="C" ref={C} src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
				</button>
			</div>
		</div>
	);
}

ReactDOM.render(<DrumMachine />, document.getElementById('root'));

serviceWorker.unregister();
