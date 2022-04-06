import { useState, useEffect } from 'react';
import Converter from '../script';


const Table = ({ input, dropDown, tab }) => {

    const converter = new Converter();

    const [outPut, setOutPut] = useState(false);

    useEffect(() => {
        const [i, u, c] = [parseFloat(input), dropDown, converter];
        const funcs = [
            () => {
                setOutPut([
                    c.getLengthMetric().concat(c.getLengthUs()),
                    c.metricSystem(i, u).concat(c.UsSystem(i, u, 'l'))
                ])
            },
            () => {
                setOutPut([
                    c.getWeightMetric().concat(c.getWeightUs()),
                    c.metricSystem(i, u).concat(c.UsSystem(i, u, 'w'))
                ])
            },
            () => {
                setOutPut([
                    c.getVolumeMetric().concat(c.getVolumeUs()),
                    c.metricSystem(i, u).concat(c.UsSystem(i, u, 'v'))
                ])
            },
        ];

        funcs[tab]();
        console.log(outPut)
    }, [input, dropDown]);

    return (

        outPut &&

        <div className='md:max-w-[640px] lg:max-w-[880px] xl:max-w-full overflow-auto rounded-lg lg:rounded-t-lg shadow-lg mx-4 transition-all duration-300'>


            <SmallTable input={input} dropDown={dropDown} tab={tab} outPut={outPut} />
            <FullTable input={input} dropDown={dropDown} tab={tab} outPut={outPut} />

        </div>

    )
}

export default Table;


const SmallTable = ({ input, dropDown, tab, outPut }) => {

    return (

        <table className='hidden lg:block '>
            <thead className='bg-emerald-500 border-emerald-700 border-b-[3px]'>

                <tr className='text-left text-emerald-50 font-bold tracking-wider capitalize'>
                    {outPut[0].map((v, i) =>
                        <th key={i}
                            className='py-3 px-4'
                        >{v}</th>
                    )}
                </tr>

            </thead>
            <tbody className='bg-gray-100 border-gray-700 border-b-[2px]'>

                <tr className='text-sm text-gray-700 font-semibold'>

                    {outPut[1].map((v, i) =>
                        isNaN(v)
                            ? <th key={i}
                                className='p-3 font-bold text-gray-400'
                            >0</th>
                            : <th key={i}
                                className='p-3'
                            >{v.toFixed(6).replace(/(\.0+|0+)$/, '')}</th>
                    )
                    }
                </tr>


            </tbody>
        </table>

    )
}


const FullTable = ({ input, dropDown, tab, outPut }) => {

    return (

        <div className='lg:hidden grid grid-cols-6 bg-gray-50 overflow-auto'>

            <div className='py-4 px-6 bg-emerald-500 border-r-[3px] border-emerald-700 text-emerald-50 font-bold tracking-wider capitalize text-right'>

                {outPut[0].map((v, i) =>
                    <h3 key={i}>{v}:</h3>
                )}

            </div>

            <div className='cols-span-5 py-4 px-6 text-gray-700 font-semibold'>

                {outPut[1].map((v, i) =>
                    isNaN(v)
                        ? <h3 key={i}
                            className='font-bold text-gray-400'
                        >0</h3>
                        : <h3 key={i}
                            className=''
                        >{v.toFixed(6).replace(/(\.0+|0+)$/, '')}</h3>
                )
                }

            </div>

        </div>

    )
}