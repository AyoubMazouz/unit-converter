import { useState, useEffect, useDebugValue } from 'react';
import Converter from '../script';


const InputField = ({ input, setInput, setDropDown, tab }) => {

    const converter = new Converter();

    const units = [
        [
            converter.getLengthMetricFull().concat(converter.getLengthUsFull()),
            converter.getLengthMetric().concat(converter.getLengthUs()),
        ],
        [
            converter.getWeightMetricFull().concat(converter.getWeightUsFull()),
            converter.getWeightMetric().concat(converter.getWeightUs()),
        ],
        [
            converter.getVolumeMetricFull().concat(converter.getVolumeUsFull()),
            converter.getVolumeMetric().concat(converter.getVolumeUs()),
        ],
    ]


    return (
        <div className='space-x-8'>

            <Input input={input} setInput={setInput} />
            <DropDown setDropDown={setDropDown} tab={tab} units={units} />

        </div >
    )
}

export default InputField;

const Input = ({ input, setInput }) => {

    return (
        <input type='number'
            placeholder='0'
            value={input}
            onChange={e => setInput(e.target.value)}
            className='h-10 w-64 px-4 ring-2 ring-emerald-700 focus:outline-none focus:ring-emerald-500 focus:ring-4 rounded-sm shadow-lg bg-gray-50 text-gray-700 font-semibold'
        ></input>
    )
}


const DropDown = ({ setDropDown, tab, units }) => {

    return (
        <select onChange={e => setDropDown(e.target.value)}
            className='h-10 bg-gray-50 focus:outline-none ring-2 ring-emerald-700 focus:ring-4 focus:ring-emerald-500 rounded-sm shadow-lg'>

            <option>Select a unit...</option>

            {units[tab][0].map((uFull, i) =>
                <option key={i}
                    value={units[tab][1][i]}>
                    {`${uFull} (${units[tab][1][i]})`}
                </option>
            )}
        </select>
    )
}