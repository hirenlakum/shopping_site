import { useContext } from "react"
import { Product } from "../stores/product-store"

const ProductDetail = () => {

   const {detailid} = useContext(Product)
   const {productData} = useContext(Product)
   const {addTocart} = useContext(Product)


const FinalItems = productData.filter(product=>{
    const foundItems = detailid.indexOf(product.id)
    return foundItems>=0

})


console.log(FinalItems)
    
 return(
    <div>
    <div class="font-sans">
          <div class="p-4 lg:max-w-5xl max-w-lg mx-auto">
              <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">

                  <div class="w-full lg:sticky top-0 sm:flex gap-2">
                     
                      <img src={FinalItems[0].images} alt="Product" class="w-4/5 rounded-md object-cover" />
                  </div>

                  <div>
                      <h2 class="text-2xl font-bold text-gray-800">{FinalItems[0].name}</h2>
                      <div class="flex flex-wrap gap-4 mt-4">
                          <p class="text-gray-800 text-xl font-bold">${FinalItems[0].currPrice}</p>
                       
                      </div>

                      <div class="flex space-x-2 mt-4">
                          <svg class="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg class="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg class="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg class="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                      </div>

                   


                      <div class="mt-8">
                          <h3 class="text-xl font-bold text-gray-800">About the item</h3>
                          <h4 className="font-bold">{FinalItems[0].description}</h4>
                      </div>

                      <div class="mt-8">
                          <h3 class="text-xl font-bold text-gray-800">Reviews(10)</h3>
                          <div class="space-y-3 mt-4">
                              <div class="flex items-center">
                                  <p class="text-sm text-gray-800 font-bold">5.0</p>
                                  <svg class="w-5 fill-blue-600 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                  </svg>
                                  <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                                      <div class="w-2/3 h-full rounded-md bg-blue-600"></div>
                                  </div>
                                  <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
                              </div>

                              <div class="flex items-center">
                                  <p class="text-sm text-gray-800 font-bold">4.0</p>
                                  <svg class="w-5 fill-blue-600 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                  </svg>
                                  <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                                      <div class="w-1/3 h-full rounded-md bg-blue-600"></div>
                                  </div>
                                  <p class="text-sm text-gray-800 font-bold ml-3">33%</p>
                              </div>

                              <div class="flex items-center">
                                  <p class="text-sm text-gray-800 font-bold">3.0</p>
                                  <svg class="w-5 fill-blue-600 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                  </svg>
                                  <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                                      <div class="w-1/6 h-full rounded-md bg-blue-600"></div>
                                  </div>
                                  <p class="text-sm text-gray-800 font-bold ml-3">16%</p>
                              </div>

                              <div class="flex items-center">
                                  <p class="text-sm text-gray-800 font-bold">2.0</p>
                                  <svg class="w-5 fill-blue-600 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                  </svg>
                                  <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                                      <div class="w-1/12 h-full rounded-md bg-blue-600"></div>
                                  </div>
                                  <p class="text-sm text-gray-800 font-bold ml-3">8%</p>
                              </div>

                              <div class="flex items-center">
                                  <p class="text-sm text-gray-800 font-bold">1.0</p>
                                  <svg class="w-5 fill-blue-600 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                  </svg>
                                  <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                                      <div class="w-[6%] h-full rounded-md bg-blue-600"></div>
                                  </div>
                                  <p class="text-sm text-gray-800 font-bold ml-3">6%</p>
                              </div>
                          </div>

                          <button type="button" class="w-full mt-8 px-6 py-2.5 border border-blue-600 bg-transparent text-gray-800 text-sm font-semibold rounded-md">Read all reviews</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
 )
}


export default ProductDetail