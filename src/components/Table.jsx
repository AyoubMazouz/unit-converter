import { useState, useEffect } from 'react';
import Converter from '../converter';


export default function Table ({ input, dropDown, tab }) {

    const converter = new Converter();

    const [outPut, setOutPut] = useState(false);

    useEffect(() => {
        const [i, u, c] = [parseFloat(input), dropDown, converter];
        const funcs = [
            () => {
                setOutPut([
                    c.getLengthMetricFull().concat(c.getLengthUsFull()),
                    c.getLengthMetric().concat(c.getLengthUs()),
                    c.metricSystem(i, u).concat(c.UsSystem(i, u, 'l')),
                ])
            },
            () => {
                setOutPut([
                    c.getWeightMetricFull().concat(c.getWeightUsFull()),
                    c.getWeightMetric().concat(c.getWeightUs()),
                    c.metricSystem(i, u).concat(c.UsSystem(i, u, 'w'))
                ])
            },
            () => {
                setOutPut([
                    c.getVolumeMetricFull().concat(c.getVolumeUsFull()),
                    c.getVolumeMetric().concat(c.getVolumeUs()),
                    c.metricSystem(i, u).concat(c.UsSystem(i, u, 'v'))
                ])
            },
            () => {
                setOutPut([
                    c.getTemperatureFull(),
                    c.getTemperature(),
                    c.temperature(i, u)
                ])
            },
            () => {
                setOutPut([
                    c.getTimeFull(),
                    c.getTime(),
                    c.time(i, u)
                ])
            },
            () => {
                setOutPut([
                    c.getAngleFull(),
                    c.getAngle(),
                    c.angle(i, u)
                ])
            },
            () => {
                setOutPut([
                    c.getDataStorageFull(),
                    c.getDataStorage(),
                    c.dataStorage(i, u)
                ])
            },
            () => {
                setOutPut([
                    c.getEnergyFull(),
                    c.getEnergy(),
                    c.energy(i, u)
                ])
            },
        ];

        funcs[tab]();
        console.log(outPut)
    }, [input, dropDown, tab]);

    return (

        outPut &&

        <div className='md:max-w-[640px] lg:max-w-[880px] xl:max-w-full overflow-auto rounded-lg lg:rounded-t-lg shadow-lg mx-4 transition-all duration-300'>


            <SmallTable input={input} dropDown={dropDown} tab={tab} outPut={outPut} />
            <FullTable input={input} dropDown={dropDown} tab={tab} outPut={outPut} />

        </div>

    )
}

const FullTable = ({ dropDown, outPut }) => {

    return (
        <table className='hidden lg:block'>
            <thead className='bg-emerald-500 border-emerald-700 border-b-[3px]'>
                <tr className='text-left text-sm font-semibold tracking-wider capitalize'>
                    {outPut[0].map((v, i) =>
                        <th key={i}
                            className={`py-3 px-4 ${outPut[1][i] === dropDown ? 'text-emerald-800' : 'text-emerald-50'}`}
                        >{v}</th>
                    )}
                </tr>
            </thead>
            <tbody className='bg-gray-100 border-b-[2px] text-sm font-semibold'>
                <tr>
                    {outPut[2].map((v, i) =>
                        isNaN(v)
                            ? <th key={i}
                                className={`p-3 ${outPut[1][i] === dropDown ? 'text-emerald-600' : 'text-gray-400'}`}
                            >0</th>
                            : <th key={i}
                                className={`p-3 ${outPut[1][i] === dropDown ? 'text-emerald-600' : 'text-gray-700'}`}
                            >{v.toFixed(8).replace(/(\.0+|0+)$/, '')}</th>
                    )
                    }
                </tr>
            </tbody>
        </table>

    )
}


const SmallTable = ({ dropDown, outPut }) => {

    return (

        <div className='lg:hidden grid grid-cols-6 bg-gray-50 overflow-auto'>

            <div className='py-4 px-6 col-span-2 bg-emerald-500 border-r-[3px] border-emerald-700 font-semibold tracking-wider capitalize text-right'>

                {outPut[0].map((v, i) =>
                    <h3 key={i}
                        className={` ${outPut[1][i] === dropDown ? 'text-emerald-800' : 'text-emerald-50'}`}>{v}:</h3>
                )}

            </div>

            <div className='cols-span-auto py-4 px-6 text-gray-700 font-semibold'>

                {outPut[2].map((v, i) =>
                    isNaN(v)
                        ? <h3 key={i}
                            className={outPut[1][i] === dropDown ? 'text-emerald-600' : 'text-gray-400'}
                        >0</h3>
                        : <h3 key={i}
                            className={outPut[1][i] === dropDown ? 'text-emerald-600' : 'text-gray-700'}
                        >{v.toFixed(6).replace(/(\.0+|0+)$/, '')}</h3>
                )
                }

            </div>

        </div>

    )
}