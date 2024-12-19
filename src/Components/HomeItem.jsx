import { useContext } from "react"
import { Product } from "../stores/product-store"





const HomeItem = ({productvalue}) => {

  const {addTocart} = useContext(Product)

  const {productdetail} =useContext(Product)

  const {removeItem} = useContext(Product)
  

  const data=localStorage.getItem('saveToCart')
  const getData = JSON.parse(data)

  let isInCart

  if(getData){
     isInCart =  getData.some(itemid => itemid===productvalue.id)
  }


  
  

  
  


 

  const ItemDetail = (productdetailid) => {
    productdetail(productdetailid)

  }

 return(
    <>




    
        <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
          <div className="w-full overflow-hidden">
            <img src={productvalue.images} alt="Product 1"
              className="h-full w-full object-cover object-top hover:scale-105 transition-all duration-2000 ease-in-out" onClick={()=>ItemDetail(productvalue.id)} />
          </div>

          <div className="p-6">
            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
              <h3 className="text-lg font-bold text-gray-800">{productvalue.name}</h3>
              <p className="text-lg text-blue-600 font-bold">${productvalue.currPrice}</p>
            </div>
            {isInCart ? 
            
            <button type="button"
            className="w-full px-5 py-2.5 bg-red-500 hover:bg-red-700 font-bold text-white rounded-lg"
             onClick={()=>removeItem(productvalue.id)}>Remove from cart</button>

             :

           

              <button type="button"
            className="w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-lg"
             onClick={()=>addTocart(productvalue.id)}>Add to cart</button>
          }
           
              
          </div>
        </div>
    




    </>
    
 )
}

export default HomeItem