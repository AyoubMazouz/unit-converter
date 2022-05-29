export default function Tabs ({ tab, setTab, setInput, setDropDown }) {
    const onChange = t => {
        setInput('');
        setDropDown('');
        setTab(t);
    }
    return (

        <div className='tabs-btns space-x-4 space-y-4 px-4'>

            <button className={tab === 0 ? 'bg-emerald-700 text-emerald-50' : 'bg-gray-50 text-emerald-800'}
            onClick={() => onChange(0)}>Length</button>

            <button className={tab === 1 ? 'bg-emerald-700 text-emerald-50' : 'bg-gray-50 text-emerald-800'}
            onClick={() => onChange(1)}>Weight</button>

            <button className={tab === 2 ? 'bg-emerald-700 text-emerald-50' : 'bg-gray-50 text-emerald-800'}
            onClick={() => onChange(2)}>Volume</button>

            <button className={tab === 3 ? 'bg-emerald-700 text-emerald-50' : 'bg-gray-50 text-emerald-800'}
            onClick={() => onChange(3)}>Temperature</button>

            <button className={tab === 4 ? 'bg-emerald-700 text-emerald-50' : 'bg-gray-50 text-emerald-800'}
            onClick={() => onChange(4)}>Time</button>

            <button className={tab === 5 ? 'bg-emerald-700 text-emerald-50' : 'bg-gray-50 text-emerald-800'}
            onClick={() => onChange(5)}>Angle</button>

            <button className={tab === 6 ? 'bg-emerald-700 text-emerald-50' : 'bg-gray-50 text-emerald-800'}
            onClick={() => onChange(6)}>Data Storage</button>

            <button className={tab === 7 ? 'bg-emerald-700 text-emerald-50' : 'bg-gray-50 text-emerald-800'}
            onClick={() => onChange(7)}>Energy</button>

        </div>
    )
}