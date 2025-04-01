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
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import GuestRoute from './components/GuestRoute/GuestRoute'
import UserProvider from './components/context/User.context'
import CardProvider from './components/context/Card.context'

export default function App() {

  const x=createBrowserRouter([
    {path:"/",element:<ProtectedRoute><Layout/></ProtectedRoute>,children:[
      {index:true,element:<Home/>},
      {path:"/footer",element:<Footer/>},
      
    ]},
    {path:"/",element:<GuestRoute><Layout/></GuestRoute>,children:[
      {path:"/login",element:<Login/>},
      {path:"/signup",element:<Signup/>},
    ]}
  ])
 return (<>
<UserProvider>
<CardProvider>
<RouterProvider router={x}></RouterProvider>
</CardProvider>
</UserProvider>
<Toaster />
 </>)

}