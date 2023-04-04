import { useState, useEffect } from 'react';

// const MyComponent() {

// }

// export default MyComponent

import React from 'react'

const MyComponent = (props) => {
    // const [dataCon, setDataCon] = useState(props.chillData);
    // data sẽ bị rỗng vì nó sẽ lấy giá trị đầu tiên của props.chillData là rỗng
    // trường hợp này nên set nó vào useEffect như ở dưới
    const [dataCon, setDataCon] = useState([]);
    const [valueData, setValueData] = useState([])
    const [data, setData] = useState([])
    const [value, setValue] = useState([])
    const arr = `https://jsonplaceholder.typicode.com/users`
    const fetchData = async () => {
        const result = await fetch(arr);
        const newData = await result.json();
        setData(newData);
        handleData(newData)
    };
    useEffect(() => {
        setDataCon(props.chillData)
        setValueData(dataCon[0])
        fetchData()
    }, [dataCon]);
    const handleChange = (e) => {
        const index = e.target.value
        setValueData(...index)
        const x = data.filter(x => x.id === parseInt(index))
        setValue(x)
    }

    const handleData = (data) => {
        const x = data.filter(x => x.id === dataCon[0])
        setValue(x)
    }
    return (
        <div>
            <select value={valueData} onChange={handleChange}>
                {dataCon.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                )
                )}
            </select>
            <h1>{valueData}</h1>
            <h2>name :{value[0] !== undefined && value[0].name}</h2>
            <h2>city : {value[0] !== undefined && value[0].address.city}</h2>
        </div>
    );
}

export default MyComponent