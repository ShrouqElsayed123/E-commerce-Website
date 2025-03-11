import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
// import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Layout from './components/Layout/Layout'
import { Toaster } from 'react-hot-toast'

export default function App() {

  const x=createBrowserRouter([
    {path:"/",element:<Layout/>,children:[
      {path:"/login",element:<Login/>},
      {path:"/signup",element:<Signup/>},
      {index:true,element:<Home/>},
      {path:"/footer",element:<Footer/>},
      
    ]}
  ])
 return (<>
<RouterProvider router={x}></RouterProvider>
<Toaster />
 </>)

}