import { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import InputField from './components/InputField';
import Details from './components/Details';
import Tabs from './components/Tabs';

function App() {

	const [input, setInput] = useState('');
	const [dropDown, setDropDown] = useState('');
	const [tab, setTab] = useState(0);


	return (
		<div className="flex flex-col justify-center items-center space-y-4 pt-36 xl:mx-24">

			<InputField input={input} setInput={setInput} setDropDown={setDropDown} tab={tab} />
			<Tabs tab={tab} setTab={setTab} setInput={setInput} setDropDown={setDropDown} />
			<Table input={input} dropDown={dropDown} tab={tab} />
			<Details />

		</div>
	);
}

export default App;
