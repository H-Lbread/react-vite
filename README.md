
## Reacr + Vite + Ant Design 初始化模板
npm init vite
```json
"dependencies": {
    "react-redux":"^7.2.8",
    "react-router-dom":"^6.3.0",
    "redux":"^4.1.2"
}

引入Ant Design UI
npm install antd --save
npm i --save @ant-design/icons
```

## 启动
1. npm i
2. npm run dev





## 配置@路径
npm i -D @types/node

在vite.config.js中
import path from "path"
resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  }