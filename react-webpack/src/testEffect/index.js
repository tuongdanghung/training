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
    useEffect(() => {
        setDataCon(props.chillData)
    }, [dataCon]);
    console.log("data co tham so", dataCon);
    return (
        <div>
            <select>
                {dataCon.map((item, index) => (
                    <option key={index}>
                        {item}
                    </option>
                )
                )}
            </select>
        </div>
    );
}

export default MyComponent