import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Components/Home.jsx'
import AboutUS from "./Components/AboutUs.jsx"
import Cart from "./Components/Cart.jsx"
import ContactUs from "./Components/ContactUs.jsx"
import ReturnPolicy from "./Components/ReturnPolicy.jsx"
import TermsCondition from "./Components/TermsCondition.jsx"
import OrderPlace from './Components/OrderPlace.jsx'
import ProductDetail from './Components/productDetail.jsx'
import ProductNotFind from './Components/ProductNotFind.jsx'


const router = createBrowserRouter([
  {
    path:"/",element:<App/>,
    children:[
      {
            path:"/",element:<Home/>,
    },

    {
      path:"/aboutus",element:<AboutUS/>,
  },

  {
  path:"/cart",element:<Cart/>,
  },

  {
  path:"/contactus",element:<ContactUs/>,
  },

  {
  path:"/returnpolicy",element:<ReturnPolicy/>,
  },

  {
  path:"/termscondition",element:<TermsCondition/>,
  },
  {
    path:"/orderplace",element:<OrderPlace/>,
    },
    {
      path:"/productdetail",element:<ProductDetail/>,
      },
      {
        path:"/productnotfound",element:<ProductNotFind/>
      }

  ],
   
  },
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
    
  </StrictMode>,
)
