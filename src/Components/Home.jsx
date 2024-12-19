import FlashSale from "./FlashSale"
import HomeItem from "./HomeItem"
import { useContext, useEffect, useState } from "react"
import { Product } from "../stores/product-store"
import { useRef } from "react"
import { FaSearch } from "react-icons/fa";
import ProductFound from "./ProductFound"
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom"
import { TiArrowBack } from "react-icons/ti";


const Home = () => {

   const {productData} = useContext(Product)

   const [show,setshow] = useState(false)

   const [message,setmessage] = useState(false)


  const [showarrow,setshowarrow] = useState(false)

 
 

   const [serach,setsearch] = useState([])

  
   const navigate = useNavigate()
   
 
   

   const [value,setValue] = useState("")

   const searchHandle = () => {
     

      const  newItems = productData.filter(item=>{
         const filterItems = item.name.toLowerCase().startsWith(value.toLowerCase())
         return filterItems
      
      })
   setsearch(newItems)
   setshow(true)
   setmessage(true)
   setshowarrow(true)
   
  

 
}


useEffect(()=>{

  if(message===true){
   if(serach.length==0){
      // toast.error("product not find",{position:"bottom-center",autoClose:1000})
     
      navigate("/productnotfound")
    }
  }

},[serach])

const handleallProduct = () => {
   setshow(false)
   

}






  
 return(
    <div>
   
         <FlashSale/>

         <div class="flex items-center gap-4 px-4 py-3 rounded-md border-2 mt-[30px] border-blue-500 overflow-hidden max-w-[900px] mx-auto font-[sans-serif]">
        {showarrow && <TiArrowBack onClick={handleallProduct} /> } 
         <input type="email" placeholder="Search Something..."
          class="w-full outline-none bg-transparent text-gray-600 text-sm" onChange={(e)=>setValue(e.target.value)} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-gray-600" onClick={searchHandle}>
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
        
      </div>
    
     

         <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-900">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Premium Threads</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

         
      
      

 {show ? 
serach.map((product)=>
   <HomeItem key={product.id} productvalue={product}/>,)  

:
productData.map((product)=>
   <HomeItem key={product.id} productvalue={product}/>,
) 
}</div>
        </div>
         </div>
 )
}

export default Home