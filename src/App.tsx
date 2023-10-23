import { useState } from 'react'

import { Space } from 'antd';
import { Outlet,Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Link to="/home">Home</Link> |
        <Link to="/about">About</Link>
        {/* 占位符组件，等同于vue中的<router-view> */}
        <Outlet></Outlet> 
      </div>
    </>
  )
}

export default App
