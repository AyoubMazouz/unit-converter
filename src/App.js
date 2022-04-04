import { useState, useEffect } from 'react';
import './App.css';
import Converter from './script.js'

function App() {


	const converter = new Converter();

	console.log(converter.metricSystem(converter.convertToMetric(10, 'yd'))[0])

  const [inputV, setInputV] = useState('0');
  const [dropDownV, setDropDownV] = useState('');


  return (
	<div className="App">

		<div>

		<input type='number'
			placeholder='0'
			value={inputV}
			onChange={e => setInputV(e.target.value)}
			className=''
		></input>

		<select onChange={e => setDropDownV(e.target.value)}>

			<option value='km' >Kilometer (Km)</option>
			<option value='hm' >Hectometer (hm)</option>
			<option value='dam'>Decameter (dam)</option>
			<option value='m'  >Meter (m)</option>
			<option value='dm' >Decimeter (dm)</option>
			<option value='cm' >Centimeter (cm)</option>
			<option value='mm' >Millimeter (mm)</option>
		
		</select>

		</div> 

		<div>

			<table>

				<thead>
					<tr>
						<th colSpan='2'>Metric</th>
					</tr>
					<tr>
						<th>m</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>{}</td>
					</tr>
				</tbody>

			</table>

		</div>

	</div>
  );
}

export default App;
