import { useContext } from "react"
import { Product } from "../stores/product-store"

const OrderPlace = () => {

      
   const {id} = useContext(Product)
   const {productData} =useContext(Product)
   

   const data=localStorage.getItem('saveToCart')
   const getData = JSON.parse(data)



let mrp=0

let shipping=2

let tax=6

let totalmrp=0


let FinalItems = productData.filter(product=>{
   const FoundItems = getData.indexOf(product.id)
   return FoundItems>=0
})

{FinalItems.map((item)=>
  mrp+=item.finalPrice
)}

totalmrp=mrp+tax+shipping
 return(
   
       <div>
<div className="font-[sans-serif] bg-white">
      <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
          <div className="relative h-full">
            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
              <div className="space-y-4">

                  {FinalItems.map((item)=>
                  
                <div className="flex items-start gap-4">
                <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                  <img src={item.images} className="w-full object-contain" />
                </div>
                <div className="w-full">
                  <h3 className="text-base text-white">{item.name}</h3>
                  <ul className="text-xs text-gray-300 space-y-2 mt-2">
                    
                    <li className="flex flex-wrap gap-4">Quantity <span className="ml-auto">{item.quantity}</span></li>
                    <li className="flex flex-wrap gap-4">Total Price <span className="ml-auto">${item.finalPrice}</span></li>
                  </ul>
                </div>
              </div>
                  )}


           

            

               
              </div>
            </div>

            <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
            <h4 className="flex flex-wrap gap-4 text-base text-white">SubTotal <span className="ml-auto">${mrp}</span></h4>
              <h4 className="flex flex-wrap gap-4 text-base text-white">Shipping <span className="ml-auto">${shipping}</span></h4>
              <h4 className="flex flex-wrap gap-4 text-base text-white">Tax <span className="ml-auto">${tax}</span></h4>
              <h4 className="flex flex-wrap gap-4 text-base text-white">Total <span className="ml-auto">${totalmrp}</span></h4>
            </div>
          </div>
        </div>

        <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
          <h2 className="text-2xl font-bold text-gray-800">Complete your order</h2>
          <form className="mt-8">
            <div>
              <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="First Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>

                <div>
                  <input type="text" placeholder="Last Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>

                <div>
                  <input type="email" placeholder="Email"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>

                <div>
                  <input type="number" placeholder="Phone No."
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="Address Line"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>
                <div>
                  <input type="text" placeholder="City"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>
                <div>
                  <input type="text" placeholder="State"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>
                <div>
                  <input type="text" placeholder="Zip Code"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>
              </div>

              <div className="flex gap-4 max-md:flex-col mt-8">
                <button type="button" className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1">Cancel</button>
                <button type="button" className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white">Complete Purchase</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
       </div>
       
    
 )
}

export default OrderPlace