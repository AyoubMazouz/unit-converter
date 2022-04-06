



const Tabs = ({ setTab, setInput, setDropDown }) => {


    const onChange = t => {
        setInput('');
        setDropDown('');
        setTab(t);
    }


    return (

        <div>

            <button onClick={() => onChange(0)}
            >Length</button>

            <button onClick={() => onChange(1)}
            >Weight</button>

            <button onClick={() => onChange(2)}
            >Volume</button>

            <button onClick={() => onChange(3)}
            >Tempreture</button>

        </div>
    )
}

export default Tabs;