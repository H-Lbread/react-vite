// 组件路由
import App from '../App'
import Home from '../views/Home'
import About from '../views/About'

import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

// BrowserRouter : History模式  ，HashRouter : hash模式

const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                {/* 重定向到 /home */}
                <Route path='/' element={ <Navigate to="/home" />}></Route>
                
                <Route path='/home' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
export default baseRouter
