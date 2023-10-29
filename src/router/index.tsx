// 对象路由
import React,{ lazy } from 'react'
import Home from '../views/Home'

import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

const About = lazy(()=> import('../views/About'))

const withLoadingComponent = (comp:JSX.Element) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            { comp }
        </React.Suspense>
    )
}
const routes = [
    {
        path:'/',
        element:<Navigate to='/home' />
    },
    {
        path:'/home',
        element:<Home />
    },
    {
        path:'/about',
        element:withLoadingComponent(<About />)
    },
]

export default routes