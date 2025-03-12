import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import Dasboard from './components/Dasboard'
import Home from './components/Home'
import NotFound from './components/NotFound'

function App() {
  const Layout = ()=>{
    return(
     <>
     <NavBar/>
     <div>
       <Outlet/>
     </div>
     </>
    )
   }
   const router = createBrowserRouter([
     {
       path:'/',
       element:<Layout/>,
       children:[
         {
           path:'/',
           element:<Home/>
         },
         {
           path:'/dasboard',
           element : <Dasboard/>
         },
         {
           path:'*',
           element:<NotFound/>
         }
       ]
 
     }
   ])
  

  return (
   <div >
    <RouterProvider router={router} />
   </div>
  )
}

export default App
