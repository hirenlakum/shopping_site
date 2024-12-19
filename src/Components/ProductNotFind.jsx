import { useNavigate } from "react-router-dom";

const ProductNotFind = () => {

    const navigate= useNavigate()

    const handleBack = () => {
navigate("/")
    }
    return(
        <div>
<h1 className="font-bold text-center mt-5 text-[30px] text-red-600 ">OOPS!! No Such a Product  Find</h1>
<div className="flex items-center justify-center mt-[20px]">


<button onClick={handleBack} className="w-[150px] h-[40px] rounded bg-green-400 mb-[20px] text-center flex items-center justify-center">Back To Home Page</button>
</div>

        </div>
    )
}

export default ProductNotFind