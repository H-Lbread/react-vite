import { useState } from 'react'

// import { Space } from 'antd';
import { useRoutes,Link } from 'react-router-dom'
import router from './router'




function App() {
  const [count, setCount] = useState(0)
  const outlet =  useRoutes(router)
  return (
    <>
      {/* <Router> */}
        <div className="App">
          {/* <Link to="/home">Home</Link> |
          <Link to="/about">About</Link> */}
          { outlet }
        </div>
      {/* </Router> */}
    </>
  )
}

export default App
