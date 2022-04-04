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
        <div>

            <input type='number'
                placeholder='0'
                value={input}
                onChange={e => setInput(e.target.value)}
                className=''
            ></input>

            <select onChange={e => setDropDown(e.target.value)}>

                <option>Select a unit...</option>

                {units[tab][0].map((uFull, i) =>
                    <option key={i}
                        value={units[tab][1][i]}
                    >{`${uFull} (${units[tab][1][i]})`}</option>
                )}

            </select>

        </div >
    )
}

export default InputField;