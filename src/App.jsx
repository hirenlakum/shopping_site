import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ProductProvider from "./stores/product-store"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { Outlet } from "react-router-dom"
import "./App.css"


const App = () => {



  
 return(
  <div>
    <ProductProvider>
    <Header/>
  <Outlet/>
  <ToastContainer/>
  <Footer/>
  </ProductProvider>
   
  
  </div>
 )
}

export default App
