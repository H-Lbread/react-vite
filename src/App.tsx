import { useState } from 'react'

// import { Space } from 'antd';
// import { useRoutes,Link } from 'react-router-dom'
import { BrowserRouter as Router,useRoutes,Link } from 'react-router-dom';
import router from './router'

// `useRoutes` 需要在 `<BrowserRouter>` 组件内部使用。这是因为它依赖于路由上下文。
function RoutesComponent() {
  const routing = useRoutes(router);
  return routing || null;
}


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Router>
        <div className="App">
          <Link to="/home">Home</Link> |
          <Link to="/about">About</Link>
          <RoutesComponent />
          
        </div>
      </Router>
    </>
  )
}

export default App
