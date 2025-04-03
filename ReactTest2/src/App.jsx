import { useContext, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Notes from './components/Notes'
import NotFound from './components/NotFound'
import NavBar from './components/NavBar'
import { AppContext } from './Context/AppContext'

function App() {
  const {setLoading ,setPosts, posts} = useContext(AppContext)


  async function fetchurl(){
    try{
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=8");
      const data = await response.json();
      setPosts(data)
      console.log(data)
      
    }
    catch(error){
      console.log("error found",error)
      // setLoading(false)
    }
    finally {
      setLoading(false); 
    }
  }

  useEffect(()=>{
    fetchurl();
  },[])
  useEffect(() => {
    console.log(posts);
  }, [posts]);  
  

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
          element:<Home />
        },
        {
          path:'/notes',
          element : <Notes/>
        },
        {
          path:'*',
          element:<NotFound/>
        }
      ]

    }
  ])

  return (

    <div>
          <RouterProvider router={router} />
    </div>
  )
}


export default App
