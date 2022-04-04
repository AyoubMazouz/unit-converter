import { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';

function App() {

  const [input, setInput] = useState('0');
  const [dropDown, setDropDown] = useState('');
  const [tab, setTab] = useState(0);


  return (
	<div className="App">


		{/* <div>
			<button className=''
				onClick={setTab(0)}
				>Length</button>
			<button className=''
				onClick={setTab(1)}
				>Weight</button>
			<button className=''
				onClick={setTab(2)}
				>Volume</button>
		</div> */}

		<div>

		<input type='number'
			placeholder='0'
			value={input}
			onChange={e => setInput(e.target.value)}
			className=''
		></input>

		<select onChange={e => setDropDown(e.target.value)}>

			<option value='km' >Kilometer (Km)</option>
			<option value='hm' >Hectometer (hm)</option>
			<option value='dam'>Decameter (dam)</option>
			<option value='m'  >Meter (m)</option>
			<option value='dm' >Decimeter (dm)</option>
			<option value='cm' >Centimeter (cm)</option>
			<option value='mm' >Millimeter (mm)</option>
		
		</select>

		</div> 

		<Table input={input} dropDown={dropDown} tab={tab} />
	

	</div>
  );
}

export default App;
