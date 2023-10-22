import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化样式
import "reset-css"
// UI框架样式

// 全局样式
import "@/assets/style/global.scss"
// 组件样式

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
