import React, { useEffect, useState } from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom
import MyComponent from './testEffect'

// Tạo component App
function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData([1, 2, 3, 4, 5, 6])
    }, [])
    // console.log(data);
    return (
        <div>
            <MyComponent chillData={data} />
            <h1>Xin chào anh em F8!</h1>
        </div>
    )
}

// Render component App vào #root element
// ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

