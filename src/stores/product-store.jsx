import { createContext, useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import {toast,ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



export const Product=createContext({
    productData:[],
    addTocart:() => {},
    id:[],
 
    removeItem : () => {},
    productdetail : () => {},
    detailid:[],
   
    
   
    
  
    
})

const ProductProvider = ({children}) => {


  const [id,setid] = useState([])

    const navigate = useNavigate()

    const [detailid,setdetailid] = useState([])
   
  
   

    const [productData,setproductData]=useState(productarray)

 
 


    useEffect(()=>{

        const saveCart = localStorage.getItem('saveToCart')
        if(!saveCart){
            localStorage.setItem('saveToCart',JSON.stringify([]))
        }
    },[])

   
   

    const addTocart = (productId) => {

  const get= localStorage.getItem("saveToCart")
  const get1 = JSON.parse(get)
  
 
    let cartId = [productId,...get1]
    setid(cartId)

   
    toast.success("item add to the cart",{
        position:"bottom-center",
        autoClose:1000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        
      })
    localStorage.setItem('saveToCart',JSON.stringify(cartId))
  
   
    
    
   

    
   
   
     }
   
     

     const removeItem = (id) => {

setid((prevItems)=>prevItems.filter(item=>item!==id))
 toast.success("item remove from  the cart",{
    position:"bottom-center",
    autoClose:1000,
    hideProgressBar:false,
    closeOnClick:true,
    pauseOnHover:true,
    draggable:true,
    
  })

 const s1= localStorage.getItem('saveToCart')
 const s2=JSON.parse(s1)
 
 const s3=s2.filter(data=>data!==id)

localStorage.setItem('saveToCart',JSON.stringify(s3))





 
     }


     const productdetail = (detailId) => {

 navigate("/productdetail")
 let pdi = [detailId]
 setdetailid(pdi)
     }

   
     
   

 return <Product.Provider value={{
    productData,
    addTocart,
    id,
    removeItem,
    productdetail,
    detailid,
  
   
    
  
   
 }}>
    {children}
 </Product.Provider>
    
 
}





const DEFAULT_PRODUCT = [
    {
        id:"101",
        images:"Images/1.jpg",
        name:"Rhodium-Plated CZ Floral Studs White",
        currPrice:606,
        quantity:1,
        originalPrice:1045,
        discount:"42",
        rating:{
            stars:"4",
            total:"5"
        },
        finalPrice:606,
        description:"Elevate your accessory collection with our exquisite Rhodium-Plated CZ Floral Studs. Crafted with precision, these stunning earrings feature a delicate floral design adorned with brilliant cubic zirconia stones that sparkle like real diamonds. The rhodium plating not only enhances the beauty of the studs but also provides a protective layer against tarnishing, ensuring long-lasting wear.Perfect for any occasion, whether it's a casual outing or a formal event, these studs add a touch of elegance and charm to any ensemble. Lightweight and comfortable, they are ideal for all-day wear. Gift them to a loved one or treat yourself to these timeless pieces that embody sophistication and grace."
},

    // {
    //     id:"102",
    //     images:"Images/2.jpg",
    //     name:"Women Padded Halter Neck Swimmimg Cloth",
    //     currPrice:507,
    //     quantity:1,
    //     originalPrice:2599,
    //     discount:"42",
    //     rating:{
    //         stars:"5",
    //         total:"5"
    //     },
    //     finalPrice:507,
    //     description:"Dive into style and comfort with our Women's Padded Halter Neck Swimming Suit. This chic swimwear is designed to accentuate your silhouette while providing the support you need. The halter neck design offers adjustable support and a flattering neckline, making it perfect for both poolside lounging and active beach days.Crafted from high-quality, quick-drying fabric, this swimsuit is not only durable but also stretchy, allowing for ease of movement as you swim or sunbathe. The padded cups enhance your shape and provide added coverage, ensuring you feel confident and comfortable.Available in a variety of vibrant colors and patterns, this swimming suit is perfect for every body type. Pair it with your favorite beach cover-up and sunglasses for a complete summer look."




        
    // },

    // {
    //     id:"103",
    //     images:"Images/3.jpg",
    //     name:"Women Red & White Printed A-Line K..",
    //     currPrice:49,
    //     quantity:1,
    //     originalPrice:1599,
    //     discount:"69",
    //     rating:{
    //         stars:"4.5",
    //         total:"5"
    //     },
    //     finalPrice:49,
    //     description:"Step out in style with our Women's Red & White Printed A-Line Kurta, a perfect blend of tradition and contemporary flair. Crafted from soft, breathable fabric, this kurta ensures all-day comfort while making a bold fashion statement. The vibrant red color, adorned with intricate white prints, adds a touch of elegance and charm to your wardrobeThe flattering A-line silhouette offers a relaxed fit, making it suitable for various occasions—whether it's a casual outing, festive celebration, or a day at the office. The knee-length design pairs beautifully with leggings, palazzos, or jeans, giving you versatile styling options."},


    {
        id:"104",
        images:"Images/4.jpg",
        name:"Indian Cricket  Team Odi Jersy Adidas",
        currPrice:3099,
        quantity:1,
        originalPrice:3099,
        discount:"0",
        rating:{
            stars:"5",
            total:"5"
        },
        finalPrice:3099,
        description:"Show your support for the Indian cricket team with the official ODI Jersey by Adidas. Designed for both performance and style, this jersey is made from high-quality, moisture-wicking fabric that keeps you comfortable and dry, whether you're on the field or cheering from the stands.The striking blue color, complemented by the iconic Indian cricket team logo and Adidas branding, makes this jersey a must-have for any true cricket fan. Its lightweight and breathable material ensures maximum flexibility and comfort during gameplay or while enjoying a match."




    },


    {
        id:"105",
        images:"Images/5.jpg",
        name:"Pure Cotton T-Shirt black man choice",
        currPrice:489,
        quantity:1,
        originalPrice:1399,
        discount:"65",
        rating:{
            stars:"3",
            total:"5"
        },
        finalPrice:489,
        description:"Elevate your everyday style with our Pure Cotton Black T-Shirt, designed for the modern man who values comfort and versatility. Made from 100% premium cotton, this t-shirt is soft against the skin, breathable, and perfect for year-round wear.The classic black color offers a timeless appeal, making it easy to pair with any outfit—be it jeans, shorts, or joggers. With a relaxed fit and crew neck design, this t-shirt provides both comfort and a flattering silhouette, making it an essential addition to your wardrobe."



    },


    {
        id:"106",
        images:"Images/6.jpg",
        name:"Men ReactX Running Shoes",
        currPrice:14995,
        quantity:1,
        originalPrice:14995,
        discount:"0",
        rating:{
            stars:"3.5",
            total:"5"
        },
        finalPrice:14995,
        description:"Experience unmatched comfort and performance with our Men’s ReactX Running Shoes. Engineered for runners and fitness enthusiasts, these shoes feature innovative ReactX technology, which provides exceptional cushioning and energy return with every step. The lightweight, breathable upper ensures a snug fit while allowing for maximum airflow, keeping your feet cool during even the most intense workouts. The durable outsole offers superior traction and stability on various surfaces, making these shoes perfect for both road running and trail adventures."



    },


    {
        id:"107",
        images:"Images/7.jpg",
        name:"Men Slim Fit Regular Shorts",
        currPrice:639,
        quantity:1,
        originalPrice:1599,
        discount:"60",
        rating:{
            stars:"2",
            total:"5"
        },
        finalPrice:639,
        description:"Upgrade your summer wardrobe with our Men’s Slim Fit Regular Shorts, designed for both style and comfort. These shorts are tailored with a modern slim fit, providing a sleek silhouette without compromising on ease of movement. Crafted from lightweight, breathable fabric, they are perfect for warm days, outdoor adventures, or casual outings.The versatile design features classic pockets for practicality, while the stylish cut allows for easy pairing with your favorite t-shirts or casual shirts. Whether you’re heading to the beach, running errands, or enjoying a weekend barbecue, these shorts will keep you looking sharp and feeling comfortable."


    },


    {
        id:"108",
        images:"Images/8.jpg",
        name:"Men Fresh Deodrant 150ml",
        currPrice:142,
        quantity:1,
        originalPrice:285,
        discount:"50",
        rating:{
            stars:"3.8",
            total:"5"
        },
        finalPrice:142,
        description:"Stay confident and refreshed all day with our Men’s Fresh Deodorant, expertly crafted to provide long-lasting protection against odor. This 150ml spray delivers a crisp, invigorating fragrance that awakens your senses and keeps you feeling vibrant, no matter the occasion.The lightweight formula is designed to be gentle on the skin while effectively combating sweat and odor. Perfect for daily use, whether you're hitting the gym, heading to the office, or enjoying a night out, this deodorant ensures you stay smelling great from morning till night."




    },
]

localStorage.setItem('data',JSON.stringify(DEFAULT_PRODUCT))




const datastores=localStorage.getItem('data')
const productarray = JSON.parse(datastores)

export default ProductProvider