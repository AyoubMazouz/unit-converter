import { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import InputField from './components/InputField';

function App() {

	const [input, setInput] = useState('0');
	const [dropDown, setDropDown] = useState('');
	const [tab, setTab] = useState(1);


	return (
		<div className="App">




			<InputField input={input} setInput={setInput} setDropDown={setDropDown} tab={tab} />
			<Table input={input} dropDown={dropDown} tab={tab} />


		</div>
	);
}

export default App;
