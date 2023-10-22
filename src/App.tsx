import { useState } from 'react'
import { Button } from 'antd';
import { AppleOutlined } from '@ant-design/icons';
import { Space } from 'antd';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        顶级组件
        <Button type="primary">Primary Button</Button>
        <AppleOutlined style={{color:'red'}}/>
      </div>
    </>
  )
}

export default App
