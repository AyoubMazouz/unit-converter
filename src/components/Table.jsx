import { useState, useEffect } from 'react';
import Converter from '../script';


const Table = ({ input, dropDown, tab }) => {

    const converter = new Converter();

    const [outPut, setOutPut] = useState([]);

    useEffect(() =>{
        const [i, u, c] = [parseFloat(input), dropDown, converter];
		const funcs = [
            () => {
                setOutPut([
                    [c.getLengthMetric(), c.metricSystem(i, u)], 
                    [c.getLengthUs(), c.UsSystem(i, u, 'l')]])
            },
            () => {   
                setOutPut([
                    [c.getWeightMetric(), c.metricSystem(i, u)], 
                    [c.getWeightUs(), c.UsSystem(i, u, 'w')]])
            },
            () => {
                setOutPut([
                    [c.getVolumeMetric(), c.metricSystem(i, u)], 
                    [c.getVolumeUs(), c.UsSystem(i, u, 'v')]])
            },
        ];

        funcs[2]();

	}, [input])

    return (
            
                outPut ? outPut.map((sys, i) => 

                    <table key={i}>
                        <thead>
                            <tr>
                                <th colSpan={outPut.length}>Metric</th>
                            </tr>
                            <tr>
                                {
                                    sys[0].map((v, i) => 
                                        <th key={i}>{v}</th>
                                    )
                                }
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                {
                                    sys[1].map((v, i) => 
                                        <td key={i}>{v}</td>
                                    )
                                }
                            </tr>
                        </tbody>
                </table>

                )	: ''	
    );
}

export default Table;