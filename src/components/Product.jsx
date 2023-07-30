import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";

const Product = ({post}) => {  //prop me humne post pass kiya hua hai to iss post ke andar se  [post.title,post.description ], nikal lenge 

  const {cart} = useSelector((state) => state);   //cart ki value nikal rahe hai
  const dispatch = useDispatch();  //{addToCart} line no 55 and 47 ye function mujhe create karne padenge 
  //humsabko pata hai function calll kis prakar kar skta hu redux wale case ke andar to ans hai -> dispatch ke dwara

  const addToCart = () => {  //ye fun do kam karta hai 1.cart ke andar item add karta hai 
    dispatch(add(post));  //dispatch kar do add wale fun ko kya add karni hai to item add karni hai ya phir tumari post add karni hai 
    //aab iss (post) post tum access karna chate ho jo bi=hi tum ek dusre fun ke andar ek input parameter send kar rahe ho to usko kaise access karoge --> usko acces karne ka tarika hai payload ke dwara 
    toast.success("Item added to Cart");   //second kam toast dikhana  chahta hu
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));   //dispatch karna chahte hai remove wale fun ko to iske andar jis item ko remove karna chahta hu uss item ki id pass di (post.id)
    toast.error("Item removed from Cart");
  }

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        {/* description ko chota kar diye in tin function ki madad se  split(" ").slice(0,10).join(" ") */}
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full " />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        
        {
          cart.some((p) => p.id == post.id) ?  //cart ke andar aisi ek entity padi hui hai jiska nam hhumne rakh diya (p) iss p ke liye tum check kar rahe ho iski id == uski post ki id (p.id == post.id) agar ye truue ho jata hai yani ki jo post pass hui hai as a prop(line no 5) wo tumari cart me exist karti hai to mujhe remove ka button lagana padega 
          //agar exist nhi karta hai to add to cart ka button dikhao 
          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          // jab mai onclick par click karta hu to {removeFromCart} ye {addToCart}  ye function call kar diya 
          onClick={removeFromCart}>
            Remove Item
          </button>) :
          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={addToCart}>
            Add to Cart
          </button>)
        }
      </div>
     

    </div>
  );
};

export default Product;
