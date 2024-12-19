import CartItem from "./CartItem"
import { useContext } from "react"
import { Product } from "../stores/product-store"
import CartSummary from "./CartSummary"


const Cart = () => {

   const {id} = useContext(Product)
   const {productData} =useContext(Product)


 const data=localStorage.getItem('saveToCart')
 const getData = JSON.parse(data)












let FinalItems = productData.filter(product=>{
   const FoundItems = getData.indexOf(product.id)
   return FoundItems>=0
})







 return(
   <>
<div class="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
            <h1 class="text-3xl font-bold text-gray-800 text-center">Shopping Cart</h1>

            <div class="grid md:grid-cols-3 gap-8 mt-16">
                <div class="md:col-span-2 space-y-4">
                    {FinalItems.map((item)=>
                     <CartItem key={item.id} productvalue={item} />
                    )}
                  

                    <hr class="border-gray-300" />


                    

                </div>
            <CartSummary/>
            </div>
        </div>

    </>
 )
}

export default Cart